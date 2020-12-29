import { MarketShareSummarizeForm, MarketShareSummarizeRequest, PieDataSet, QuestionDataSet } from "interfaces/MarketShareSummarize";
import { QuestionResult } from "interfaces/Question";
import { ToaProductInfo } from "interfaces/ToaProduct";

export const initialState = {
    developerInfo: {
        developers: [],
    },
    residentialInfo: {
        residentials: [],
    },
    constructorInfo: {
        constructors: [],
    },
    designerInfo: {
        designers: [],
    },
    toaProductInfo: {
        toaProducts: [],
    },
    questionDataSet: null,
};

export const mapMarketShareSummarizeRequest = (form: MarketShareSummarizeForm): MarketShareSummarizeRequest => {
    return {
        developerId: form.developerId ? Number(form.developerId) : null,
        residentialId: form.residentialId ? Number(form.residentialId) : null,
        contractorId: form.contractorId ? Number(form.contractorId) : null,
        designerId: form.designerId ? Number(form.designerId) : null,
    };
}

export const mapCompareDataSet = (toaProductInfo: ToaProductInfo, questionResults: QuestionResult[]): QuestionDataSet => {
    const dictionary: { [key: string]: any } = {};
    toaProductInfo.toaProducts.forEach(toaProduct => {
        const questionsOfProduct = questionResults.filter(q => q.id!.productId === toaProduct.productId);

        dictionary[toaProduct.productName] = {
            compareResultDataSet: questionsOfProduct.reduce(compareResultDataSetReducer, []),
            finalDecisionResultDataSet: questionsOfProduct.reduce(finalDecisionResultDataSetReducer, []),
        };
    });

    return dictionary;
}

const compareResultDataSetReducer = (acc: PieDataSet[], questionResult: QuestionResult) => {
    return generateDataSet(acc, questionResult, 'compareResult');
}

const finalDecisionResultDataSetReducer = (acc: PieDataSet[], questionResult: QuestionResult) => {
    return generateDataSet(acc, questionResult, 'finalDecisionResult');
}

const generateDataSet = (acc: PieDataSet[], questionResult: any, key: string) => {
    const existDataSet = acc.find(d => d.name === questionResult[key]);
    if(existDataSet) {
        return [
            ...acc.filter(d => d.name !== questionResult[key]),
            {
                name: questionResult[key],
                value: existDataSet.value + 1,
            },
        ]
    } else {
        return [
            ...acc,
            {
                name: questionResult[key],
                value: 1,
            }
        ]
    }
}