// Person
class PersonObj implements Person {
    lastName: string;
    firstName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName=()=> {
        return this.firstName + " " + this.lastName;
    }
}

class PersonWithMiddleNameObj extends PersonObj {
    middleName: string;
    constructor(firstName: string, middleName: string, lastName: string) {
        super(firstName, lastName);
        this.middleName = middleName;
    }

    fullName = () => {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }

}	