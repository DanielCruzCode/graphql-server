
const courses = [
    {
        title: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        technology: 'JavaScript ES6',
    },
    {
        title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        technology: 'React',
    },
    {
        title: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        technology: 'Node.js'
    }, 
    {
        title: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        technology: 'React'
    }
];


const resolvers = {
    Query: {
        getCourses: ( root, { input }, ctx, info ) => {
            if (ctx.isAuthenticateUser) {
                console.log("Not require login this user");
            }
            return courses.filter( (course) => course.technology === input.technology);
        }
    }
};

module.exports = resolvers;