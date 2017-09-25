﻿// GreetingTest
function setup_tests() {
    describe('Greeting function', () => {
        it('should return both first and last name', () => {
            var result = greeting("Test", "Person");
            chai.expect(result).to.equal("Hello Test Person!");
        })
        it('should be able to use an adhoc person', () => {
            var person: Person = {
                lastName: "Dog",
                middleName: "The",
                firstName: "Snoop",
                fullName() { return "Martha Stewart"; }
            }
            var result = greeting(person);
            chai.expect(result).to.equal("Hello Martha Stewart!");
        })

        it('should be able to use a Person object', () => {
            var person = new PersonObj("Uncle", "Bob");

            var result = greeting(person);
            chai.expect(result).to.equal("Hello Uncle Bob!");
        });

        it('should be able to use a PersonWithMiddleName object', () => {
            var person = new PersonWithMiddleNameObj("Sam", "I", "Am");

            var result = greeting(person);
            chai.expect(result).to.equal("Hello Sam I Am!");
        })

        it('should be able to handled an undefined', () => {
            //var person = new PersonWithMiddleNameObj("Sam", "I", "Am");

            var result = greeting(undefined);
            chai.expect(result).to.equal(undefined);
        })
    })
}