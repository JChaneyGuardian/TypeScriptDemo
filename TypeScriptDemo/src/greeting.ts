// greeting.ts
namespace Lib {
    export function greeting(person: Identity.IPerson)
    export function greeting(firstName: string, lastName?: string): string
    export function greeting(parm: any, ...restOfName: string[]): string {
        if (typeof (parm) === "object")
            return greeting((parm as Identity.IPerson).FullName());
        else if ((typeof (parm) === "string")) {
            var name = parm;
            if (restOfName.length > 0)
                name = name + " " + restOfName.join(" ");
            return `Hello ${name}!`;
        }
        else
            return undefined;
    }
}