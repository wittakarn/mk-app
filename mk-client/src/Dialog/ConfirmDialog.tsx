import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

interface OwnProps {
    headerMessage?: string,
    bodyMessage?: string,
    id: string;
    isOpen: boolean;
    handleDialogClose: () => void;
    handleContinueClick?: () => void;
}

type Props = OwnProps;

const ConfirmDialogComponent: React.FC<Props> = (props: Props) => {

    const renderButton = () => {
        return (props.handleContinueClick
            ? <DialogActions>
                <Button onClick={props.handleDialogClose} color="default" size="small">
                    ยกเลิก
                </Button>
                <Button onClick={props.handleContinueClick} color="primary" size="small">
                    ดำเนินการต่อ
                </Button>
            </DialogActions>
            : <DialogActions>
                <Button onClick={props.handleDialogClose} color="default" size="small">
                    ปิด
                </Button>
            </DialogActions>
        );
    }

    return (
        <Dialog
            open={props.isOpen}
            onClose={props.handleDialogClose}
            aria-labelledby={`${props.id}-dialog-title`}
            aria-describedby={`${props.id}-dialog-description`}
        >
            <DialogTitle id={`${props.id}-dialog-title`}>
                {props.headerMessage}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id={`${props.id}-dialog-description`}>
                    {props.bodyMessage}
                </DialogContentText>
            </DialogContent>
            {renderButton()}
        </Dialog>
    );
}

export const ConfirmDialog = React.memo<Props>(ConfirmDialogComponent);
ConfirmDialog.displayName = 'ConfirmDialog';
