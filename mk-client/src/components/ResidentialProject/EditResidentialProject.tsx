import React from "react";
import { connect } from "react-redux";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { FormikBag, FormikProps, withFormik } from "formik";
import { PageState } from "stores/types/PageState";
import { ConstructorInfo, DesignerInfo, DeveloperInfo, ResidentialInfo, ResidentialProjectEditForm } from "interfaces/ResidentialProject";
import { fetchConstructorInfo, fetchDesignerInfo, fetchDeveloperInfo, fetchResidentialInfo } from "services/residentProjectService";
import { NotificationProps, withNotification } from "components/Dialog/Notification";
import { ContainerWithoutPadding } from "components/Display/Container";
import { initialState } from "./mapper";

interface StateProps {
}

interface OwnProps extends StateProps {
}

interface FormValues {
    fields: ResidentialProjectEditForm;
}

interface OwnState {
    developerInfo: DeveloperInfo;
    residentialInfo: ResidentialInfo;
    constructorInfo: ConstructorInfo;
    designerInfo: DesignerInfo;
}

type FormProps = OwnProps & NotificationProps;
type Props = FormProps & FormikProps<FormValues>;
type State = OwnState;

class EditResidentialProjectComponent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount = async () => {
        const developerInfo = await fetchDeveloperInfo();
        const residentialInfo = await fetchResidentialInfo();
        const constructorInfo = await fetchConstructorInfo();
        const designerInfo = await fetchDesignerInfo();
        this.setState({
            developerInfo,
            residentialInfo,
            constructorInfo,
            designerInfo,
        });
    }

    renderDeveloperOptions = () => {
        return this.state.developerInfo.developers.map(d => (
            <MenuItem key={d.developerId} value={d.developerId}>
                {d.developerName}
            </MenuItem>
        ));
    }

    renderResidentialOptions = () => {
        return this.state.residentialInfo.residentials.map(r => (
            <MenuItem key={r.residentialId} value={r.residentialId}>
                {r.category}
            </MenuItem>
        ));
    }

    renderConstructorOptions = () => {
        return this.state.constructorInfo.constructors.map(c => (
            <MenuItem key={c.constructorId} value={c.constructorId}>
                {c.constructorName}
            </MenuItem>
        ));
    }

    renderDesignerOptions = () => {
        return this.state.designerInfo.designers.map(d => (
            <MenuItem key={d.designerId} value={d.designerId}>
                {d.designerName}
            </MenuItem>
        ));
    }

    render() {
        const { values, handleChange, setFieldValue } = this.props;

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
                        <Grid item sm={12}>
                            <TextField
                                name="fields.projectName"
                                label="Project"
                                variant="outlined"
                                fullWidth={true}
                                onChange={handleChange}
                                value={values.fields.projectName}
                                autoFocus={true}
                                size="small"
                                required
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <FormControl required fullWidth={true}>
                                <InputLabel id="residential-label">Residential</InputLabel>
                                <Select
                                    labelId="residential-label"
                                    name="fields.residentialId"
                                    value={values.fields.residentialId}
                                    onChange={handleChange}
                                >
                                    {this.renderResidentialOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={6}>
                            <FormControl required fullWidth={true}>
                                <InputLabel id="contractor-label">Contractor</InputLabel>
                                <Select
                                    labelId="contractor-label"
                                    name="fields.contractorId"
                                    value={values.fields.contractorId}
                                    onChange={handleChange}
                                >
                                    {this.renderConstructorOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={6}>
                            <FormControl required fullWidth={true}>
                                <InputLabel id="developer-label">Developer</InputLabel>
                                <Select
                                    labelId="developer-label"
                                    name="fields.developerId"
                                    value={values.fields.developerId}
                                    onChange={handleChange}
                                >
                                    {this.renderDeveloperOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={6}>
                            <FormControl required fullWidth={true}>
                                <InputLabel id="designer-label">Designer</InputLabel>
                                <Select
                                    labelId="designer-label"
                                    name="fields.designerId"
                                    value={values.fields.designerId}
                                    onChange={handleChange}
                                >
                                    {this.renderDesignerOptions()}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </ContainerWithoutPadding>
            </form>
        );
    }
}

const initialValue: ResidentialProjectEditForm = {
    projectName: '',
    developerId: '',
    residentialId: '',
    contractorId: '',
    designerId: '',
};

const handleSubmit = async (values: FormValues, { props, resetForm }: FormikBag<FormProps, FormValues>) => {
    console.log(values);
}

const mapPropsToValues = (props: OwnProps) => {
    return {
        fields: initialValue,
    };
};

const mapStateToProps = (state: PageState): StateProps => ({
});

export const EditResidentialProject = withNotification(connect(mapStateToProps)(withFormik<FormProps, FormValues>({ mapPropsToValues, handleSubmit })(EditResidentialProjectComponent)), 'แจ้งเตือน');;