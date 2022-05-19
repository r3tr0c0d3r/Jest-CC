const sum = require('./sum')


describe('example test', () => {
    test('should add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('object assignment', () => {
        const obj = {}
        expect(obj).toEqual({})
    })
})