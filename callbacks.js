function calculate(a, b, operation) {

    return operation(a, b);


}
function addition(a, b) {
    return a + b;
}
const ans = calculate(5, 6, addition);
console.log(ans);


