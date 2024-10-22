const swaggerJsdoc = require('swagger-jsdoc');

const opciones = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'LumiAPI',
            version: '1.0.0',
            description: 'API de ecommerce modificada para Lumi',
        },
        servers: [
            {
                url: 'https://lumistore-production.up.railway.app',
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
                Usuario: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        nombreUsuario: {
                            type: 'string',
                            example: 'JuanPerez',
                        },
                        correo: {
                            type: 'string',
                            example: 'juan@ejemplo.com',
                        },
                        direccion: {
                            type: 'string',
                            example: 'Calle Falsa 123',
                        },
                        avatar: {
                            type: 'string',
                            example: 'https://ejemplo.com/avatar.jpg',
                        },
                        rol: {
                            type: 'string',
                            example: 'administrador',
                        },
                    },
                },
                Producto: {
                    type: 'object',
                    properties: {
                        nombre: {
                            type: 'string',
                            example: 'Camiseta',
                        },
                        precio: {
                            type: 'number',
                            example: 35.50,
                        },
                        descripcion: {
                            type: 'string',
                            example: 'Camiseta de algodón de alta calidad',
                        },
                        stock: {
                            type: 'number',
                            example: 200,
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
                name: 'Productos', 
                description: 'API para gestión avanzada de productos en Lumi',
            },
        ],
    },
    apis: ['./src/rutas/*.js', './src/controlador/*.js'],
};

const swaggerDocumentacionModificada = swaggerJsdoc(opciones);

module.exports = swaggerDocumentacionModificada;
