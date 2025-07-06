public class Forecast {

   
    public static double futureValue(double principal, double rate, int years) {
        if (years == 0) return principal;
        return futureValue(principal, rate, years - 1) * (1 + rate);
    }
}
