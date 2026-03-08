import { prisma } from "../../lib/prisma.js"

export class LanguageRepository {
    async create(data) {
        return prisma.language.create({
            data
        })
    }

    async totalCount() {
        return prisma.language.count()
    }

    async findAll() {
        return prisma.language.findMany({
            orderBy: {
                key: "asc"
            }
        })
    }
}