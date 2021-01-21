import { UserAccountEditForm, UserAccountRequest } from "interfaces/UserAccount";

export const mapUserAccountRequest = (form: UserAccountEditForm): UserAccountRequest => {
    return {
        name: form.name,
        surname: form.surname,
        username: form.username,
        userPassword: form.userPassword,
        role: form.role,
        additionRoles: [
            ...form.additionRoles,
        ],
    };
}