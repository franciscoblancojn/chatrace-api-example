import Bottleneck from "bottleneck";

export const cola = new Bottleneck({
    reservoir: 100, // initial number of jobs
    reservoirRefreshAmount: 100,
    reservoirRefreshInterval: 60 * 1000, // refresh every minute
    maxConcurrent: 1,
});
