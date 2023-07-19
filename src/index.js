const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2/promise');

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
      database: 'freedb_freedbdatabase_netflix',
      user: 'freedb_freedb_crisv',
      password: 'SuSZM@r73Gkjz&*',
  
  });

  await connection.connect(); 

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`);

  return connection;
}

getConnection()

server.get("/movies", async (req, res)=>{
    
    const select =  'SELECT * FROM movies';  
    const connect = await getConnection(); 
    const [result] = await connect.query(select); 
 
    res.json({
      succes:true,
      movies :result
    }); 
  })

  