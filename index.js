const express = require('express');
const path = require('path');
const app = express();
const filesPath = path.join(__dirname, "files");
const dbConnect = require('./mongodb');
// const data = require("./files/data")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.sendFile(`${filesPath}/provideage.html`)
//     } else if (req.query.age < 18) {
//         resp.send("Your are Under Age")
//     } else {
//         next();
//     }

// const db = async() => {

// // }
// db();

app.get('/login', (req, resp) => {
    resp.sendFile(`${filesPath}/form.html`)
})
app.post("/login", async(req, resp) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log("Username: " + username);
    // console.log("Password: " + password);
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data.length);
    for (let i = 0; i <= data.length; i++) {
        let a = data[i];

        console.log(i)


        if (i < data.length) {


            // console.log("main chala")
            for (let j = 0; j <= 1; j++) {
                let usera = a.username;
                let userp = a.password;
                if (username == usera && password == userp) {
                    resp.sendFile(`${filesPath}/index.html`);
                    // const a = 1;
                    // console.log(usera);
                    break;

                    // console.log("main bii chala")

                }
            }
        } else {
            resp.sendFile(`${filesPath}/404.html`)
        }

    }

});
app.post('/register', async(req, resp) => {
    let reg = await dbConnect();
    reg = await reg.insertOne(req.body);
    console.log(req.body);
    resp.sendFile(`${filesPath}/form.html`);
})


// }
// app.use(reqFilter);



// async function ba() {
//     let a = await dbConnect();
//     a = await a.find().toArray();
//     console.log(a)
// }


// app.get('', async(res, resp) => {
//         data = await dbConnect();
//         data = await data.find().toArray();
//         resp.send(data)
//     })
// app.get('/', (req, resp) => {
//         resp.sendFile(`${filesPath}/form.html`)
//     })
app.get('/', (req, resp) => {
    resp.sendFile(`${filesPath}/index.html`)
})

app.get('/register', (req, resp) => {
    resp.sendFile(`${filesPath}/register.html`)
})


// app.get('', async(req, resp) => {
//         let data = await dbConnect();
//         data = await data.find().toArray();
//         console.log(data)
//     })
// const user = [{ name: 'Qasid', class: 'adp' }, { name: 'Qasid2', class: 'adp2' }]
// console.log(data)
// console.log(user)

// console.log(data)

// let insertValues = [{ name: 'Qasid', price: '120' }, { name: 'Qasid1', price: '1320' }, { name: 'Qasid2', price: '1120' }]
// const add = async() => {
//     const db = await dbConnect();
//     const result = await db.insertOne({ name: 'qasod' });
//     if (result.acknowledged) {
//         console.log('Data Has been Added')
//     }
// }
// add();

// app.set('view engine', 'ejs')
//     // app.get('', (_, resp) => {
//     //     resp.sendFile(`${filesPath}/index.html`)
//     // });
// app.get('/about', (res, resp) => {
//     resp.sendFile(`${filesPath}/about.html`)
// });
// app.get('/profile', (_, resp) => {
//     resp.render('profile', { data });
// });
// app.get('*', (res, resp) => {
//     resp.sendFile(`${filesPath}/404.html`)
// });

app.listen(8080)