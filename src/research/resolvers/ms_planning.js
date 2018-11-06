import { getRequest, generalRequest, generalRequestHead } from "../../utilities";

const ms = 'PLANNING'
const baseurl = process.env.GENERAL_URL;
const port = process.env[`${ms}_PORT`];
const url = `http://${baseurl}:${port}/plan`;

const resolvers = {
    Query: {
      allPlans(_) {
        return getRequest(url, '');
      },
      planByCode(_, { id }) {
        return generalRequest(`${url}/${id}`, 'GET');
      }
    },
  
    Mutation: {
        createPlan (_, { plan }) {
          return  generalRequest(`${url}`, 'POST', plan);
        },
        updatePlan (_, { id, plan })
        {
           return generalRequest(`${url}/${id}`, 'PUT', plan);
        },    
        deletePlan (_, { id }) {
           return generalRequest(`${url}/${id}`, 'DELETE');
        }
    }
  }
  


export default resolvers;