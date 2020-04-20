import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import sql from '../database';

export const getUsers = async (req: Request, res: Response):Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
}

export const getUserSql = async (req:Request, res:Response):Promise<Response> => {
    const data = await sql.query(`select * from user`);
    return res.json(data.recordset);
}

export const createUser = async (req:Request, res:Response):Promise<Response> =>{
    const newUser = await getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
}

export const getOneUser = async (req:Request, res:Response):Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    return res.json(user)
}

export const updateUser = async (req:Request, res:Response):Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if(user){
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.json(results);
    }
    return res.json({message:"User not found"});
}

export const deleteUser = async (req:Request, res:Response):Promise<Response> => {
    const user = await getRepository(User).delete(req.params.id);
    return res.json(user);
}