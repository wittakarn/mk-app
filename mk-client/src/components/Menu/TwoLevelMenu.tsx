import * as React from 'react';
import { ListItem, ListItemText, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { PureLink } from 'components/Display/Link';
import { SubMenuList } from 'components/Display/List';
import { TwoLevelMenuProps, UrlInformation } from 'interfaces/Menu';

interface OwnProps {
    onLinkClick: () => void;
}

type Props = OwnProps & TwoLevelMenuProps;

const TwoLevelMenuComponent: React.FC<Props> = (props: Props) => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const handleLinkClick = (urlInfo: UrlInformation) => {
        if (urlInfo.openNewTab) {
            window.open(urlInfo.url!, '_blank');
        }
        props.onLinkClick();
    }

    const renderSubMenus = () => {
        return props.subMenuDetails.map(s => s.url ? (
            <PureLink key={s.name} to={s.url}>
                <ListItem button>
                    <ListItemText primary={s.name} onClick={() => handleLinkClick(s)} />
                </ListItem>
            </PureLink>
        ) : null);
    }

    return (
        <React.Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={props.menuName} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <SubMenuList>
                    {renderSubMenus()}
                </SubMenuList>
            </Collapse>
        </React.Fragment>
    )
};

TwoLevelMenuComponent.displayName = 'TwoLevelMenuComponent';
export const TwoLevelMenu = TwoLevelMenuComponent;
