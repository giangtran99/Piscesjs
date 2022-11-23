import IHttpServer from './interface'
const fastify = require('fastify')({ logger: true })


class FastifyServer implements IHttpServer {
    constructor(port) {
        this.startServer(port)
    }
    
    async startServer(port) {
        try {
         fastify.listen({ port: port })
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    }
    get() {
        fastify.get('/', async (request, reply) => {

            return { hello: 'world' }
        })
    }
    post() {
        throw new Error('Method not implemented.');
    }
    put() {
        throw new Error('Method not implemented.');
    }
    delete() {
        throw new Error('Method not implemented.');
    }


}