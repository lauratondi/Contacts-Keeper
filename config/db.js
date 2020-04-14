const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')

// const connectDB = async () => {
//     mongoose
//         .connect(db, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true
//         })
//         .then(() => console.log('MongoDb Connected'))
//         .catch(err => {
//             console.log(err.message);
//             process.exit(1);
//         });
// };


// SAME OF ABOVE WHAT USING ASYNC

const connectDB = async () => {
    try {
        await mongoose
            .connect(db, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            });
        console.log('MongoDb Connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;