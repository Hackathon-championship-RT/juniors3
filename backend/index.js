import express from 'express'
import sql from "./db.js";

const PORT = 5252

const app = express()
app.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", req.headers['origin'])
    console.log(req.query)
    try {
        let result
        if (req.query['difficulty'] !== undefined) {
            result = await sql`SELECT *
                               FROM results
                               WHERE difficulty = ${req.query['difficulty']}`
        } else {
            result = await sql`SELECT *
                               FROM results`
        }
        result.sort((a, b) => {
            if (a.time === b.time) {
                return a.reshuffles - b.reshuffles
            }
            return a.time - b.time
        })
        result = result.filter((e, ind) => ind < 10)
        res.status(200).json(result)
    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})
app.get('/add_result', async (req, res) => {
    res.header("Access-Control-Allow-Origin", req.headers['origin'])
    console.log(req.query)
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

app.options('/*', (req, res) => {
    res.header("Access-Control-Allow-Methods", "POST")
    res.header("Access-Control-Allow-Headers", "Content-type")
    res.header("Access-Control-Allow-Origin", req.headers['origin'])
    res.sendStatus(200)
})

try {
    app.listen(PORT, () => {
        console.log("SERVER STARTED ON PORT " + PORT)
    })
} catch (e) {
    console.log(e)
}