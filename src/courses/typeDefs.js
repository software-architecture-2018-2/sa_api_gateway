export const coursesTypeDef = `
type Group {
    id: String!
    topic: [String!]!
    website: String
    field: [String]!
    logo: String
    university: String!
    status: String
    skill: [String]!
    members: [User]!
    director: User!
    leader: User!
    description: String
    project: [Project]!
}

type Project {
    id: Int!
    planning: [Planning]!
    status: string
    members: [User]!
    leader: User!
    title: String
    fields: [Int]!
    description: String
}

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
input GroupInput {
    topic: [String!]!
    website: String
    field: [String]!
    logo: String
    university: String!
    status: String
    skill: [String]!
    members: [User]!
    director: User!
    leader: User!
    description: String
    project: [Project]!
}

input ProjectInput {
    planning: [Planning]!
    status: string
    members: [User]!
    leader: User!
    title: String
    fields: [Int]!
    description: String
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

input PlanningInput {
    month_s: Int!
    day_s: Int!
    month_e: Int!
    day_e: Int!
    member: User!
    resources: Float
    publish: String
    Description: String
}`
;

export const coursesQueries = `
    allCourses: [Course]!
    courseByCode(code: Int!): Course!
`;

export const coursesMutations = `
    createGroup(group: GroupInput!): Group!
    deleteGroup(code: String!): Int
    updateGroup(code: String!, course: GroupInput!): Group!
`;
