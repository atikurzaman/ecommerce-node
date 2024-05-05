import { Express } from 'express';
import { RegisterRoute } from './register.route';
import { LoginRoute } from './login.route';

export class Routes {
    private server: Express;
    private registerRoute: RegisterRoute;
    private loginRoute: LoginRoute;
    private baseUrl: string = '/api/v1/';

    constructor(server: Express) {
        this.server = server;        
        this.registerRoute = new RegisterRoute(server);
        this.loginRoute = new LoginRoute(server);
        this.configureApiEndPoints(this.baseUrl);
    }

    public configureApiEndPoints(baseUrl: string) {
      this.registerRoute.configureEndPoints(baseUrl);
      //this.loginRoute.configureEndPoints(baseUrl);
    }
}