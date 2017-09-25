// ISecurityIdentity
interface ISecurityIdentity extends IPerson {
    getLoginName(): String;
    authenticate(): boolean;
}
