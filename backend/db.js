import sql from 'mssql'
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_HOST,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};
export const connection = async () => {
    try {
        const pool = await sql.connect(dbConfig);
        console.log("Connection Established");
        return pool;
    } catch (err) {
        console.log("Couldn't Connect to Database");
        throw err;
    }
};
