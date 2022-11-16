import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.clientes.create({
        data: {
            nome: '',
            cpf: '',
            telefone: '',
            email: '',
            cidade: '',
            uf: '',
        }
    });

    console.log(result);
}

main();