
import IHttpAdapter from "../http-adapter/interface";

class PiscesApplication {
    private static instance
    public httpAdapter:IHttpAdapter

    constructor(httpAdapter:IHttpAdapter){
        this.httpAdapter = httpAdapter
        
    }

    public static getInstance(httpAdapter:IHttpAdapter) : PiscesApplication{
        if(!PiscesApplication.instance){
            PiscesApplication.instance = new PiscesApplication(httpAdapter)
        }
        return PiscesApplication.instance
    }

    init(configuration){
        // this.httpAdapter.loadController()
        // this.httpAdapter.loadMiddleware()
    }

    listen(port:number){
        this.httpAdapter.start(port)
    }

}



export default PiscesApplication