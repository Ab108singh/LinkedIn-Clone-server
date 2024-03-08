const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
  info: {
    version: '1.0.0',            // by default: '1.0.0'
    title: 'LinkedIn-Clone API',              // by default: 'REST API'
    description: ''         // by default: ''
  },
  servers: [
    {
      url: 'http://localhost:8000',              // by default: 'http://localhost:3000'
      description: 'An HTTP Server for a linkedin-clone'       // by default: ''
    },
    // { ... }
  ],
  tags: [                   // by default: empty Array
    {
      name: '',             // Tag name
      description: ''       // Tag description
    },
    // { ... }
  ],
  components: {}            // by default: empty object
};

const outputFile = './swagger-docs.json';
const routes = ['./routes/user.routes.js', './routes/post.routes.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);