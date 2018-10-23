import { generalRequest, getRequest, generalRequest_w_head } from '../utilities';
import { url, g_port,u_port,pr_port,pl_port, g_entryPoint, pr_entryPoint, pl_entryPoint, reg_entryPoint, auth_entryPoint } from './server';

//const URL = `http://${url}:${port}/${entryPoint}`;

const URL_g = `http://${url}:${g_port}/${g_entryPoint}`;
const URL_pr = `http://${url}:${pr_port}/${pr_entryPoint}`;
const URL_pl = `http://${url}:${pl_port}/${pl_entryPoint}`;
const URL_u_r = `http://${url}:${u_port}/${reg_entryPoint}`;
const URL_u_auth = `http://${url}:${u_port}/${auth_entryPoint}`;


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
		userByCode: (_, {code}, {token}) =>
			generalRequest_w_head(`${URL_u_r}/${code}`, 'GET',_,_,token),
	},
	Mutation: {
		createGroup: (_, { group }) =>
			generalRequest(`${URL_g}`, 'POST', group),
		updateGroup: (_, { code, group }) =>
			generalRequest(`${URL_g}/${code}`, 'PUT', group),
		deleteGroup: (_, { code }) =>
			generalRequest(`${URL_g}/${code}`, 'DELETE'),
		createProject: (_, { project }) =>
			generalRequest(`${URL_pr}`, 'POST', project),
		updateProject: (_, { Proyecto_Id, project }) =>
			generalRequest(`${URL_pr}/${Proyecto_Id}`, 'PUT', project),
		deleteProject: (_, { Proyecto_Id }) =>
			generalRequest(`${URL_pr}/${Proyecto_Id}`, 'DELETE'),
		createUser: (_, {user}) =>
			generalRequest(`${URL_u_r}`, 'POST', user),
	}
};

export default resolvers;
