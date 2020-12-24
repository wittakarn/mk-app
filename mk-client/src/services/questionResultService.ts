import { MarketShareSummarizeRequest } from "interfaces/MarketShareSummarize";

import * as superagent from 'superagent';

export async function getQuestionResultList(payload: MarketShareSummarizeRequest): Promise<superagent.Response> {
    const agent = superagent.get(`${mk.contextRoot}/api/project/questions`);
    return await agent.type('application/json').query(payload);
};
