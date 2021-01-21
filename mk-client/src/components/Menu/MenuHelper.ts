import { TwoLevelMenuProps } from 'interfaces/Menu';

export const userMenu: TwoLevelMenuProps = {
    menuName: 'ผู้ใช้งานระบบ',
    subMenuDetails: [
        {
            name: 'จัดการผู้ใช้งาน',
            url: `${mk.contextRoot}/spa/user/create`,
        },
    ],
};

export const customerMenu: TwoLevelMenuProps = {
    menuName: 'TOA โปรเจค',
    subMenuDetails: [
        {
            name: 'จัดการโปรเจค',
            url: `${mk.contextRoot}/spa/project/create`,
        },
        {
            name: 'ดูส่วนครองตลาด',
            url: `${mk.contextRoot}/spa/project/market-share`,
        },
    ],
};
