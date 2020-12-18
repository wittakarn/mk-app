import { Developer, DeveloperInfo, Residential, ResidentialInfo } from "interfaces/ResidentialProject";

const mockDevelopers: Developer[] = [
    {
        developerId: 1,
        developerName: 'PRUKSA',
    },
    {
        developerId: 2,
        developerName: 'AP',
    },
    {
        developerId: 3,
        developerName: 'PROPERTY PERFECT',
    },
    {
        developerId: 4,
        developerName: 'SANSIRI',
    },
    {
        developerId: 5,
        developerName: 'SUPALAI',
    },
    {
        developerId: 6,
        developerName: 'ANANDA',
    },
    {
        developerId: 7,
        developerName: 'LAND & HOUSES',
    },
    {
        developerId: 8,
        developerName: 'GOLDENLAND & GRAND UNITY',
    },
    {
        developerId: 9,
        developerName: 'ORIGIN',
    },
    {
        developerId: 10,
        developerName: 'SC ASSET',
    },
];

const mockResidential: Residential[] = [
    {
        residentialId: 1,
        category: 'Condo',
    },
    {
        residentialId: 2,
        category: 'Single House',
    },
    {
        residentialId: 3,
        category: 'Townhouse',
    },
    {
        residentialId: 4,
        category: 'Apartment',
    },
];

export const fetchDeveloperInfo = async (): Promise<DeveloperInfo> => {
    return new Promise<DeveloperInfo>((resolve) => {
        resolve({
            developers: [...mockDevelopers],
        });
    });
};

export const fetchResidentialInfo = async (): Promise<ResidentialInfo> => {
    return new Promise<ResidentialInfo>((resolve) => {
        resolve({
            residentials: [...mockResidential],
        });
    });
};
