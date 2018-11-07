import { generalRequest, getRequest, generalRequestHead, generalRequestDelete } from '../utilities';
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

Object.assign(resolvers, userResolver);
Object.assign(resolvers, groupResolver);
Object.assign(resolvers, projectResolver);
Object.assign(resolvers, planResolver);

export default resolvers;
