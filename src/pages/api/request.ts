import { NextApiRequest, NextApiResponse } from "next";

const sendRequest = async (message: string) => {
    const { BOT_TOKEN, BOT_CHAT_ID } = process.env;
    const response = await fetch(
        `https://api.telegram.org/bot${`5759961173:AAH_CRbpu_FYfStNHWMAqeGbD0VmIn24YLo`}/sendmessage?chat_id=${`-704118707`}&text=${message}`
    );
    const data = await response.json();

    if (data.ok) {
        return Promise.resolve();
    }

    return Promise.reject('rejectedd');
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
