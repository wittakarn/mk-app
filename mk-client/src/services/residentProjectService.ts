import { ConstructorInfo, Constructor, Designer, DesignerInfo, Developer, DeveloperInfo, Residential, ResidentialInfo } from "interfaces/ResidentialProject";

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

const mockResidentials: Residential[] = [
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

const mockContractors: Constructor[] = [
    {
        constructorId: 1,
        constructorName: 'ยูนิค เอ็นจิเนียริ่ง แอนด์ คอนสตรัคชั่น',
    },
    {
        constructorId: 2,
        constructorName: 'บมจ.อิตาเลียนไทย ดีเวล๊อปเมนต์',
    },
    {
        constructorId: 3,
        constructorName: 'ช.การช่าง',
    },
    {
        constructorId: 4,
        constructorName: 'ซิโน-ไทยเอ็นจีเนียริ่งแอนด์คอนสตรัคชั่น',
    },
    {
        constructorId: 5,
        constructorName: 'ซินเท็ค คอนสตรัคชั่น จำกัด',
    },
    {
        constructorId: 6,
        constructorName: 'คริสเตียนีและนีลเส็น',
    },
    {
        constructorId: 7,
        constructorName: 'เพาเวอร์ไลน์ เอ็นจิเนียริ่ง จํากัด (มหาชน)',
    },
    {
        constructorId: 8,
        constructorName: 'ซีฟโก้ จํากัด (มหาชน)',
    },
    {
        constructorId: 9,
        constructorName: 'เคเทค คอนสตรัคชั่น จำกัด (มหาชน) (Depot)',
    },
    {
        constructorId: 10,
        constructorName: 'เนาวรัตน์พัฒนาการ จํากัด (มหาชน)',
    },
];

const mockDesigners: Designer[] = [
    {
        designerId: 1,
        designerName: 'ยูนิค เอ็นจิเนียริ่ง แอนด์ คอนสตรัคชั่น',
    },
    {
        designerId: 2,
        designerName: 'ดีบี สตูดิโอ จำกัด ',
    },
    {
        designerId: 3,
        designerName: 'ดีไซน์ ดีเวลลอป จำกัด',
    },
    {
        designerId: 4,
        designerName: 'เอช โอ เอ (เฮ้าส์ ออฟ อาร์คิเต็ค) จำกัด',
    },
    {
        designerId: 5,
        designerName: 'ไอ วิว ดีไซน์ สตูดิโอ จำกัด',
    },
    {
        designerId: 6,
        designerName: 'ทริปเปิ้ล ไนน์ อาร์คิเทคส์ จำกัด',
    },
    {
        designerId: 7,
        designerName: 'แทนเดม อาร์คิเท็ค (2001) จำกัด',
    },
    {
        designerId: 8,
        designerName: 'เรียล เอสเตท แพลนนิ่ง คอนซัลแทนท์ส จำกัด',
    },
    {
        designerId: 9,
        designerName: 'ปาล์มเมอร์ แอนด์ เทอร์เนอร์ (ประเทศไทย) จำกัด',
    },
    {
        designerId: 10,
        designerName: 'เคทีจีวาย อินเตอร์แอสโซซิเอทส์ จำกัด',
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
            residentials: [...mockResidentials],
        });
    });
};

export const fetchConstructorInfo = async (): Promise<ConstructorInfo> => {
    return new Promise<ConstructorInfo>((resolve) => {
        resolve({
            constructors: [...mockContractors],
        });
    });
};

export const fetchDesignerInfo = async (): Promise<DesignerInfo> => {
    return new Promise<DesignerInfo>((resolve) => {
        resolve({
            designers: [...mockDesigners],
        });
    });
};
