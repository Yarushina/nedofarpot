const pool = require('../database/index');

const createAds = (request, response) => {
    const head = request.body.head;
    const body = request.body.body;
    const image = request.body.image || null;
    const section_id = request.body.section_id;
    const user_id = request.body.user_id;
    const check_like = false;
    const deleted = false;
    pool.query(
        'INSERT INTO ads (head, body, image, section_id, user_id, check_like, deleted) VALUES ($4, $1, $2, $3, $5, $6, $7)',
        [body, image, section_id, head, user_id, check_like, deleted],
        (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(201).send(`CREATE ADS`)
        })
};

const deleteAds = (request, response) => {
    const id = parseInt(request.params.id);
    const deleted = true;
    pool.query('UPDATE ads SET deleted = $1 WHERE id = $2',
        [deleted, id], (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(200).send(`DELETE ADS`);
        }
    )

};

const getUserAds = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM ads WHERE user_id = $1', [id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).json(results.rows)
    })
};

const getAllAds = (request, response) => {
    pool.query('SELECT * FROM ads WHERE deleted = false', (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).json(results.rows)
    })
};

const getAds = (request, response) => {
    const section_id = parseInt(request.params.id);
    pool.query('SELECT * FROM ads WHERE section_id = $1 AND deleted = false', [section_id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).json(results.rows)
    })
};

const updateAds = (request, response) => {
    const ads_id = parseInt(request.params.ads_id);
    const user_id = parseInt(request.params.user_id);
    const head = request.body.head ;
    const body = request.body.body ;
    const image = request.body.image || null;
    pool.query('UPDATE ads SET head = $1, body = $2, image = $3 WHERE id = $4 AND user_id = $5',
        [head, body, image, ads_id, user_id], (error, results) => {
            if (error) {
                response.status(422).json({error: error})
            }
            response.status(200).send(`UPDATE ADS `)
        }
    )
};

module.exports = {
    deleteAds,
    createAds,
    getUserAds,
    getAds,
    updateAds,
    getAllAds
};