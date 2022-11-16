import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const prisma = new PrismaClient();

const router = new Router();

router.post("/clientes/post", async(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    const {nome, cpf, telefone, email, cidade, uf} = req.body;

    const cliente = await prisma.clientes.create({
        data: {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            cidade: cidade,
            uf: uf,
        }
    })
    
    return res.json(cliente);
})
