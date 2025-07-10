"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const chat_1 = require("./chat");
const app = (0, express_1.default)();
const PORT = 3005;
app.use(express_1.default.json());
app.post("/api/send-message", async (req, res) => {
    try {
        const { user_id, customFields, sendTemplate } = req?.body ?? {};
        chat_1.chat.setUseCola(true);
        const keysCustomFields = Object.keys(customFields);
        for (let i = 0; i < keysCustomFields.length; i++) {
            const key = keysCustomFields[i];
            chat_1.chat.setCustomField({
                key,
                user_id,
                value: customFields[key],
            });
        }
        chat_1.chat.setCustomField({
            key: "sendTemplate",
            user_id,
            value: sendTemplate,
        });
        chat_1.chat.setUseCola(false);
        return res.status(200).json({
            success: true,
            message: "✅ Ok.",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "❌ Error en la solicitud.",
            error: error.message,
        });
    }
});
app.post("/api/create-user", async (req, res) => {
    try {
        const { id, first_name, last_name, phone, email, gender } = req?.body ?? {};
        chat_1.chat.setUseCola(false);
        const result = await chat_1.chat.onCreateUserIfNotExist({
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
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "❌ Error en la solicitud.",
            error: error.message,
        });
    }
});
app.listen(PORT, () => console.log(`=== Starting your api ===`));
//# sourceMappingURL=index.js.map