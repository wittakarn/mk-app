import styled from 'styled-components';
import { Divider } from '@material-ui/core';

export const DividerWithSpace = styled(Divider)`
    &.MuiDivider-root{
        margin: 10px 0;
    }    
`;
DividerWithSpace.displayName = 'DividerWithSpace';