import postgres from "postgres";


const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'mahjong',
    username: 'postgres',
    password: '1234'
})

export default sql