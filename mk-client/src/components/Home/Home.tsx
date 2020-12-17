import { Container } from '@material-ui/core';
import * as React from 'react';

interface OwnProps {
}

type Props = OwnProps;

class HomeComponent extends React.PureComponent<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <h2>Welcome back</h2>
            </Container>
        );
    }
}


export const Home = HomeComponent;
