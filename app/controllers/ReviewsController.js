const pool = require('../database/index');

const createReview = (request, response) => {
    const ads_id = request.body.ads_id;
    const body = request.body.body;
    const image = request.body.image || null;
    const user_id = request.body.user_id;
    const deleted = false;
    pool.query(
        'INSERT INTO reviews (body, image, user_id, deleted, ads_id) VALUES ($1, $2, $3, $4, $5)',
        [body, image, user_id, deleted, ads_id],
        (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(201).send(`CREATE REVIEW`)
        })
};

const deleteReview = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM reviews WHERE id = $1', [id], (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(201).send(`DELETE REVIEW`)
        })
};

const getReviews = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('SELECT * FROM reviews WHERE ads_id = $1 AND deleted = false', [id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).json(results.rows)
    })
};

const updateReviews = (request, response) => {
    const id = parseInt(request.params.id);
    const body = request.body.body;
    const image = request.body.image || null;

    pool.query('UPDATE reviews SET body = $2, image = $3  WHERE id = $1 ', [id, body, image], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).json('UPDATE REVIEW')
    })
};

module.exports = {
    createReview,
    deleteReview,
    getReviews,
    updateReviews
};