import { Container } from '@material-ui/core';
import * as React from 'react';

interface OwnProps {
}

type Props = OwnProps;

class ResetPasswordComponent extends React.PureComponent<Props, {}> {

    render() {
        return (
            <Container>
                <h2>Reset password</h2>
            </Container>
        );
    }
}


export const ResetPassword = ResetPasswordComponent;
