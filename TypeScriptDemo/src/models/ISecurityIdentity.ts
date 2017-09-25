export interface ISecurityIdentity {
    getLoginName(): String;
    authenticate(): boolean;
}
export default ISecurityIdentity;

