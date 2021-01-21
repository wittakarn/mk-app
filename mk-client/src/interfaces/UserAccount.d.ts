import { QuestionResult } from "./Question";

export interface UserAccountEditForm extends BaseForm {
    accountId?: number;
    name: string;
    surname: string;
    username: string;
    userPassword: string;
    role: string;
    additionRoles: string[];
}

export interface UserAccountRequest {
    accountId?: number;
    name: string;
    surname: string;
    username: string;
    userPassword: string;
    role: string;
    additionRoles: string[];
}
