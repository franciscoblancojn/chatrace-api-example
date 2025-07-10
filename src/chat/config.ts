require("dotenv").config();
import { IChatRace } from "chatrace";

export const CUSTOM_FIELDS: IChatRace["PROPS"]["CUSTOM_FIELDS"] = [
    {
        id: "1",
        name: "custom_field_1",
        type: "1",
    },
    {
        id: "2",
        name: "custom_field_2",
        type: "1",
    },
];

export const TOKEN: IChatRace["PROPS"]["TOKEN"] = `${process.env.TOKEN}`;

export const URL: IChatRace["PROPS"]["URL"] = `${process.env.URL}`;

export const PROPS: IChatRace["PROPS"] = {
    CUSTOM_FIELDS,
    TOKEN,
    URL,
};

console.log({PROPS});
