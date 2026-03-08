export const logging = (req, res, next) => {
    const start = Date.now();

    res.on("finish", () => {
        const latency = Date.now() - start;

        const log = {
            method: req.method,
            endpoint: req.originalUrl,
            status: res.statusCode,
            latency: `${latency}ms`,
            ip: req.ip,
            userAgent: req.get("user-agent"),
            timestamp: new Date().toISOString()
        };

        console.log("INFO: ", JSON.stringify(log));
    });

    next();
};