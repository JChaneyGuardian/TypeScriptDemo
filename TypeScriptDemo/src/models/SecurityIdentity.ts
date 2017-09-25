class SecurityIdentity extends PersonWithMiddleName implements ISecurityIdentity {
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

