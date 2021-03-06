import { Response, Request } from 'express';
import { IUser, UserCredentials } from '../interfaces';
import * as userService from '../services/userService'; 

export async function getAll(req: Request, res: Response) {
  const users = await userService.getAll();

  res.status(200).json(users);
}

export async function getById(req: Request, res:Response) {
  const { id } = req.params;
  const { status, data, error } = await userService.getById(Number(id));

  return error
   ? res.status(status).json({ error })
   : res.status(status).json(data);
}

export async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { data, status, error } = await userService.create(user);
  
  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function update(req: Request, res: Response) {
  const user = req.body as IUser;
  const { id } = req.params;
  const { status, data, error } = await userService.update(Number(id), user);
  
  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  const { status, data, error } = await userService.remove(Number(id));
  
  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}

export async function login(req: Request, res: Response) {
  const userCredencials = req.body as UserCredentials;
  const { status, data, error } = await userService.login(userCredencials);
  
  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
}