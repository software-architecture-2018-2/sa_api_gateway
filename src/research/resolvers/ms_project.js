import { getRequest, generalRequest} from "../../utilities";

const ms = 'PROJECT'
const baseurl = process.env.GENERAL_URL;
const port = process.env[`${ms}_PORT`];
const url = `http://${baseurl}:${port}/projects`;

const resolvers = {
    Query: {
      allProjects(_) {
        return getRequest(url, '');
      },
      projectByCode(_, { Proyecto_Id }) {
        return generalRequest(`${url}/${Proyecto_Id}`, 'GET');
      }
    },
  
    Mutation: {
        createProject (_, { project }) {
          return  generalRequest(`${url}`, 'POST', project);
        },
        updateProject (_, { Proyecto_Id, project })
        {
           return generalRequest(`${url}/${Proyecto_Id}`, 'PUT', project);
        },    
        deleteProject (_, { Proyecto_Id }) {
           return generalRequest(`${url}/${Proyecto_Id}`, 'DELETE');
        }
    }
  }
  


export default resolvers;