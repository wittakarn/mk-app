export interface MarketShareSummarizeForm {
    developerId: string | number;
    residentialId: string | number;
    contractorId: string | number;
    designerId: string | number;
}

export interface MarketShareSummarizeRequest {
    developerId: number | null;
    residentialId: number | null;
    contractorId: number | null;
    designerId: number | null;
}

export interface PieDataSet {
    name: string;
    value: number;
}

export interface QuestionDataSet {
    [key: string]: TopicDataSet;
}

export interface TopicDataSet {
    compareResultDataSet: PieDataSet[];
    finalDecisionResultDataSet: PieDataSet[];
}
