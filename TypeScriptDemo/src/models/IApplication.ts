import ISecurityIdentity from "ISecurityIdentity";
import IPage from "IPage";

export interface IApplication {
    findElement(id: string): HTMLElement;
    getCurrentUser(): ISecurityIdentity;
    getPage(pageName: string): IPage;
}

export default IApplication;