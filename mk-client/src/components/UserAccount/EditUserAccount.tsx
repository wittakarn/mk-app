import React from "react";
import { connect } from "react-redux";
import { Button, Chip, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { FormikBag, FormikProps, withFormik } from "formik";
import { PageState } from "stores/types/PageState";
import { NotificationProps, withNotification } from "components/Dialog/Notification";
import { ContainerWithoutPadding } from "components/Display/Container";
import { AlignRightGrid } from "components/Display/Grid";
import { ChipInDropdown } from "components/Display/Chip";
import { UserRole } from "interfaces/UserRole";
import { UserAccountEditForm } from "interfaces/UserAccount";
import { mapUserAccountRequest } from "./mapper";
import { create, fetchUserRoles } from "services/userService";

interface StateProps {
}

interface OwnProps extends StateProps {
}

interface FormValues {
    fields: UserAccountEditForm;
}

interface OwnState {
    roleOptions: UserRole[];
}

type FormProps = OwnProps & NotificationProps;
type Props = FormProps & FormikProps<FormValues>;
type State = OwnState;

class EditUserAccountComponent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            roleOptions: [],
        };
    }

    componentDidMount = async () => {
        const response = await fetchUserRoles();
        this.setState({
            roleOptions: [
                ...response.body,
            ],
        });
    }

    renderRoleOptions = () => {
        return this.state.roleOptions.map(r => (
            <MenuItem key={r.roleId} value={r.role}>
                {r.role}
            </MenuItem>
        ));
    }

    renderAdditionRoleChips = (selected: any): React.ReactNode => (
        <div>
            {
                (selected as string[]).map(
                    (value) => (
                        <ChipInDropdown key={value} label={value} />
                    ),
                )
            }
        </div>
    )

    render() {
        const { values, handleChange } = this.props;

        return (
            <form onSubmit={this.props.handleSubmit}>
                <ContainerWithoutPadding maxWidth="lg">
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid item sm={6} xs={12}>
                            <TextField
                                name="fields.name"
                                label="ชื่อ"
                                variant="outlined"
                                fullWidth={true}
                                onChange={handleChange}
                                value={values.fields.name}
                                autoFocus={true}
                                size="small"
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                name="fields.surname"
                                label="นามสกุล"
                                variant="outlined"
                                fullWidth={true}
                                onChange={handleChange}
                                value={values.fields.surname}
                                size="small"
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                name="fields.username"
                                label="ชื่อผู้ใช้งานระบบ (ภาษาอังกฤษ)"
                                variant="outlined"
                                fullWidth={true}
                                onChange={handleChange}
                                value={values.fields.username}
                                size="small"
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                name="fields.userPassword"
                                label="รหัสผ่าน"
                                variant="outlined"
                                fullWidth={true}
                                onChange={handleChange}
                                value={values.fields.userPassword}
                                size="small"
                                required
                            />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <FormControl required fullWidth={true}>
                                <InputLabel id="role-label">สิทธิ์การใช้การ</InputLabel>
                                <Select
                                    labelId="role-label"
                                    id="role"
                                    name="fields.role"
                                    value={values.fields.role}
                                    onChange={handleChange}
                                >
                                    {this.renderRoleOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <FormControl fullWidth={true}>
                                <InputLabel id="addition-role-chip-label">สิทธิ์การใช้การเพิ่มเติม</InputLabel>
                                <Select
                                    labelId="addition-role-chip-label"
                                    id="addition-role-mutiple-chip"
                                    name="fields.additionRoles"
                                    multiple
                                    value={values.fields.additionRoles}
                                    onChange={handleChange}
                                    input={<Input id="select-multiple-chip" />}
                                    renderValue={this.renderAdditionRoleChips}
                                >
                                    {this.renderRoleOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                        <AlignRightGrid item sm={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit">
                                Submit
                            </Button>
                        </AlignRightGrid>
                    </Grid>
                </ContainerWithoutPadding>
            </form>
        );
    }
}

const initialValue: UserAccountEditForm = {
    name: '',
    surname: '',
    username: '',
    userPassword: '',
    role: '',
    additionRoles: [],
};

const handleSubmit = async (values: FormValues, { props, resetForm }: FormikBag<FormProps, FormValues>) => {
    const request = mapUserAccountRequest(values.fields);
    const response = await create(request);

    console.log(response);

    props.handleNotificationOpen();
    props.setBodyMessage('บันทึกข้อมูลเรียบร้อยแล้ว');

    resetForm({ values: { fields: initialValue } });
}

const mapPropsToValues = (props: OwnProps) => {
    return {
        fields: initialValue,
    };
};

const mapStateToProps = (state: PageState): StateProps => ({
});

export const EditUserAccount = withNotification(connect(mapStateToProps)(withFormik<FormProps, FormValues>({ mapPropsToValues, handleSubmit })(EditUserAccountComponent)), 'แจ้งเตือน');;
EditUserAccount.displayName = 'EditUserAccount';
