function calculateFactorial(n){
    if (n < 0) {
        console.log("Факториал считает только для натуральних чисел")
    }else {
        let factorial = 1 
        for (let i=2; i <= n; i++){
            factorial *= 1
        }
        console.log(factorial)
    }
    
}
let n = prompt("Enter num for factorial ->");
calculateFactorial(n)