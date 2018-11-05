export const researchTypeDef = `
type User {
    _id: String!
    name: String!
    lastname: String!
    password: String!
    email: String!
    study_ar: [String]
    organization: String
    nationality: String
    gender: String
    languages: [String]
    skills: [String]
}

type User_p {
    _id: String!
    name: String!
    lastname: String!
    email: String!
    study_ar: [String]
    organization: String
    nationality: String
    gender: String
    languages: [String]
    skills: [String]
}

type Group {
    soid: String!
    name: String!
    topic: [String!]!
    website: String
    field: [String]!
    logo: String
    university: [String]!
    status: String
    skill: [String]!
    members: [String]!
    director: String!
    leader: String!
    description: String
    project: [String]!
}

type Planning{
    id: Int!
    month_s: Int!
    day_s: Int!
    month_e: Int!
    day_e: Int!
    member: User!
    resources: Float
    publish: String
    Description: String
}

input UserInput {
    name: String!
    lastname: String!
    password: String!
    email: String!
    study_ar: [String]
    organization: String
    nationality: String
    gender: String
    languages: [String]
    skills: [String]
}


input GroupInput {
    name: String!
    topic: [String!]!
    website: String
    field: [String]!
    logo: String
    university: [String]!
    status: String
    skill: [String]!
    members: [String]!
    director: String!
    leader: String!
    description: String
    project: [String]!
}

type Project {
    Proyecto_Id: Int!
    Planeacion_Id: [Int]!
    Status: String!
    Miembros: [String]!
    Lider_de_proyecto:  String!
    Titulo: String!
    Areas_de_estudio: [String]!
    Descripcion: String!
}

input ProjectInput {
    Planeacion_Id: [Int]!
    Status: String!
    Miembros: [String]!
    Lider_de_proyecto:  String!
    Titulo: String!
    Areas_de_estudio: [String]!
    Descripcion: String!
}


input PlanningInput {
    month_s: Int!
    day_s: Int!
    month_e: Int!
    day_e: Int!
    member: String!
    resources: Float
    publish: String
    Description: String
}

input loginInput {
    email: String!
    password: String!
}

`
;

export const researchQueries = `
    allGroups: [Group]!
    groupByCode(code: String!): Group!
    allProjects: [Project]!
    projectByCode(Proyecto_Id: Int!): Project!
    userByCode(code: String!, token: String!): User_p!
    allUsers: [User_p]!
    me(token: String!): User_p!
`;

export const researchMutations = `
    createGroup(group: GroupInput!, token: String!): Group!
    deleteGroup(code: String! , id: String!): Int
    updateGroup(code: String!, group: GroupInput!): Group!
    createProject(project: ProjectInput!): Project!
    deleteProject(Proyecto_Id: Int!): Int
    updateProject(Proyecto_Id: Int!, project: ProjectInput!): Project!
    createUser(user: UserInput!): User!
    login(data: loginInput!): String!
`;
