const pool = require('../database/index');

const createLike= (request, response) => {
    const ads_id = parseInt(request.params.ads_id);
    const user_id = parseInt(request.params.user_id);
    const check_like = true;
    pool.query('INSERT INTO likes (ads_id, user_id, check_like) VALUES ($1, $2, $3)', [ads_id, user_id, check_like],  (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).send('CREATE LIKE')
    })
};

const deleteLike = (request, response) => {
    const ads_id = parseInt(request.params.ads_id);
    const user_id = parseInt(request.params.user_id);
    pool.query('DELETE FROM likes WHERE ads_id = $1 AND user_id = $2', [ads_id, user_id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).send(`DELETE LIKE`)
    })
};

const getUserLike = (request, response) => {
    const user_id = parseInt(request.params.id);
    pool.query('SELECT * FROM likes WHERE user_id = $1', [user_id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).send(results.rows)
    })
};

module.exports = {
    createLike,
    deleteLike,
    getUserLike
};