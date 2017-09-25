import IApplication from "../models/IApplication";
import ISecurityIdentity from "../models/ISecurityIdentity";
import SecurityIdentity from "../models/SecurityIdentity";
import IPage from "../models/IPage";
import MainPage from "../pages/MainPage";

class TestApplication implements IApplication {
    testHeader: HTMLElement;

    findElement(id: string): HTMLElement {
        this.testHeader = document.createElement("H3");
        return this.testHeader;

    }
    getCurrentUser(): ISecurityIdentity {
        return new SecurityIdentity("Test", "", "Person", "tperson");

    }
    getPage(pageName: string): IPage {
        var testPage = new MainPage();
        testPage.initialize(this);
        return testPage;
    }

}

describe('MainPage', () => {
    it('should set the greeting-header to "Hello Test Person!"', () => {
        var ctx = new TestApplication();
        var page = ctx.getPage("main");
        page.switchingTo();

        chai.expect(ctx.testHeader.innerHTML).to.equal("Hello Test Person!");
    });
});