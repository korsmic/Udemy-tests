const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33,11);
            expect(res).toBe(44).toBeA('number'); //toBeA() is type of value
        });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3,(sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });


    it('should square a numbers', () => {
        var res = utils.square(3);
        
        expect(res).toBe(9).toBeA('number');
        // if (res != 9) {
        //     throw new Error (`Expected 9 get ${res}`)
        // }
    });

    it('should async square a numbers', (done) => {
        utils.asyncSquare(5,(res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });


    // should verfy first and last names are set
    // assert it includes firstName and lastName with proper values

    it('should set firstName and lastName', () => {
        var user = {location: 'Japan', age: 27};
        var res = utils.setName(user, 'Masayoshi Kojima');
        
        expect(res).toInclude({
            firstName: 'Masayoshi',
            lastName: 'Kojima'
        })
    });


});





// it('should expect some values', () => {
//     // expect(12).toNotBe(11);         //toNotBe is not same
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     // expect([2,3,4]).toInclude(2);
//     // expect([2,3,4]).toExclude(2);
//     expect({
//         name: 'James',
//         age: 25,
//         location: 'Japan'
//     }).toInclude({
//         age: 25
//     })
// });