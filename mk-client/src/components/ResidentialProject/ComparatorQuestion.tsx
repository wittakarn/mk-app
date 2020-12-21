import React from "react";
import { ToaProduct } from "interfaces/ToaProduct";
import { Box, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from "@material-ui/core";
import { QuestionResult } from "interfaces/Question";
import { CompetitorComparison, FinalDecision } from "enums/Question";

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
                    <Typography variant="h6">
                        {props.index}). Product: {props.toaProduct.productName}
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={12}>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend">Compare product with competitor</FormLabel>
                    <RadioGroup
                        row
                        aria-label="comparation"
                        name={`comparation-${props.toaProduct.productId}`}
                        value={props.questionResult.compareResult || null}
                        onChange={handleCompareRadioChanged}>
                        <FormControlLabel
                            value={CompetitorComparison.OUTMATCH}
                            control={<Radio color="primary" required/>}
                            label="Outmatch" />
                        <FormControlLabel
                            value={CompetitorComparison.FALLBEHIDE}
                            control={<Radio color="primary" required/>}
                            label="Fall behind" />
                        <FormControlLabel
                            value={CompetitorComparison.EVEN}
                            control={<Radio color="primary" required/>}
                            label="Even" />
                        <FormControlLabel
                            value={CompetitorComparison.NOSPEC}
                            control={<Radio color="primary" required/>}
                            label="No specification" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend">Final decision</FormLabel>
                    <RadioGroup
                        row
                        aria-label="final decision"
                        name={`finalDecision-${props.toaProduct.productId}`}
                        value={props.questionResult.finalDecisionResult || null}
                        onChange={handleDecisionRadioChanged}>
                        <FormControlLabel
                            value={FinalDecision.USETOA}
                            control={<Radio color="primary" required/>}
                            label="Use TOA" />
                        <FormControlLabel
                            value={FinalDecision.NOTUSETOA}
                            control={<Radio color="primary" required/>}
                            label="Not use TOA" />
                        <FormControlLabel
                            value={FinalDecision.TENTATIVE}
                            control={<Radio color="primary" required/>}
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
