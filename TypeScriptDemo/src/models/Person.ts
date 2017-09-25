import * as Identity from "IPerson";

class Person implements Identity.IPerson {
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

export default class PersonWithMiddleName extends Person {
    middleName: string;
    constructor(firstName: string, middleName: string, lastName: string) {
        super(firstName, lastName);
        this.middleName = middleName;
    }

    FullName = () => {
        if (this.middleName)
            return this.firstName + " " + this.middleName + " " + this.lastName;
        else
            return this.firstName + " " + this.lastName;

    }

}
