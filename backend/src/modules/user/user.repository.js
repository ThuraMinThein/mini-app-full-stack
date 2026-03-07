
import { prisma } from "../../lib/prisma.js"

export class UserRepository {

    async create(data) {
        return prisma.user.create({
            data
        });
    }

}