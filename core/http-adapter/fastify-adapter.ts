import IHttpAdapter from './interface'
const fastify = require('fastify')


class FastifyAdapter implements IHttpAdapter {
    constructor() {
    }
    loadController(controllers: any) {
        throw new Error('Method not implemented.')
    }
    loadMiddleware(middlewares: any) {
        throw new Error('Method not implemented.')
    }
    
    async start(port) {
        try {
         fastify.listen({ port: port })
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    }



    



}


export default FastifyAdapter