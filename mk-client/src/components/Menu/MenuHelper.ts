import { TwoLevelMenuProps } from 'interfaces/Menu';

export const customerMenu: TwoLevelMenuProps = {
    menuName: 'Project',
    subMenuDetails: [
        {
            name: 'Manage Project',
            url: `${mk.root}/spa/project/create`,
        },
    ],
};
