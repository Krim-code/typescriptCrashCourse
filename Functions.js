function add(a, b) {
    return a + b;
}
var a = 6;
var b = 7;
var c = add(a, b);
console.log(c);
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('One param: ', position(42));
console.log('Two params: ', position(10, 15));
