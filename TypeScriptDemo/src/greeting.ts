// greeting.ts
function greeting(person: IPerson) 
function greeting(firstName: string, lastName?: string): string
function greeting(parm: any, ...restOfName: string[]): string {
    if (typeof (parm) === "object")
        return greeting((parm as IPerson).FullName());
    else if ((typeof (parm) === "string")) {
        var name = parm;
        if (restOfName.length > 0)
            name = name + " " + restOfName.join(" ");
        return `Hello ${name}!`;
    }
    else
        return undefined;
}