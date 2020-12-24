export interface QuestionResultInfo {
    questionResults: QuestionResultInfo[]
}

export interface QuestionResult {
    id? : {
        projectId: number;
        productId: number;
    }
    compareResult: string;
    finalDecisionResult: string;
}
