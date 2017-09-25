import PersonWithMiddleName from "./Person";
import * as Identity from "./IPerson";
import ISecurityIdentity from "./ISecurityIdentity";


export default class SecurityIdentity extends PersonWithMiddleName implements Identity.IPerson, ISecurityIdentity {
    constructor(firstName: string, middleName: string, lastName: string, loginName?: string) {
        super(firstName, middleName, lastName);
        this.loginName = loginName;
    };
    private loginName: string;

    getLoginName() {
        return this.loginName;
    };

    authenticate() {
        return (this.loginName !== undefined) && (this.loginName !== null) && (this.loginName.trim() !== "");
    }

}
