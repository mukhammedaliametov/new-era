import { NextApiRequest, NextApiResponse } from "next";

const sendRequest = async (message: string) => {
    const { BOT_TOKEN, BOT_CHAT_ID } = process.env;
    const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendmessage?chat_id=${BOT_CHAT_ID}&text=${message}`
    );

    if (response.status === 200) {
        return Promise.resolve();
    }

    return Promise.reject();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const message = `Новая заявка от ${req.body.name}.%0AНомер телефона: ${req.body.phone}.`;
        const response = await sendRequest(message);

        res.json(response);
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
};
