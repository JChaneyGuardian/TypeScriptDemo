import IPage from "../models/IPage";
import IApplication from "../models/IApplication";
import * as Lib from "greeting";

export default class MainPage implements IPage {
    initialize(app: IApplication): void {
        this.application = app;
    }
    switchingFrom(): boolean {
        throw new Error("Method not implemented.");
    }
    switchingTo(): boolean {
        var greetingHeader = this.application.findElement("greeting-header");
        greetingHeader.innerHTML = Lib.greeting(this.application.getCurrentUser());
        return true;
    }
    private application: IApplication;

}


