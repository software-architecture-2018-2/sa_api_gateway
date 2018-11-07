import { getRequest, generalRequest, generalRequestHead } from "../../utilities";

const ms = 'GROUP'
const baseurl = process.env.GENERAL_URL;
const port = process.env[`${ms}_PORT`];
const url = `http://${baseurl}:${port}/groups`;

const resolvers = {
    Query: {
      allGroups(_) {
        return getRequest(url, '');
      },
      groupByCode(_, { code }) {
        return generalRequest(`${url}/${code}`, 'GET');
      }
    },
  
    Mutation: {
        async createGroup (_, { group, token }) 
		{
			let current_usr = await generalRequestHead(`${url}/me`,'GET',token);
			group.leader = current_usr._id;
			return generalRequest(`${url}`, 'POST', group);
		},
        updateGroup (_, { code, group }) 
        {
            generalRequest(`${url}/${code}`, 'PUT', group);
        },
		async deleteGroup(_, { code, id })
		{
			let return_e = await generalRequest(`${url}/${code}`, 'GET');
			return generalRequestDelete(`${url}/${code}`, 'DELETE', id, return_e);
		}
    }
  }
  


export default resolvers;