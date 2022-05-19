const sum = require('./sum')


describe('Example test', () => {
    test('should add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    test('Object Assignment', () => {
        const obj = {}
        expect(obj).toEqual({})
    })
})

describe('Truthy or Falsy', () => {
    it('null', () => {
        const n = null
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })
})

describe('Numbers', () => {
    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);
      
        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
      });

      test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        //expect(value).toBe(0.3);           This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
      });
})

describe('Strings', () => {
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
      });
      
      test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
      });
})

describe('Arrays', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
      ];
      
      test('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
      });

      function compileAndroidCode() {
        throw new Error('you are using the wrong JDK');
      }

      describe('Exepions', () => {
           
          test('compiling android goes as expected', () => {
            expect(() => compileAndroidCode()).toThrow();
            expect(() => compileAndroidCode()).toThrow(Error);
          
            // You can also use the exact error message or a regexp
            // expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
            // expect(() => compileAndroidCode()).toThrow(/JDK/);
          });
      })
})