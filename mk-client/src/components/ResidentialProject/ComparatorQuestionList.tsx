import React from "react";
import { ToaProduct, ToaProductInfo } from "interfaces/ToaProduct";
import { ComparatorQuestion } from "./ComparatorQuestion";
import { QuestionDictionary } from "interfaces/ResidentialProject";

interface Props {
    toaProductInfo: ToaProductInfo;
    questionDictionary: QuestionDictionary;
    handleCompareRadioSelected: (toaProduct: ToaProduct, value: string) => void,
    handleDecisionRadioSelected: (toaProduct: ToaProduct, value: string) => void,
}

const ComparatorQuestionListComponent: React.FC<Props> = (props: Props) => {
    const comparatorQuestions = props.toaProductInfo.toaProducts.map((t, index) => (
        <ComparatorQuestion
            key={index}
            index={index + 1}
            toaProduct={t}
            questionResult={props.questionDictionary[t.productId]}
            handleCompareRadioSelected={props.handleCompareRadioSelected}
            handleDecisionRadioSelected={props.handleDecisionRadioSelected}
        />
    ));
    return (
        <React.Fragment>
            {comparatorQuestions}
        </React.Fragment>
    );
}

export const ComparatorQuestionList = React.memo<Props>(ComparatorQuestionListComponent);
ComparatorQuestionList.displayName = 'ComparatorQuestionList';
