// main.ts
function document_ready() {
    var user : IPerson = {
        firstName: "",
        lastName: "",
        FullName() { return "AdHoc User"; }
    };
    $("#greeting-header").text(greeting(user));
};