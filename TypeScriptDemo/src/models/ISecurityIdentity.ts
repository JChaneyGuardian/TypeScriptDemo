import IPerson from "IPerson"

export interface ISecurityIdentity extends IPerson {
    getLoginName(): String;
    authenticate(): boolean;
}
export default ISecurityIdentity;

