function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    } 
    return true;
} 
function findPrimes() {
    const a = parseInt(prompt("Enter the first number (a):"));
    const b = parseInt(prompt("Enter the second number (b):"));
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}
findPrimes();
