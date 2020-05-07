const pool = require('../database/index');

const createUser = (request, response) => {
    const name = request.body.name;
    const user_email = request.body.email;
    const user_password = request.body.password;
    pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, user_email, user_password],  (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(201).send('CREATE USER')
    })
};


const updateUserName = (request, response) => {
    const id = request.params.id;
    const name = request.body.name;
    pool.query('UPDATE users SET name = $2 WHERE id = $1', [id, name], (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(200).send(`UPDATE USER NAME`)
        }
    )
};

const updateUserEmail = (request, response) => {
    const id = request.params.id;
    const email = request.body.email;
    pool.query('UPDATE users SET email = $2 WHERE id = $1', [id, email], (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(200).send(`UPDATE USER EMAIL`)
        }
    )
};

const updateUserPassword = (request, response) => {
    const id = request.params.id;
    const password = request.body.password;
    pool.query('UPDATE users SET password = $2 WHERE id = $1', [id, password], (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(200).send(`UPDATE USER PASSWORD`)
        }
    )
};

const deleteUser = (request, response) => {
    const id = request.params.id;
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).send(`DELETE USER`)
    })
};

module.exports = {
    createUser,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    deleteUser
};