import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allGroups: (_) =>
			getRequest(URL, ''),
		groupByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createGroup: (_, { group }) =>
			generalRequest(`${URL}`, 'POST', group),
		updateGroup: (_, { code, group }) =>
			generalRequest(`${URL}/${code}`, 'PUT', group),
		deleteGroup: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
