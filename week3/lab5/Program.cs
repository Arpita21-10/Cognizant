using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


class Program
{
    static async Task Main()
    {
        using var context = new AppDbContext();

        Console.WriteLine("🛒 All Products:");
        var products = await context.Products.ToListAsync();
        foreach (var p in products)
            Console.WriteLine($"{p.Name} - ₹{p.Price}");

        Console.WriteLine("\n🔍 Find by ID (1):");
        var product = await context.Products.FindAsync(1);
        Console.WriteLine($"Found: {product?.Name ?? "Not found"}");

        Console.WriteLine("\n💰 First Expensive Product (> ₹50000):");
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        Console.WriteLine($"Expensive: {expensive?.Name ?? "No expensive product found"}");
    }
}
