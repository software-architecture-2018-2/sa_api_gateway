export const coursesTypeDef = `
type User {
    id: String!
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


type Group {
    soid: String!
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
}`
;

export const coursesQueries = `
    allGroups: [Group]!
    groupByCode(code: String!): Group!
    allProjects: [Project]!
    projectByCode(Proyecto_Id: Int!): Project!
`;

export const coursesMutations = `
    createGroup(group: GroupInput!): Group!
    deleteGroup(code: String!): Int
    updateGroup(code: String!, group: GroupInput!): Group!
    createProject(project: ProjectInput!): Project!
    deleteProject(Proyecto_Id: Int!): Int
    updateProject(Proyecto_Id: Int!, project: ProjectInput!): Project!
`;
