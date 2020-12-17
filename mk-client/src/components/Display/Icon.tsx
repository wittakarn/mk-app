import styled from "styled-components";
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import SaveIcon from '@material-ui/icons/Save';

export const MiniHourglassEmptyRoundedIcon = styled(HourglassEmptyRoundedIcon)`
&.MuiSvgIcon-root{
    margin: auto;
    width: 60px !important;
}
`
MiniHourglassEmptyRoundedIcon.displayName = 'MiniHourglassEmptyRoundedIcon';

export const SaveOverlayIcon = styled(SaveIcon)`
    cursor: pointer;
`
SaveOverlayIcon.displayName = 'SaveOverlayIcon';