import * as Lib from "greeting";
import SecurityIdentity from "models/SecurityIdentity";

export function document_ready() {
    var user = new SecurityIdentity(".Net", "Development", "Team", "nteam");
    if (user.authenticate())
        $("#greeting-header").text(Lib.greeting(user));
    else
        $("#greeting-header").text("Not Authorized");
}

