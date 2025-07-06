// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
// Program.cs
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;

class Program
{
    static void Main()
    {
        using var context = new RetailContext();

        if (!context.Categories.Any())
        {
            var electronics = new Category { Name = "Electronics" };
            var grocery = new Category { Name = "Grocery" };

            context.Categories.AddRange(electronics, grocery);
            context.Products.AddRange(
                new Product { Name = "Laptop", StockLevel = 10, Price = 80000, Category = electronics },
                new Product { Name = "Mobile", StockLevel = 25, Price = 25000, Category = electronics },
                new Product { Name = "Apple", StockLevel = 100, Price = 100, Category = grocery }
            );

            context.SaveChanges();
            Console.WriteLine("Database seeded.");
        }

        var products = context.Products
            .Include(p => p.Category)
            .ToList();

        foreach (var product in products)
        {
            Console.WriteLine($"{product.Name} ({product.Category?.Name}) - Stock: {product.StockLevel}, Price: ₹{product.Price}");
        }
    }
}
