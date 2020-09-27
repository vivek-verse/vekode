import { Request, Response, NextFunction } from 'express';
import { get, controller } from './decorators';

@controller('')
export class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response, next: NextFunction): void {
    res.send('Login controller called');
  }
}
