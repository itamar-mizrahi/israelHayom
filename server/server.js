import http from 'http';
import cors from 'cors';
import express from 'express';
// import { Sequelize } from 'sequelize';

const config = {
    port: 8000,
    //  TODO: bonus: connect to db  database: {
    //     username: "root",
    //     password: "admin",
    //     host: "localhost",
    //     port: "3306",
    //     dialect: "mysql",
    //     database: "photato",
    // }
};

let app = express();
app.server = http.createServer(app);
app.use(cors({}));

// TODO: bonus: connect to db 
//const database = new Sequelize(config.database);

// database.sync().then(() => {
//     app.get('/', (req, res) => {
//         res.json({app: 'photato'});
//     });
// });
app.server.listen(config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});
export default app;