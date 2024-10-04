import  {encrypt, verify} from "../utils/bcrypt.handle"
import UserModel from "../models/user.model"
import { generateToken } from "../utils/jwt.handle"
import { User } from "../interfaces/user.interface"
import { Auth } from "../interfaces/auth.interface"

const register = async (user: User) => {
    const userExists = await UserModel.findOne({where: {Gmail: user.Gmail}});
    if (userExists) return "USER_EXISTS";
    if (user.Type !== 'tenant' && user.Type !== 'owner'){
        return "TYPE_MUST_BE_TENANT_OR_OWNER";
    }
    const passwordHash = await encrypt(user.Password);
    const createdUser = await UserModel.create({
        Name: user.Name,
        LastName: user.LastName,
        Birthdate: user.Birthdate,
        Cellphone: user.Cellphone,
        Gmail: user.Gmail,
        Password: passwordHash,
        Type: user.Type,
        IsActive: 1
    });
    return createdUser;
}

const login = async (auth: Auth) => {
    const userExists = await UserModel.findOne({where: {Gmail: auth.Gmail}});
    if (!userExists) return "INVALID_DATA";
    const passwordHash = userExists.get('Password');
    const isCorrect = await verify(auth.Password, passwordHash as string);
    if (!isCorrect) return "PASSWORD_INCORRECT"
    const userId = userExists.get('Id')
    console.log("User: " + userId);
    const token = generateToken(userId as number, userExists.get('Type') as string)
    return token;
}

export  {register, login};