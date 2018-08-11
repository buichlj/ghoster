import { Request, Response } from 'express';

/**
 * GET something
 * Something data
 */
export let getSomething = (req: Request, res: Response) => {
    return res.status(200).send(
        {
            some: "thing"
        }
    );
};