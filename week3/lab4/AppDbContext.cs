using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Product>  Products  => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    optionsBuilder.UseOracle(
        "User Id=retail_user;Password=retail_pwd;Data Source=localhost:1521/XEPDB1");
}

}
