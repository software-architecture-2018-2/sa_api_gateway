import { getRequest, generalRequest, generalRequestHead } from "../../utilities";

const ms = 'USER'
const baseurl = process.env.GENERAL_URL;

const port = process.env[`${ms}_PORT`];

const url = `http://${baseurl}:${port}`;

const resolvers = {
  Query: {
    getAll(_) {
      return getRequest(url, '');
    },
    findById(_, { id }) {
      return generalRequest(`${url}/${id}`, 'GET');
    },
    me(_, { token }) { 
      return generalRequestHead(`${url}/me`, 'GET', token);
    }
  },

  Mutation: {
    createUser(_, { user }) {
      return generalRequest(`${url}/api/users/me`, 'POST', user);
    }
  }
}

export default resolvers;
