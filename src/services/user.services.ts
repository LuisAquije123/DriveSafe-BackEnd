import  {encrypt, verify} from "../utils/bcrypt.handle"
import UserModel from "../models/user.model"
import { User } from "../interfaces/user.interface"

const getAll = async() => {
    const response = await UserModel.findAll();
    return response;
}

const getById = async(id: string) => {
    const userExists = await UserModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND";
    return userExists;
}

const update = async(user: User, id: string) => {
    if (user.Type !== 'admin' && user.Type !== 'tenant' && user.Type !== 'owner') return "TYPE_MUST_BE_TENANT_OR_OWNER"
    const userExists = await UserModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND"
    if (user.Type !== userExists.get('Type')) return "ROLE_CANT_CHANGE";
    user.Password = await encrypt(user.Password);
    const response = await userExists.update(user);
    return response;
}

const _delete = async(id: string) => {
    const userExists = await UserModel.findByPk(id);
    if (!userExists) return "USER_NOT_FOUND";
    const response = await userExists.destroy();
    return response;
}

export {update, _delete, getAll, getById};