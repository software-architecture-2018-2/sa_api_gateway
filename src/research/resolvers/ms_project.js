import { getRequest, generalRequest} from "../../utilities";

const ms = 'PROJECT'
const baseurl = process.env.GENERAL_URL;
const port = process.env[`${ms}_PORT`];
const url = `http://${baseurl}:${port}/projects`;
const url2 = `http://${baseurl}:3001`;

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
          let current_usr = await generalRequestHead(`${url2}/api/users/me`,'GET',token);
          project.Lider_de_proyecto = current_usr._id;
          return  generalRequest(`${url}`, 'POST', project);
        },
        updateProject (_, { Proyecto_Id, project })
        {
          let id = await generalRequestHead(`${url2}/api/users/me`, 'GET', token);
          let cur_proj = await generalRequest(`${url}/${Proyecto_Id}`, 'GET');
          let members = cur_proj.Miembros
          if(members.include(id._id)){
           return generalRequest(`${url}/${Proyecto_Id}`, 'PUT', project);
          }
        },    
        deleteProject (_, { Proyecto_Id }) {
           let proj = await generalRequest(`${url}/${Proyecto_Id}`, 'GET');
           let id = await generalRequestHead(`${url2}/api/users/me`, 'GET', token);
           if(id._id == proj.Lider_de_proyecto){
           return generalRequest(`${url}/${Proyecto_Id}`, 'DELETE');
           }
        }
    }
  }
  


export default resolvers;