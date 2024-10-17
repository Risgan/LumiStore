const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UniqueStyleAPI',
            version: '1.0.0',
            description: 'Ecommerce API para Unique Style',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        username: {
                            type: 'string',
                            example: 'JohnDoe',
                        },
                        email: {
                            type: 'string',
                            example: 'john@example.com',
                        },
                        password: {
                            type: 'string',
                            example: 'password123',
                        },
                        avatar: {
                            type: 'string',
                            example: 'https://example.com/avatar.jpg',
                        },
                        role: {
                            type: 'string',
                            example: 'user',
                        },
                    },
                },
                Product: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            example: 'T-shirt',
                        },
                        price: {
                            type: 'number',
                            example: 29.99,
                        },
                        stock: {
                            type: 'number',
                            example: 100,
                        },
                    },
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        tags: [
            {
                name: 'Products', // Añadir el tag 'Products' para agrupar las rutas relacionadas con productos
                description: 'API para gestionar productos en UniqueStyle',
            },
        ],
    },
    apis: ['./src/routes/*.js', './src/controller/*.js'], // Asegúrate de que Swagger escanee todos los archivos relevantes
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;
