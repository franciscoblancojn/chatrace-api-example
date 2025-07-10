import express from "express";
import { chat } from "./chat";

const app = express();

const PORT = 3005;

app.use(express.json());

app.post("/api/send-message", async (req, res) => {
    try {
        const { user_id, customFields, sendTemplate } = req?.body ?? {};

        chat.setUseCola(true);
        const keysCustomFields = Object.keys(customFields);
        for (let i = 0; i < keysCustomFields.length; i++) {
            const key = keysCustomFields[i];
            chat.setCustomField({
                key,
                user_id,
                value: customFields[key],
            });
        }
        chat.setCustomField({
            key: "sendTemplate",
            user_id,
            value: sendTemplate,
        });
        chat.setUseCola(false);

        return res.status(200).json({
            success: true,
            message: "✅ Ok.",
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "❌ Error en la solicitud.",
            error: error.message,
        });
    }
});
app.post("/api/create-user", async (req, res) => {
    try {
        const { id, first_name, last_name, phone, email, gender } =
            req?.body ?? {};

        chat.setUseCola(false);
        const result = await chat.onCreateUserIfNotExist({
            id,
            first_name,
            last_name,
            phone,
            email,
            gender,
        });

        return res.status(200).json({
            success: true,
            message: "✅ Ok.",
            result,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: "❌ Error en la solicitud.",
            error: error.message,
        });
    }
});

app.listen(PORT, () => console.log(`=== Starting your api ===`));
