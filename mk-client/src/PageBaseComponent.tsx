import React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { User } from 'stores/types/User';
import { Home } from './components/Home/Home';
import { EditResidentialProject } from './components/ResidentialProject/EditResidentialProject';
import { MarketShareSummarize } from 'components/QuestionSummarize/MarketShareSummarize';
import { EditUserAccount } from 'components/UserAccount/EditUserAccount';
import { ResetPassword } from 'components/UserAccount/ResetPassword';
import { userStateAction } from 'stores/user/action';
import { connect } from 'react-redux';
import { PageState } from 'stores/types/PageState';
import { getUser } from 'services/userService';

interface StateProps {
    user: User | null;
}

interface DispatchProps {
    setUser: (user: User) => void;
}

interface OwnProps {
}

type Props = OwnProps & StateProps & DispatchProps & RouteComponentProps;

class PageBaseComponent extends React.PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount = async () => {
        if (this.props.user) {
            if(this.props.user.status === 'inactive') {
                this.redirectToResetPasswordPage();
            }
        } else {
            const response = await getUser();
            const user = response.body;
            this.props.setUser(user);

            if(user.status === 'inactive') {
                this.redirectToResetPasswordPage();
            }
        }
    }

    redirectToResetPasswordPage = () => {
        this.props.history.push(`${mk.contextRoot}/spa/user/reset-password`);
    }

    render() {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={`${mk.contextRoot}/spa/user/reset-password`} exact={true} component={ResetPassword} />
                    <Route path={`${mk.contextRoot}/spa/user/create`} exact={true} component={EditUserAccount} />
                    <Route path={`${mk.contextRoot}/spa/project/create`} exact={true} component={EditResidentialProject} />
                    <Route path={`${mk.contextRoot}/spa/project/market-share`} exact={true} component={MarketShareSummarize} />
                    <Route path={mk.contextRoot} exact={true} component={Home} />
                </Switch>
            </React.Suspense>
        );
    }
}

const mapStateToProps = (state: PageState): StateProps => ({
    user: state.user && state.user.loggedInUser,
});

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
    setUser: (user: User) => dispatch(userStateAction.setUser(user)),
});

export const BasePage = withRouter(connect(mapStateToProps, mapDispatchToProps)(PageBaseComponent));