import { generalRequest, getRequest, generalRequestHead, generalRequestDelete, mergeDeep } from '../utilities';
import { url, g_port,u_port,pr_port,pl_port, g_entryPoint, pr_entryPoint, pl_entryPoint, reg_entryPoint, auth_entryPoint, me_entryPoint } from './server';

//const URL = `http://${url}:${port}/${entryPoint}`;

import userResolver from './resolvers/ms_user'
import groupResolver from './resolvers/ms_group'
import projectResolver from './resolvers/ms_project'
import planResolver from './resolvers/ms_plan'


const resolvers = {
    Mutation: {
        createUser(_, { user }) {
          return generalRequest(`${url}/api/users`, 'POST', user);
        },
        login (_, {data}){
          return generalRequest(`${url}/auth`,'POST', data);
        }
      }
};

mergeDeep(resolvers, userResolver);
mergeDeep(resolvers, groupResolver);
mergeDeep(resolvers, projectResolver);
mergeDeep(resolvers, planResolver);

export default resolvers;
