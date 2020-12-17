import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const CardWithSpace = styled(Card)`
    margin: 10px 0;
`;
CardWithSpace.displayName = 'CardWithSpace';

export const CardContentWithOutPadding = styled(CardContent)`
    &.MuiCardContent-root {
        padding: 0;
    }
`;
CardContentWithOutPadding.displayName = 'CardContentWithOutPadding';
