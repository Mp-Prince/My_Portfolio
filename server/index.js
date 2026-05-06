async function Connect(req , res){
const oracledb = require('oracledb');

const dbConfig = {
    user: "c##Prince",  // MY ORACLE USERNAME
    Password: "Prince@6366",    //MY ORACLE PASSWORD
    connectString: "localhost/XEPDB1"   //HOST/SERVIVCE NAME
}

    try{
        let conn = await oracledb.getConnection(dbConfig);
        const result = await conn.execute(`Select * from test`);
        res.json(result.rows);
    }catch(err){
        console.error(err);
        res.status(500).send("DateBase error");
    }
}

Connect();