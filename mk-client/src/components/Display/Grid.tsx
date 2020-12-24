import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const AlignRightGrid = styled(Grid)`
    text-align: right;
`;
AlignRightGrid.displayName = 'AlignRightGrid';

export const GridWithMarginAuto = styled(Grid)`
    &.MuiGrid-item{
        margin: auto;
    }
`;
GridWithMarginAuto.displayName = 'GridWithMarginAuto';

export const GridWithMarginMiddle = styled(Grid)`
    &.MuiGrid-item{
        margin: auto 0;
    }
`;
GridWithMarginMiddle.displayName = 'GridWithMarginAuto';

export const GridWithFixHeight = styled(Grid)<{ height: string }>`
    height: ${p => p.height};
`;
GridWithFixHeight.displayName = 'GridWithFixHeight';
