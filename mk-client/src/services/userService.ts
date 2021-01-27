import { UserAccountRequest } from 'interfaces/UserAccount';
import * as superagent from 'superagent';

export async function fetchUserRoles(): Promise<superagent.Response> {
    const agent = superagent.get(`${mk.contextRoot}/api/user/roles`);
    return await agent.type('application/json');
};

export async function getUser(): Promise<superagent.Response> {
    const agent = superagent.get(`${mk.contextRoot}/api/user/information`);
    return await agent.type('application/json');
};

export async function create(request: UserAccountRequest): Promise<superagent.Response> {
    const agent = superagent.post(`${mk.contextRoot}/api/user/create`);

    return await agent
        .accept('application/json; charset=UTF-8')
        .send(request);
};