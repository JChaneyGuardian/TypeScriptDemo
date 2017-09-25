// ISecurityIdentity
interface ISecurityIdentity extends Identity.IPerson {
    getLoginName(): String;
    authenticate(): boolean;
}
