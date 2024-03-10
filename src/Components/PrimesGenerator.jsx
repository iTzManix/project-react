const generatorPrimes = (limit = 100000) =>{
    if (limit <= 1 || isNaN(limit)) {
        throw new Error('Invalid input: limit must be a positive integer greater than 1.');
      }
      const limitSqrt = Math.floor(Math.sqrt(limit));
      const sieve = new Array(limit + 1).fill(false);
      sieve[2] = true;
      sieve[3] = true;
      for (let x = 1; x <= limitSqrt; x++) {
        const x2 = x * x;
        for (let y = 1; y <= limitSqrt; y++) {
          const n = 4 * x2 + y * y;
          if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
            sieve[n] = !sieve[n];
          }
          const n2 = 3 * x2 + y * y;
          if (n2 <= limit && n2 % 12 === 7) {
            sieve[n2] = !sieve[n2];
          }
          const n3 = 3 * x2 - y * y;
          if (x > y && n3 <= limit && n3 % 12 === 11) {
            sieve[n3] = !sieve[n3];
          }
        }
      }
      for (let n = 5; n <= limitSqrt; n += 6) {
        if (sieve[n]) {
          const x = n * n;
          for (let i = x; i <= limit; i += x) {
            sieve[i] = false;
          }
        }
      }
    
      const primes = [];
      for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
          primes.push(i);
        }
      }
    
      return primes;
    };
function PrimesGenerator() {
  return (
    generatorPrimes()
  )
}

export default PrimesGenerator