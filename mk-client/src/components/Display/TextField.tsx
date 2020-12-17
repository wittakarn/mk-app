import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const TextFieldWithMargin = styled(TextField)`
    &.MuiFormControl-fullWidth{
        margin: 10px;
        width: auto;
    }
`;
TextFieldWithMargin.displayName = 'TextFieldWithMargin';
