// Program.cs
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main()
    {
        using var context = new AppDbContext();

        // Skip if data already exists
        if (await context.Categories.AnyAsync()) 
        {
            Console.WriteLine("Initial data already exists.");
            return;
        }

        // Create categories
        var electronics = new Category { Name = "Electronics" };
        var groceries = new Category { Name = "Groceries" };

        // Add categories
        await context.Categories.AddRangeAsync(electronics, groceries);

        // Create products
        var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
        var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

        // Add products
        await context.Products.AddRangeAsync(product1, product2);

        // Save to DB
        await context.SaveChangesAsync();

        Console.WriteLine("✅ Initial data inserted successfully!");
    }
}
