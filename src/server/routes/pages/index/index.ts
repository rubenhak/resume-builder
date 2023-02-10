import * as express from 'express';

const URL_PATH = '/';

export default function(router: express.Router)
{
    router.get(URL_PATH, async function(req, res) {

        res.send('<html>abcd</html>');
        
    });
}