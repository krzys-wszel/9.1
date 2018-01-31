function getTriangleArea(a, h) {
    var result = (a * h) / 2;
    if ((a <= 0) || (h <= 0)) {
        console.warn('Nieprawidłowe dane');
    } else {
        return result;
    }
}
console.log(getTriangleArea(10, 20));

var triangle1Area = getTriangleArea(4, 5),
    triangle2Area = getTriangleArea(10, 10),
    triangle3Area = getTriangleArea(1, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
