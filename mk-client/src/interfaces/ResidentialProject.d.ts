import { QuestionResult } from "./Question";

export interface ResidentialProjectEditForm extends BaseForm {
    id?: number;
    projectName: string;
    developerId: string | number;
    residentialId: string | number;
    contractorId: string | number;
    designerId: string | number;
    questionDictionary: QuestionDictionary;
}

export interface QuestionDictionary {
    [productId: number] : QuestionResult;
}

export interface Developer {
    developerId: number;
    developerName: string;
}

export interface Residential {
    residentialId: number;
    category: string;
}

export interface Constructor {
    constructorId: number;
    constructorName: string;
}

export interface Designer {
    designerId: number;
    designerName: string;
}

export interface DeveloperInfo {
    developers: Developer[];
}

export interface ResidentialInfo {
    residentials: Residential[];
}

export interface ConstructorInfo {
    constructors: Constructor[];
}

export interface DesignerInfo {
    designers: Designer[];
}
