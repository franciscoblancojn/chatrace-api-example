require("dotenv").config();
import { IChatRace } from "chatrace";

export const CUSTOM_FIELDS: IChatRace["PROPS"]["CUSTOM_FIELDS"] = [
    {
        id: "610369",
        name: "productos",
        type: "0",
    },
    {
        id: "857975",
        name: "sendTemplate",
        type: "0",
    },
];

export const TOKEN: IChatRace["PROPS"]["TOKEN"] = `${process.env.TOKEN}`;

export const URL: IChatRace["PROPS"]["URL"] = `${process.env.URL}`;

export const PROPS: IChatRace["PROPS"] = {
    CUSTOM_FIELDS,
    TOKEN,
    URL,
};

