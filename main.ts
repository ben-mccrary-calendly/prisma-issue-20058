import {User, PrismaClient} from '@prisma/client'


const typescriptIsMad = async (id: number, user: Partial<User>) => {
    const client = new PrismaClient()
    await client.user.update({
        where: { id: id },
        // typescript has a problem with the line below because of Partial<User> and a nullable JSON field
        data: user
    })
}