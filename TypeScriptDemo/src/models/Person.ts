// Person
namespace Identity {
    export class Person implements IPerson {
        lastName: string;
        firstName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        FullName = () => {
            return this.firstName + " " + this.lastName;
        }
    }

    export class PersonWithMiddleName extends Person {
        middleName: string;
        constructor(firstName: string, middleName: string, lastName: string) {
            super(firstName, lastName);
            this.middleName = middleName;
        }

        FullName = () => {
            return this.firstName + " " + this.middleName + " " + this.lastName;
        }

    }
}