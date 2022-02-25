function factorial(n, result = 1) {
   if (n <= 0) {
      return result
   }

   result *= n
   factorial(n - 1, result)
}
