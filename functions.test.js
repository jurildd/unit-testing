const functions = require('./functions');

test('Should generate random number less than or equal to 10', () => {
    expect(functions.randomizer(10)).toBeLessThanOrEqual(10);
})

test('Should generate random number greater than or equal to 1 ', () => {
    expect(functions.randomizer(10)).toBeGreaterThanOrEqual(1);
})

test('Should not generate a null object', () => {
    expect(functions.randomizer(10)).not.toBeNull()
})

test('Should be defined', () => {
    expect(functions.randomizer(10)).toBeDefined()
})


// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false