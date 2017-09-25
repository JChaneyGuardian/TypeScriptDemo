import IApplication from "models/IApplication";
import ISecurityIdentity from "models/ISecurityIdentity";
import SecurityIdentity from "models/SecurityIdentity";
import IPage from "models/IPage";
import MainPage from "pages/MainPage";

class WebApplication implements IApplication {
    private user: SecurityIdentity;

    findElement(id: string): HTMLElement {
        return document.getElementById(id);
    }

    public getCurrentUser(): ISecurityIdentity {
        if (this.user === undefined)
            this.user = new SecurityIdentity(".Net", "Development", "Team", "nteam");
        return this.user;
    }

    getPage(pageName: string): IPage {
        var page: IPage;
        if (pageName === "main")
            page = new MainPage();

        if (page !== undefined)
            page.initialize(this);
        return page;
    }


}

export function document_ready() {
    var webApp = new WebApplication();
    if (webApp.getCurrentUser().authenticate()) {
        var page = webApp.getPage("main");
        page.switchingTo();
    }
    else
        webApp.findElement("greeting-header").innerText = "Not Authorized";
}
