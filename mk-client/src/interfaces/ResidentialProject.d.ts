export interface ResidentialProjectEditForm extends BaseForm {
    id?: number;
    projectName: string;
    developerId: string | number;
    residentialId: string | number;
}

export interface Developer {
    developerId: number;
    developerName: string;
}

export interface Residential {
    residentialId: number;
    category: string;
}

export interface DeveloperInfo {
    developers: Developer[];
}

export interface ResidentialInfo {
    residentials: Residential[];
}
