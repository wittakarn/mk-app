import { ToaProduct, ToaProductInfo } from "interfaces/ToaProduct";

const mockToaProducts: ToaProduct[] = [
    {
        productId: 1,
        productName: 'Decorative Coatings',
    },
    {
        productId: 2,
        productName: 'Wood Coatings',
    },
    {
        productId: 3,
        productName: 'Construction Chemicals',
    },
    {
        productId: 4,
        productName: 'Heavy Duty Coatings',
    },
    {
        productId: 5,
        productName: 'Special Paint',
    },
];

export const fetchToaProductInfo = async (): Promise<ToaProductInfo> => {
    return new Promise<ToaProductInfo>((resolve) => {
        resolve({
            toaProducts: [...mockToaProducts],
        });
    });
};
