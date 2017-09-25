// main.ts
function document_ready() {
    var user = new SecurityIdentity(".Net", "Development", "Team", "nteam");
    if (user.authenticate())
        $("#greeting-header").text(greeting(user));
    else
        $("#greeting-header").text("Not Authenticated");
};