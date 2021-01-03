import { QuestionResult } from "./Question";

export interface UserAccountEditForm extends BaseForm {
    accountId?: number;
    name: string;
    surname: string;
    username: string;
    password: string;
}

export interface UserAccountRequest {
    accountId?: number;
    name: string;
    surname: string;
    username: string;
    password: string;
}
