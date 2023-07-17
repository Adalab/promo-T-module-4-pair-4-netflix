const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//HACER ENDPOINT Y CONECTAR A LA BASE DE DATOS // EDITAR
async function getConnection() { //esto devuelve una promesa // los await are equivalente a los "then" del fetch
  const connection = await mysql2.createConnection({
      host: 'sql.freedb.tech',
      database: 'freedb_project molones',
      user: 'freedb_Group2',
      password: 'nnDTSJ#mTwUg?7W',
  
  });

  await connection.connect(); 

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`);

  return connection;
}

getConnection()