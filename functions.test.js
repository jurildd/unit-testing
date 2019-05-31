const functions = require('./functions');

// test('Adds 2 + 2 to equal 4', () => {
//     expect(functions.add(2, 2)).toBe(4);
// });

// test('Should be null', () => {
//     expect(functions.isNull()).toBeNull();
// })

// test('Should be falsy', () => {
//     expect(functions.checkValue(null)).toBeFalsy();
// })

// test('User should be Juril Digamon object', () => {
//     expect(functions.createUser()).toEqual({
//         firstName: 'Juril',
//         lastName: 'Digamon'
//     });
// })

// test('Should be under 1600', () => {
//     const load1 = 800;
//     const load2 = 700;
//     expect(load1 + load2).toBeLessThan(1600);
// })

test('Array 3, 1, 5, 7, 10 should return length of 5', () => {
    const arr = [3, 1, 5, 7, 10]
    expect(functions.getN(arr)).toEqual(5);
})

test('Array 3, 1, 5, 7, 10 should sum = 26', () => {
    const arr = [3, 1, 5, 7, 10]
    expect(functions.getSum(arr)).toEqual(26);
})

test('Array 3, 1, 5, 7, 10 should return mean = 5.2', () => {
    const arr = [3, 1, 5, 7, 10]
    expect(functions.getMean(arr)).toEqual(5.2);
})

test('Array 3, 1, 5, 7, 10 should return standard deviation = 3.1240998703626617', () => {
    const arr = [3, 1, 5, 7, 10]
    expect(functions.getStDev(arr)).toBeCloseTo(3.1240998703626617);
})
// test('Should generate random number greater than or equal to 1 ', () => {
//     expect(functions.randomizer(10)).toBeGreaterThanOrEqual(1);
// })

// test('Should not generate a null object', () => {
//     expect(functions.randomizer(10)).not.toBeNull()
// })

// test('Should be defined', () => {
//     expect(functions.randomizer(10)).toBeDefined()
// })

// test('Should be equal or close to random number', () => {
//     const num = Math.floor((Math.random() * 10) + 1)
//     expect(functions.randomizer(10)).toBeCloseTo(num, 2)
// })

// test('dasdsadas', () => {
//     const properties2 = {resourceList: [], durationList: [], isFree: false}
//     expect(functions.createUser().properties).toContainEqual(properties2)
// })

// test('Should have same data', () => {

// })



// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false