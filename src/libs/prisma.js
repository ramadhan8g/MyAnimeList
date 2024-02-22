import { PrismaClient } from '@prisma/client';

// let prisma = new PrismaClient();
// prisma.collection.create (bsa tapi kurang bagus)

let prisma;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;

// prisma single