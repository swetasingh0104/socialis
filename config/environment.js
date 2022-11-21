const dotenv = require('dotenv').config();
const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');


const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});


const production ={
    name: 'production',
   asset_path:process.env.SOCIALIE_ASSET_PATHS,
    
    session_cookie_key: 'BLAHSOMETHING',
    db:process.env.SOCIALIE_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SOCIALIE_GMAIL_USERNAME,
            pass: process.env.SOCIALIE_GMAIL_PASS
        }
    },
    google_client_ID:process.env.SOCIALIE_GOOGLE_CLIENT_ID , // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
    google_client_Secret: process.env.SOCIALIE_GOOGLE_CLIENT_SECRET, // e.g. _ASDFA%KFJWIASDFASD#FAD-
    google_call_back_URL: process.env.SOCIALIE_GOOGLE_CALL_BACK_URLS,
    jwt_secret:process.env.SOCIALIE_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }
    
   
}
console.log(process.env.SOCIALIE_ASSET_PATHS);
console.log(process.env.SOCIALIE_ENVIRONMENT);

module.exports= eval(process.env.SOCIALIE_ENVIRONMENT) == undefined? development:eval(process.env.SOCIALIE_ENVIRONMENT);

