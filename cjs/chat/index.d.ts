import { ChatRace } from "chatrace";
declare class MyChatRace extends ChatRace {
    useCola: boolean;
    onRequest(data: {
        url: string;
    } & RequestInit): Promise<any>;
    setUseCola(v: boolean): void;
}
export declare const chat: MyChatRace;
export {};
