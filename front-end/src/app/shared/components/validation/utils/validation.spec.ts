import { TestScheduler } from 'rxjs/testing';
import { throttleTime, of, interval, from } from 'rxjs';
import * as funcValidation from './validation';
import { concatMap, delay, concatAll, take, map, filter, tap, reduce, toArray, scan, switchMap, mergeMap } from 'rxjs/operators'

describe('Test validation functions', () => {

    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected)
    });

    // This test runs synchronously. 
    testScheduler.run((helpers) => {
        const { cold, time, expectObservable, expectSubscriptions, hot, animate } = helpers;

        xit('scan works fine', () => {
            const values = { a: 'jefferson', b: ' medina', x: 'jefferson', y: 'jefferson medina' }
            const source = cold('-a-b|', values);
            const expected = '    -x-y|'
            const result = source.pipe(scan((a: string, b: string) => a + b, ''))
            expectObservable(result).toBe(expected, values)
        })

        xit('reduce works fine', () => {
            const values = { a: 'jefferson', b: ' medina', c: 'jefferson medina' }
            const source = cold('-(ab|)', values);
            const expected = '    -(c|)'
            const result = source.pipe(reduce((a: string, b: string) => a + b, ''))
            expectObservable(result).toBe(expected, values)

        })


        it('cleanBlank works fine', () => {
            const result = of('string  ').pipe(funcValidation.cleanBlank)
            result.subscribe((data) => {
                expect(data).toBe('string')
            })
        })

        it('cleanBlank works fine when is empty', () => {
            const result = of('').pipe(funcValidation.cleanBlank)
            result.subscribe((data) => {
                expect(data).toBe('')
            })
        })

        it('cleanBlank works fine when is array', () => {
            const result = of(['string']).pipe(funcValidation.cleanBlank)
            result.subscribe((data) => {
                expect(data).toEqual(['string'])
            })
        })

        it('validateEmail works fine', () => {
            const result = of('jefferson@hotmail.com').pipe(funcValidation.validateEmail)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('validateEmail works fine when is not right email', () => {
            const result = of('jeffersonhotmail.com').pipe(funcValidation.validateEmail)
            result.subscribe((data) => {
                expect(data).toEqual(false)
            })
        })

        it('passwordLength greater than 6', () => {
            const result = of('password12122323').pipe(funcValidation.passwordLength)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('passwordLength less than 6', () => {
            const result = of('123').pipe(funcValidation.passwordLength)
            result.subscribe((data) => {
                expect(data).toEqual(false)
            })
        })

        it('onlyNumber works fine', () => {
            const result = of('12354').pipe(funcValidation.onlyNumber)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('onlyNumber works fine is not right number', () => {
            const result = of('1235e4').pipe(funcValidation.onlyNumber)
            result.subscribe((data) => {
                expect(data).toEqual(false)
            })
        })

        it('creditCardLength works fine', () => {
            const result = of('1234567895963218').pipe(funcValidation.creditCardLength)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('creditCardLength works fine when is not right', () => {
            const result = of('123').pipe(funcValidation.creditCardLength)
            result.subscribe((data) => {
                expect(data).toEqual(false)
            })
        })

        it('nameLength works fine', () => {
            const result = of('namefine').pipe(funcValidation.nameLength)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('nameLength works fine when is not met the condition', () => {
            const result = of('namefine').pipe(funcValidation.nameLength)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('nameLength works fine when is greater than 10 ', () => {
            const result = of('namefine454545454545').pipe(funcValidation.nameLength)
            result.subscribe((data) => {
                expect(data).toEqual(false)
            })
        })

        it('descriptionLength works fine ', () => {
            const result = of('namefine454545454545').pipe(funcValidation.descriptionLength)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('descriptionLength works fine when is greater 116 ', () => {
            const result = of('1'.repeat(200)).pipe(funcValidation.descriptionLength)
            result.subscribe((data) => {
                expect(data).toEqual(false)
            })
        })

        it('ifEmpty works fine when length ==0', () => {
            const result = of('jefferson').pipe(funcValidation.ifEmpty)
            result.subscribe((data) => {
                expect(data).toBeTruthy()
            })

        })

        it('ifChecked works fine ', () => {
            const result = of(true).pipe(funcValidation.ifChecked)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

        it('validObs works fine ', () => {
            const result = of(true).pipe(funcValidation.validObs)
            result.subscribe((data) => {
                expect(data).toEqual(true)
            })
        })

    })
});


describe('Map ', () => {

    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected)
    });

    // This test runs synchronously. 

    it('should add "1" to each value emitted', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;

            const values = { a: 1, b: 2, c: 3, x: 2, y: 3, z: 4 };
            const source = cold('-a-b-c-|', values);
            const expected = '-x-y-z-|';
            const result = source.pipe(map((x: number) => x + 1));
            expectObservable(result).toBe(expected, values);

        })
    })
});

describe('SwitchMap ', () => {

    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected)
    });

    // This test runs synchronously. 

    it('should maps each value to inner observable and flattens', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;

            const values = { a: 10, b: 30, x: 20, y:40 };
            const obs1 = cold('-a-----a--b-|', values);
            const obs2 = cold('a-a-a|',values);
            const expected =  '-x-x-x-x-xy-y-y|'
            const result = obs1.pipe((switchMap(x => obs2.pipe(map(y => x+ y )))))
            expectObservable(result).toBe(expected, values);           
        })
    })
});

describe('MergeMap ', () => {

    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected)
    });

    // This test runs synchronously. 

    it('should maps to inner observable and flattens', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;

            const values = { a: 'hello', b: 'world', x: 'hello world' };
            const obs1 = cold('-a-------a|', values);
            const obs2 = cold('-b-b-b-|',values);
            const expected =  '--x-x-x---x-x-x-|'
            const result = obs1.pipe((mergeMap(x => obs2.pipe(map(y => x+' '+ y )))))
            expectObservable(result).toBe(expected, values);           
        })
    })
});

describe('ConcatMap ', () => {

    const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected)
    });

    // This test runs synchronously. 

    it('should maps values to inner observable and emits in order', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;

            const values = { a: 10, b: 30, x: 20 , y:40 };
            const obs1 = cold('-a--------b------ab|', values);
            const obs2 = cold('a-a-a|',values);
            const expected =  '-x-x-x----y-y-y--x-x-xy-y-y|'
            const result = obs1.pipe((concatMap(x => obs2.pipe(map(y => x+ y )))))
            expectObservable(result).toBe(expected, values);           
        })
    })
});
