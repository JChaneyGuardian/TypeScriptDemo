import IApplication from "IApplication"

export interface IPage {
    initialize(context: IApplication): void;
    switchingFrom(): boolean;
    switchingTo(): boolean;
}

export default IPage;