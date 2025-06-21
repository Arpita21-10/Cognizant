public class Main {
    public static void main(String[] args) {
        double principal = 10000;
        double rate = 0.05;
        int years = 5;

        System.out.println("Recursive Forecast:");
        double value1 = Forecast.futureValue(principal, rate, years);
        System.out.println("Future value after " + years + " years: ₹" + value1);

        System.out.println("\nOptimized Forecast with Memoization:");
        double value2 = ForecastOptimized.futureValue(principal, rate, years);
        System.out.println("Future value after " + years + " years: ₹" + value2);
    }
}
