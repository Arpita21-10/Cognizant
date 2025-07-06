import java.util.HashMap;

public class ForecastOptimized {

    private static final HashMap<Integer, Double> memo = new HashMap<>();

    public static double futureValue(double principal, double rate, int years) {
        if (years == 0) return principal;
        if (memo.containsKey(years)) return memo.get(years);

        double result = futureValue(principal, rate, years - 1) * (1 + rate);
        memo.put(years, result);
        return result;
    }
}
