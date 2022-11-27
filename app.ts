import FastifyAdapter from "./core/http-adapter/fastify-adapter";
import Pisces from "./core/http-server/pisces-application";



const fastify = new FastifyAdapter()

const app = Pisces.getInstance(fastify)


app.listen(3000)