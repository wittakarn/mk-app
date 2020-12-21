import React from "react";
import { ToaProduct } from "interfaces/ToaProduct";
import { Box, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@material-ui/core";
import { QuestionResult } from "interfaces/Question";

interface Props {
    index: number;
    toaProduct: ToaProduct;
    questionResult: QuestionResult;
    handleCompareRadioSelected: (toaProduct: ToaProduct, value: string) => void,
    handleDecisionRadioSelected: (toaProduct: ToaProduct, value: string) => void,
}

const ComparatorQuestionComponent: React.FC<Props> = (props: Props) => {

    const handleCompareRadioChanged = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        props.handleCompareRadioSelected(props.toaProduct, value);
    }

    const handleDecisionRadioChanged = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        props.handleDecisionRadioSelected(props.toaProduct, value);
    }

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            <Grid item sm={12}>
                <Box component="div" paddingTop={6}>
                    <Typography variant="h6">{props.index}). Product: {props.toaProduct.productName}</Typography>
                </Box>
            </Grid>
            <Grid item sm={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Compare product with competitor</FormLabel>
                    <RadioGroup
                        row
                        aria-label="comparation"
                        name="comparation"
                        defaultValue="end"
                        value={props.questionResult && props.questionResult.compareResult}
                        onChange={handleCompareRadioChanged}>
                        <FormControlLabel
                            value="outmatch"
                            control={<Radio color="primary" />}
                            label="Outmatch" />
                        <FormControlLabel
                            value="fall-behind"
                            control={<Radio color="primary" />}
                            label="Fall behind" />
                        <FormControlLabel
                            value="even"
                            control={<Radio color="primary" />}
                            label="Even" />
                        <FormControlLabel
                            value="no-spec"
                            control={<Radio color="primary" />}
                            label="No specification" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Final decision</FormLabel>
                    <RadioGroup
                        row
                        aria-label="final decision"
                        name="finalDecision"
                        defaultValue="end"
                        value={props.questionResult && props.questionResult.finalDecisionResult}
                        onChange={handleDecisionRadioChanged}>
                        <FormControlLabel
                            value="use-toa"
                            control={<Radio color="primary" />}
                            label="Use TOA" />
                        <FormControlLabel
                            value="not-use-toa"
                            control={<Radio color="primary" />}
                            label="Not use TOA" />
                        <FormControlLabel
                            value="tentative"
                            control={<Radio color="primary" />}
                            label="Tentative" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <Divider />
            </Grid>
        </Grid>
    );
}

export const ComparatorQuestion = React.memo<Props>(ComparatorQuestionComponent);
ComparatorQuestion.displayName = 'ComparatorQuestion';
