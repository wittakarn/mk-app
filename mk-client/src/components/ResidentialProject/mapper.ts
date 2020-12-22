import { ResidentialProjectEditForm, ResidentialProjectRequest } from "interfaces/ResidentialProject";

export const initialState = {
    developerInfo: {
        developers: [],
    },
    residentialInfo: {
        residentials: [],
    },
    constructorInfo: {
        constructors: [],
    },
    designerInfo: {
        designers: [],
    },
    toaProductInfo: {
        toaProducts: [],
    }
};

export const mapResidentialProjectRequest = (form: ResidentialProjectEditForm): ResidentialProjectRequest => {
    return {
        projectName: form.projectName,
        developerId: Number(form.developerId),
        residentialId: Number(form.residentialId),
        contractorId: Number(form.contractorId),
        designerId: Number(form.designerId),
        questionDictionary: {
            ...form.questionDictionary
        },
    };
}
