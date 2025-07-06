// RetailContext.cs
using Microsoft.EntityFrameworkCore;

public class RetailContext : DbContext
{
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Product> Products => Set<Product>();

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=RetailInventoryDb;Trusted_Connection=True;");
    }
}
