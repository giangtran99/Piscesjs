import IHttpServer from './interface'
const fastify = require('fastify')


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
        
    }
    post() {

    }
    put() {

    }
    delete() {

    }


}


export default FastifyServer