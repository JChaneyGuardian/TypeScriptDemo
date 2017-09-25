// main.ts
$(document).ready(function () {
    var user = {
        firstName: "",
        lastName: "",
        fullName() { return "AdHoc User"; }
    };
    $("#greeting-header").text(greeting(user));
});