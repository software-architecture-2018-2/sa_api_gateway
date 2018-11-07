import { generalRequest, getRequest, generalRequestHead, generalRequestDelete, mergeDeep } from '../utilities';
import { url, g_port,u_port,pr_port,pl_port, g_entryPoint, pr_entryPoint, pl_entryPoint, reg_entryPoint, auth_entryPoint, me_entryPoint } from './server';

//const URL = `http://${url}:${port}/${entryPoint}`;

import userResolver from './resolvers/ms_user'

const URL_g = `http://${url}:${g_port}/${g_entryPoint}`;
const URL_pr = `http://${url}:${pr_port}/${pr_entryPoint}`;
const URL_pl = `http://${url}:${pl_port}/${pl_entryPoint}`;
const URL_u_r = `http://${url}:${u_port}/${reg_entryPoint}`;
const URL_u_auth = `http://${url}:${u_port}/${auth_entryPoint}`;
const URL_u_me = `http://${url}:${u_port}/${me_entryPoint}`;


const resolvers = {
	Query: {
		allGroups: (_) =>
			getRequest(URL_g, ''),
		groupByCode: (_, { code }) =>
			generalRequest(`${URL_g}/${code}`, 'GET'),
		allProjects: (_) =>
			getRequest(URL_pr, ''),
		projectByCode: (_, { Proyecto_Id }) =>
			generalRequest(`${URL_pr}/${Proyecto_Id}`, 'GET'),
		allUsers: (_) =>
			getRequest(URL_u_r, ''),
		userByCode: (_, {code, token}) =>
			generalRequestHead(`${URL_u_r}/${code}`, 'GET',token),
		me: (_,{token}) =>
			generalRequestHead(`${URL_u_me}`,'GET',token),


	},
	Mutation: {
		createGroup: async (_, { group, token }) =>
		{
			let current_usr = await generalRequestHead(`${URL_u_me}`,'GET',token)
			group.leader = current_usr._id
			return generalRequest(`${URL_g}`, 'POST', group)
		},
		updateGroup: (_, { code, group }) =>
			generalRequest(`${URL_g}/${code}`, 'PUT', group),
		deleteGroup: async(_, { code, id }) =>
		{
			let return_e = await generalRequest(`${URL_g}/${code}`, 'GET')
			return generalRequestDelete(`${URL_g}/${code}`, 'DELETE', id, return_e)
		},
		createProject: (_, { project }) =>
			generalRequest(`${URL_pr}`, 'POST', project),
		updateProject: (_, { Proyecto_Id, project }) =>
			generalRequest(`${URL_pr}/${Proyecto_Id}`, 'PUT', project),
		deleteProject: (_, { Proyecto_Id }) =>
			generalRequest(`${URL_pr}/${Proyecto_Id}`, 'DELETE'),
		// createUser: (_, {user}) =>
		// 	generalRequest(`${URL_u_r}`, 'POST', user),
		login: (_, {data}) =>
      generalRequest(`${URL_u_auth}`,'POST', data),
	}
};

mergeDeep(resolvers, userResolver);

export default resolvers;
