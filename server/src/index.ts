import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/orders', async (req: Request, res: Response) => {
    try {
        const { name, phone, address, total, items } = req.body;
        const order = await prisma.order.create({
            data: {
                name,
                phone,
                address,
                total: Number(total),
                items: items,
            },
        });
        res.json({ success: true, orderId: order.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Помилка' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
