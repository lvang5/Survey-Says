const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST route

router.post('/', (req, res) => {
    console.log('Posting', req.body);
    const ratings = req.body;
    const query = 
   `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [ratings[0], ratings[1], ratings[2], ratings[3]]).then((results) => {
        console.log('Success in making POST');
        
        res.sendStatus(201);
    }).catch((error)=> {
        console.log('Error in making POST', error);
        res.sendStatus(500);
    })
    
})

router.get('/', (req, res) => {
    console.log('GET');
    const query = `SELECT * FROM "feedback";`;
    pool.query(query).then((result) => {
        res.send(result);
    }).catch((error) => {
        console.log('Error in GET', error)
        res.sendStatus(500);
    });
})

router.delete('/:id', (req,res) => {
    console.log('Deleting in progress', );
    let deleteThis = req.params.id;
    const query = 'DELETE FROM "feedback" WHERE "id" = $1;';
    pool.query(query, [deleteThis]).then((results) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Oh No You can't delete yet`, error);
        res.sendStatus(500);
    });
});





module.exports = router;