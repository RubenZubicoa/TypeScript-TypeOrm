const db = require('mssql');

try {
    db.connect('mssql://sa:rubzubCOD15@localhost/TypeOrm?encrypt=true');
    console.log('db connected');
} catch (error) {
    console.log(error)
}
export default db;