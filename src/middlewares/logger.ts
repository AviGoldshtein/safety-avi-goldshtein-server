export function logger(req, _res, next) {
    const time = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
    const body = req.body;

    console.log(`\n[${time}] ${method} ${url}`);

    if (body && Object.keys(body).length > 0) {
        console.log("Body:", body);
    }

    next();
}
