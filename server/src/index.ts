// server/src/index.ts
import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// 1. Отримати всі продукти
app.get('/products', async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// 2. Додати продукт (для тестування)
app.post('/products', async (req: Request, res: Response) => {
    try {
        const { name, price, category, description, imageUrl } = req.body;
        const newProduct = await prisma.product.create({
            data: {
                name,
                price: Number(price),
                category,
                description,
                imageUrl,
            },
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not create product' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
