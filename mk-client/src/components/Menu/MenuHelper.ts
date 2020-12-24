import { TwoLevelMenuProps } from 'interfaces/Menu';

export const customerMenu: TwoLevelMenuProps = {
    menuName: 'Project',
    subMenuDetails: [
        {
            name: 'Manage Project',
            url: `${mk.contextRoot}/spa/project/create`,
        },
        {
            name: 'View market share result',
            url: `${mk.contextRoot}/spa/project/market-share`,
        },
    ],
};
