const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require("../src/math");

// test("Calculate total with tip", () => {
//     const total = calculateTip(10, 0.3);
//     expect(total).toBe(13);
// });

test("Default", () => {
    const total = calculateTip(10);
    expect(total).toBe(12.5);
});

// test("CtoFahrenheit", () => {
//     const c = fahrenheitToCelsius(32);
//     expect(c).toBe(0);
// })

// test("FtoC", () => {
//     const c = celsiusToFahrenheit(0);
//     expect(c).toBe(32);
// })

// // test("Async test demo", (done) => {
// //     setTimeout(() =>{
// //         expect(1).toBe(2);
// //         done();
// //     }, 2000)
// // })

// test("Should add two numbers", (done) => {
//     add(2, 3).then((sum) => {
//         expect(sum).toBe(5);
//         done();
//     })
// })

// test("Should add two numbers async await", async () => {
//     const sum = await add(10, 22);
//     expect(sum).toBe(32);
// })