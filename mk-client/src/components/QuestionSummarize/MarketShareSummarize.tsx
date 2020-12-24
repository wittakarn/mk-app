import React from "react";
import { connect } from "react-redux";
import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { FormikBag, FormikProps, withFormik } from "formik";
import { PageState } from "stores/types/PageState";
import { ConstructorInfo, DesignerInfo, DeveloperInfo, ResidentialInfo } from "interfaces/ResidentialProject";
import { fetchConstructorInfo, fetchDesignerInfo, fetchDeveloperInfo, fetchResidentialInfo } from "services/residentProjectService";
import { NotificationProps, withNotification } from "components/Dialog/Notification";
import { ContainerWithoutPadding } from "components/Display/Container";
import { AlignRightGrid, GridWithFixHeight } from "components/Display/Grid";
import { MarketShareSummarizeForm, QuestionDataSet } from "interfaces/MarketShareSummarize";
import { initialState, mapCompareDataSet, mapMarketShareSummarizeRequest } from "./mapper";
import { getQuestionResultList } from "services/questionResultService";
import { QuestionResult } from "interfaces/Question";
import { MarketSharePieGraph } from "./MarketSharePieGraph";
import { ToaProductInfo } from "interfaces/ToaProduct";
import { fetchToaProductInfo } from "services/toaProductService";

interface StateProps {
}

interface OwnProps extends StateProps {
}

interface FormValues {
    fields: MarketShareSummarizeForm;
}

interface OwnState {
    developerInfo: DeveloperInfo;
    residentialInfo: ResidentialInfo;
    constructorInfo: ConstructorInfo;
    designerInfo: DesignerInfo;
    toaProductInfo: ToaProductInfo;
    questionDataSet: QuestionDataSet | null;
}

type FormProps = OwnProps & NotificationProps;
type Props = FormProps & FormikProps<FormValues>;
type State = OwnState;

class MarketShareSummarizeComponent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount = async () => {
        const developerInfo = await fetchDeveloperInfo();
        const residentialInfo = await fetchResidentialInfo();
        const constructorInfo = await fetchConstructorInfo();
        const designerInfo = await fetchDesignerInfo();
        const toaProductInfo = await fetchToaProductInfo();
        this.setState({
            developerInfo,
            residentialInfo,
            constructorInfo,
            designerInfo,
            toaProductInfo,
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

    renderPieGraph = () => {
        if(this.state.questionDataSet && this.state.toaProductInfo.toaProducts) {
            return this.state.toaProductInfo.toaProducts.map(t => (
                (
                    <React.Fragment>
                        <GridWithFixHeight height="300px" item sm={6}>
                            <Typography variant="h6">{`Compare product ${t.productName} with competitor`}</Typography>
                            <MarketSharePieGraph pieData={this.state.questionDataSet!![t.productName].compareResultDataSet} />
                        </GridWithFixHeight>
                        <GridWithFixHeight height="300px" item sm={6}>
                            <Typography variant="h6">{`Final decision of ${t.productName}`}</Typography>
                            <MarketSharePieGraph pieData={this.state.questionDataSet!![t.productName].finalDecisionResultDataSet} />
                        </GridWithFixHeight>
                    </React.Fragment>
                )
            ));
        }
        return null;
    }

    handleViewResultClicked = async () => {
        const { values } = this.props;
        const response = await getQuestionResultList(mapMarketShareSummarizeRequest(values.fields));
        console.log(response);

        const questionResults: QuestionResult[] = response.body;

        this.setState({
            questionDataSet: mapCompareDataSet(this.state.toaProductInfo, questionResults),
        });
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <form>
                <ContainerWithoutPadding maxWidth="lg">
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <Grid item sm={6} xs={12}>
                            <FormControl fullWidth={true}>
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
                        <Grid item sm={6} xs={12}>
                            <FormControl fullWidth={true}>
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
                        <Grid item sm={6} xs={12}>
                            <FormControl fullWidth={true}>
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
                        <Grid item sm={6} xs={12}>
                            <FormControl fullWidth={true}>
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
                        <AlignRightGrid item sm={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="button"
                                onClick={this.handleViewResultClicked}>
                                View result
                            </Button>
                        </AlignRightGrid>
                        <Grid item sm={12}>
                            <Divider />
                        </Grid>
                        {this.renderPieGraph()}
                    </Grid>
                </ContainerWithoutPadding>
            </form>
        );
    }
}

const initialValue: MarketShareSummarizeForm = {
    developerId: '',
    residentialId: '',
    contractorId: '',
    designerId: '',
};

const handleSubmit = async (values: FormValues, { props, resetForm }: FormikBag<FormProps, FormValues>) => {
}

const mapPropsToValues = (props: OwnProps) => {
    return {
        fields: initialValue,
    };
};

const mapStateToProps = (state: PageState): StateProps => ({
});

export const MarketShareSummarize = withNotification(connect(mapStateToProps)(withFormik<FormProps, FormValues>({ mapPropsToValues, handleSubmit })(MarketShareSummarizeComponent)), 'แจ้งเตือน');
MarketShareSummarize.displayName = 'MarketShareSummarize';
