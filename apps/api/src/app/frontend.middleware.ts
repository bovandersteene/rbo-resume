import { environment } from '../environments/environment';
import { join } from 'path';
import { Request, Response } from 'express';

const allowedExt = ['.js', '.ico', '.css', '.png', '.jpg', '.woff2', '.woff', '.ttf', '.svg'];

const resolvePath = (file: string) => join(__dirname, environment.fe_path, file);

export function AngularMiddleware(req: Request, res: Response, next: Function) {
  const { url } = req;
  if (req.method !== 'GET' || url.indexOf('api') === 1) {
    // it starts with /api --> continue with execution
    next();
  } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
    // it has a file extension --> resolve the file
    res.sendFile(resolvePath(url));
  } else {
    // in all other cases, redirect to the index.html!
    res.sendFile(resolvePath('index.html'));
  }
}
