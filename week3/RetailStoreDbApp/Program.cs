// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
using System;
using System.Linq;

class Program
{
    static void Main()
    {
        using var context = new AppDbContext();

        // Seed data only once
        if (!context.Categories.Any())
        {
            var electronics = new Category { Name = "Electronics" };
            var grocery = new Category { Name = "Grocery" };

            context.Categories.AddRange(electronics, grocery);
            context.Products.AddRange(
                new Product { Name = "Laptop", Price = 60000, Category = electronics },
                new Product { Name = "Phone", Price = 30000, Category = electronics },
                new Product { Name = "Apple", Price = 100, Category = grocery }
            );

            context.SaveChanges();
            Console.WriteLine("Database seeded.");
        }

        // Display products
        var products = context.Products
            .Select(p => new { p.Name, p.Price, Category = p.Category!.Name })
            .ToList();

        foreach (var p in products)
        {
            Console.WriteLine($"{p.Name} ({p.Category}) - ₹{p.Price}");
        }
    }
}
