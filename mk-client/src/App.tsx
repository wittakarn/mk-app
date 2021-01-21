import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Store } from 'redux';
import { getStore } from './stores/getStore';
import { PageState } from './stores/types/PageState';
import { Home } from './components/Home/Home';
import { EditResidentialProject } from './components/ResidentialProject/EditResidentialProject';
import { MainMenu } from 'components/Menu/MainMenu';
import { MarketShareSummarize } from 'components/QuestionSummarize/MarketShareSummarize';
import { EditUserAccount } from 'components/UserAccount/EditUserAccount';

const MenuContainer = styled(Container)`
    padding-bottom: 64px;
`;
MenuContainer.displayName = 'MenuContainer';

const BodyContainer = styled(Container) <any>`
    padding-top: 2%;
    &.MuiContainer-root{        
        transition: ${props => props.open
        ? 'padding-left 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        : 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'};
        padding-left: ${props => props.open ? 'calc(30%)' : '0'};
        @media (min-width: 600px){
            padding-left: ${props => props.open ? 'calc(15%)' : '0'};
        }
    }
`;
BodyContainer.displayName = 'BodyContainer';

const PageComponent = withRouter(props => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${mk.contextRoot}/spa/user/create`} exact={true} component={EditUserAccount} />
                <Route path={`${mk.contextRoot}/spa/project/create`} exact={true} component={EditResidentialProject} />
                <Route path={`${mk.contextRoot}/spa/project/market-share`} exact={true} component={MarketShareSummarize} />
                <Route path={mk.contextRoot} exact={true} component={Home} />
            </Switch>
        </React.Suspense>
    );
})

interface OwnProps {

}

interface State {
    isMenuOpen: boolean;
}

type Props = OwnProps;

class App extends React.PureComponent<Props, State> {
    static displayName = 'App';
    private store: Store<PageState>;

    constructor(props: Props) {
        super(props);
        this.store = getStore();
        this.state = {
            isMenuOpen: true,
        };
    }

    setOpen = (isMenuOpen: boolean) => {
        this.setState({
            isMenuOpen
        });
    }

    handleDrawerOpen = () => {
        this.setOpen(true);
    };

    handleDrawerClose = () => {
        this.setOpen(false);
    };

    render() {

        const menuProps: MainMenuProps = {
            handleDrawerOpen: this.handleDrawerOpen,
            handleDrawerClose: this.handleDrawerClose,
            isMenuOpen: this.state.isMenuOpen,
        }

        return (
            <Container>
                <Provider store={this.store}>
                    <BrowserRouter>
                        <Switch>
                            <Route>
                                <MenuContainer>
                                    <MainMenu {...menuProps} />
                                </MenuContainer>
                                <BodyContainer open={this.state.isMenuOpen}>
                                    <PageComponent />
                                </BodyContainer>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </Container>
        );
    }
}

export default App;
