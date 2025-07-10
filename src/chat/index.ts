import { ChatRace } from "chatrace";
import { PROPS } from "./config";
import { cola } from "../cola";

class MyChatRace extends ChatRace {
    useCola: boolean = false;
    async onRequest(data: { url: string } & RequestInit) {
        if (this.useCola) {
            cola.schedule(async () => {
                this.onRequest(data);
            });
            return undefined;
        } else {
            return await super.onRequest(data);
        }
    }
    setUseCola(v: boolean) {
        this.useCola = v;
    }
}

export const chat = new MyChatRace(PROPS);
