export const logErrors = (err: Error, req: any, res: any, next: any) => {
    // tslint:disable-next-line:no-console
    console.error(err.stack);
    next(err);
};

export const clientErrorHandler = (err: Error, req: any, res: any, next: any) => {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
};

export const errorHandler = (err: Error, req: any, res: any, next: any) => {
    res.status(500);
    res.render('error', { error: err });
};
