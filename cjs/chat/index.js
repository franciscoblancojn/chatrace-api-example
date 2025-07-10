"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const chatrace_1 = require("chatrace");
const config_1 = require("./config");
const cola_1 = require("../cola");
class MyChatRace extends chatrace_1.ChatRace {
    useCola = false;
    async onRequest(data) {
        if (this.useCola) {
            cola_1.cola.schedule(async () => {
                this.onRequest(data);
            });
            return undefined;
        }
        else {
            return await super.onRequest(data);
        }
    }
    setUseCola(v) {
        this.useCola = v;
    }
}
exports.chat = new MyChatRace(config_1.PROPS);
//# sourceMappingURL=index.js.map