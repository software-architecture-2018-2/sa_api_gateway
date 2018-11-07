import { getRequest, generalRequest, generalRequestHead } from "../../utilities";

const ms = 'USER'
const baseurl = process.env.GENERAL_URL;
const port = process.env[`${ms}_PORT`];
const url = `http://${baseurl}:${port}`;

const resolvers = {
  Query: {
    allUsers(_) {
      return getRequest(`${url}/api/users`, '');
    },
    userByCode(_, { id }) {
      return generalRequest(`${url}/${id}`, 'GET');
    },
    me(_, { token }) { 
      return generalRequestHead(`${url}/api/users/me`, 'GET', token);
    }
  },

  Mutation: {
    createUser(_, { user }) {
      return generalRequest(`${url}/api/users`, 'POST', user);
    },
    login (_, {data}){
      return generalRequest(`${url}/api/auth`,'POST', data);
    }
  }
}

export default resolvers;
