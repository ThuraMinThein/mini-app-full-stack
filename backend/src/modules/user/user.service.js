import { UserRepository } from "./user.repository.js";

export class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        return this.userRepository.create(data);
    }
}