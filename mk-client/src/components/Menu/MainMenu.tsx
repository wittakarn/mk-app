import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CssBaseline, AppBar, Typography, Drawer, Divider, List, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TwoLevelMenu } from './TwoLevelMenu';
import { customerMenu } from './MenuHelper';
import { PageState } from 'stores/types/PageState';
import { mainStateAction } from 'stores/main/action';
import { PureLink } from 'components/Display/Link';

const MenuAppBar = styled(AppBar) <any>`
    &.MuiAppBar-root{
        transition: ${props => props.open
        ? 'width 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        : 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'};
        width: ${props => props.open ? '70%' : '100%'};

        @media (min-width: 600px){
            width: ${props => props.open ? '85%' : '100%'};
        }
    }
`;
MenuAppBar.displayName = 'MenuAppBar';

const MenuDrawer = styled(Drawer) <any>`
    & .MuiDrawer-paperAnchorLeft{
        text-align: right;

        width: 30%;
        @media (min-width: 600px){
            width: 15%;
        }
    }
`;
MenuDrawer.displayName = 'MenuDrawer';

const MenuBackIconWrapper = styled.div`
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

    height: 48px;
    @media (min-width: 600px){
        height: 64px;
    }
`;
MenuBackIconWrapper.displayName = 'MenuBackIconWrapper';

const MenuBackIcon = styled(IconButton)`
    &.MuiIconButton-root{
        color: #fff;

        padding: 12px;
        @media (min-width: 600px){
            padding: 20px;
        }
    }
`;
MenuBackIcon.displayName = 'MenuBackIcon';

const MenuIconButton = styled(IconButton) <any>`
    &.MuiButtonBase-root{
        display: ${props => props.open ? 'none' : ''};
    }
`;
MenuIconButton.displayName = 'MenuIconButton';

const SignInInfoIcon = styled(Typography) <any>`
    &.MuiTypography-root{
        flex: 1;
    }
`;
SignInInfoIcon.displayName = 'SignInInfoIcon';

const AccountIcon = styled(AccountCircleIcon) <any>`
    &.MuiSvgIcon-root{
        margin: 0 5px;
        vertical-align: middle;
    }
`;
AccountIcon.displayName = 'AccountIcon';

const HomeLink = styled(PureLink) <any>`
    color: white;
`;
HomeLink.displayName = 'HomeLink';

interface StateProps {
}

interface DispatchProps {
    clearPageStore: () => void,
}

type Props = MainMenuProps & StateProps & DispatchProps;

const MainMenuComponent: React.FC<Props> = (props: Props) => {

    const menuIcon = (
        <MenuIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            open={props.isMenuOpen}
            onClick={props.handleDrawerOpen}
        >
            <MenuIcon />
        </MenuIconButton>
    );

    const menuItems = (
        <React.Fragment>
            <MenuBackIconWrapper>
                <MenuBackIcon onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </MenuBackIcon>
            </MenuBackIconWrapper>
            <Divider />
            <List>
                <TwoLevelMenu {...customerMenu} onLinkClick={props.clearPageStore} />
            </List>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <CssBaseline />
            <MenuAppBar
                position="fixed"
                open={props.isMenuOpen}
            >
                <Toolbar>
                    {menuIcon}
                    <Typography variant="h6" noWrap>
                        <HomeLink key="Home" to={mk.contextRoot}>
                            TOA market share application
                        </HomeLink>
                    </Typography>
                </Toolbar>
            </MenuAppBar>
            <MenuDrawer
                variant="persistent"
                anchor="left"
                open={props.isMenuOpen}
            >
                {menuItems}
            </MenuDrawer>
        </React.Fragment>
    );
};

const mapStateToProps = (state: PageState): StateProps => ({
});

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
    clearPageStore: () => dispatch(mainStateAction.clearPageStore),
});

MainMenuComponent.displayName = 'MainMenuComponent';
const MainMenu = connect(mapStateToProps, mapDispatchToProps)(MainMenuComponent);

export { MainMenu };
