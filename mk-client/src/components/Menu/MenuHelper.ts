import { TwoLevelMenuProps } from 'interfaces/Menu';

export const customerMenu: TwoLevelMenuProps = {
    menuName: 'ข้อมูลลูกค้า',
    subMenuDetails: [
        {
            name: 'จัดการลูกค้า',
            url: `${mk.root}/spa/customer/create`,
        },
    ],
};
