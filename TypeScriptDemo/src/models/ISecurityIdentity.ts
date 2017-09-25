// ISecurityIdentity
interface ISecurityIdentity  {
    getLoginName(): String;
    authenticate(): boolean;
}
