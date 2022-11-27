

interface IHttpAdapter {
    start(port:number);

    loadController(controllers:any)
    loadMiddleware(middlewares:any)
}


export default IHttpAdapter