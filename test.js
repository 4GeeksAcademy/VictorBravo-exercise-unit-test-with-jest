// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like it's supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One dollar should be 146.2616822505 yens", function() {
    //Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    
    //Use the function like it's supposed to be used
    const yens = fromDollarToYen(146.2616822505);
    
    //If 1 dollar is 146.2616822505 yens, then 3.5 dollars should be (3.5 * 146.2616822505)
    const expected = 3.5 * 146.2616822505;

    //This is the comparison for the unit test
    expect(fromDollarToYen(3.5)).toBe(511.91588785046724); // 1 dolar is 146.2616822505 yens, then 3.5 dollars should be = (3.5 * 146.2616822505)
});

test("One yen should be 0.0055591055 pounds", function() {
    //Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    
    //Use the function like it's supposed to be used
    const yens = fromYenToPound(0.0055591055);
    
    //If 1 yen is 0.0055591055 pounds, then 3.5 dollars should be (3.5 * 0.0055591055)
    const expected = 3.5 * 0.0055591055;

    //This is the comparison for the unit test
    expect(fromYenToPound(3.5)).toBe(0.019456869009584665); // 1 yen is 0.0055591055 pounds, then 3.5 yens should be = (3.5 * 0.0055591055)
});
