import { prisma } from "../../lib/prisma.js"


export class ProductRepository {

    async create(data) {
        return prisma.product.create({
            data
        });
    }

    async findAll(search, page, limit) {
        const where = search ? {
            name: {
                contains: search,
                mode: "insensitive"
            }
        } : {};
        const products = await prisma.product.findMany({
            where,
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: "desc"
            }
        });
        const totalItems = await prisma.product.count({ where });
        const metaData = {
            page,
            limit,
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            hasNextPage: page * limit < totalItems
        }
        return { products, metaData };
    }

    async update(id, data) {
        return prisma.product.update({
            where: { id },
            data
        });
    }
}