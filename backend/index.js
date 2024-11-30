import express from 'express'
import sql from "./db.js";

const PORT = 5252

const app = express()
app.get('/', async (req, res) => {
    try {
        if (req.query['difficulty'] !== undefined) {
            res.status(200).json(await sql`SELECT *
                                           FROM results
                                           WHERE difficulty = ${req.query['difficulty']}`)
        } else {
            res.status(200).json(await sql`SELECT *
                                           FROM results`)
        }
    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})
app.get('/add_result', async (req, res) => {
    try {
        await sql`INSERT INTO results (name, time, reshuffles, difficulty)
                  VALUES (${req.query['name']}, ${req.query['time']}, ${req.query['reshuffles']},
                          ${req.query['difficulty']})`
        res.sendStatus(200)
    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})

try {
    app.listen(PORT, () => {
        console.log("SERVER STARTED ON PORT " + PORT)
    })
} catch (e) {
    console.log(e)
}