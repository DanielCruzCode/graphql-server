const { gql } = require("apollo-server");

const typeDefs = gql`

    type Course {
        title: String   
    }

    type Tecnology {
        technology: String
    }

    input CourseInput {
        technology: String
    }

    type Query {
        getCourses(input: CourseInput!) : [Course]
        getTechnology : [Tecnology]
    }
`;

module.exports = typeDefs;