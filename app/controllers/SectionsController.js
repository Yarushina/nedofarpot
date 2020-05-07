const pool = require('../database/index');

const getSections = (request, response) => {
    pool.query('SELECT * FROM sections ORDER BY id', (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).json(results.rows)
    })
};

const getSectionsById = (request, response) => {
    const id = request.params.id;
    pool.query('SELECT * FROM sections WHERE id = $1', [id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).json(results.rows)
    })
};

const createSection = (request, response) => {
    const name = request.body.name;
    pool.query('INSERT INTO sections (name) VALUES ($1)', [name],  (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(201).send('CREATE SECTION')
    })
};

const updateSection = (request, response) => {
    const id = request.params.id;
    const name = request.body.name;
    pool.query('UPDATE sections SET name = $2 WHERE id = $1', [id, name], (error, results) => {
            if (error) { response.status(422).json({ error : error }) }
            response.status(200).send(`UPDATE SECTION`)
        }
    )
};

const deleteSection = (request, response) => {
    const id = request.params.id;
    pool.query('DELETE FROM sections WHERE id = $1', [id], (error, results) => {
        if (error) { response.status(422).json({ error : error }) }
        response.status(200).send(`DELETE SECTION`)
    })
};

module.exports = {
    getSections,
    getSectionsById,
    createSection,
    updateSection,
    deleteSection
};