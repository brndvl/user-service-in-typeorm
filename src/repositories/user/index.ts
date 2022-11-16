import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";

interface UserRepo {
    save: (user: User) => Promise<User>;
    findByEmail: (email: string) => Promise<User[]>
}

class UserRepository implements UserRepo {
    private ormRepo: Repository<User>

    constructor() {
        this.ormRepo = getRepository(User)
    }

    save = async (user: User) => await this.ormRepo.save(user);
    findByEmail = async (email: string) => await this.ormRepo.find({ where: {email}})

}

export default UserRepository