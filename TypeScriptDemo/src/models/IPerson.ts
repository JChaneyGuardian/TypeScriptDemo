﻿// IPerson
namespace Identity {
    export interface IPerson {
        firstName: string;
        middleName?: string;
        lastName: string;
        FullName(): string;
    }
}
