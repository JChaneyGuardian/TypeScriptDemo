// main.ts
function document_ready() {
    var user = {
        firstName: "",
        lastName: "",
        fullName() { return "AdHoc User"; }
    };
    $("#greeting-header").text(greeting(user));
};