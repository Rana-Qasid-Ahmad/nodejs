const dbConnect = require("./mongodb");
let insertValues = [{ name: 'Qasid', price: '120' }, { name: 'Qasid1', price: '1320' }, { name: 'Qasid2', price: '1120' }]
const add = async() => {
    const db = await dbConnect();
    const result = await db.insertMany(insertValues);
    if (result.acknowledged) {
        console.log('Data Has been Added')
    }
}
add();