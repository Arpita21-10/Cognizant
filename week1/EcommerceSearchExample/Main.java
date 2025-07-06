import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "iPhone", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Laptop", "Electronics"),
            new Product(104, "Notebook", "Stationery"),
            new Product(105, "Watch", "Accessories")
        };

        System.out.println("Linear Search: Searching for 'Laptop'");
        Product result1 = SearchService.linearSearch(products, "Laptop");
        System.out.println(result1 != null ? "Found: " + result1 : "Product not found");

        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));

        System.out.println("\nBinary Search: Searching for 'Laptop'");
        Product result2 = SearchService.binarySearch(products, "Laptop");
        System.out.println(result2 != null ? "Found: " + result2 : "Product not found");
    }
}
