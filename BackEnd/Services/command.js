const config = require('../config.json');
const jwt = require('jsonwebtoken');
// const userService = require("../Services/user.service")
const { userModel } = require('../Models/esai.model');
const httpResult = require('../config');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const dotenv = require('dotenv').config()
// const {User} = require('../Models/tursab.model');

var DB_DATABASE = "huawei"
var DB_HOST = "localhost"
var DB_PORT = "27017"


const dbURI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

function databaseConnection() {
    mongoose.connect(dbURI, options).then(
        () => {
            console.log('DB baglandi')
        },
        err => {
            console.log('DB baglandi hatasi ', err)
        }
    )
}

let publicUrl = [
    "/users/authenticate",
    "/users",
    "/",
]


function TokenKontrol(req, res, next) {
    //public url kontrolü
    for (let index = 0; index < publicUrl.length; index++) {
        if (publicUrl[index] === req.url) {
            next();
            return;
        }
    }

    let token = req.headers['x-access-token'] || req.headers['authorization'] || req.headers['Authorization'];
    if (!token) {
        return res.json({
            success: false,
            message: 'Token YOK Lütfen Giriş Yapınız'
        });
    }

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return req.returnTemplate([], "Token Geçerli Degil Lütfen Tekrar Giriş Yapınız.", httpResult.error)
            } else {
                userModel.findById(decoded._id)
                    .then(user => {
                        if (user) {
                            req.TokenUser = user;
                            req.decoded = decoded;
                            next();
                        }
                        else {
                            return req.returnTemplate([], "Token Geçerli Kullanıcı Bulununamadı Lütfen bilgilerinizi Kontrol Ediniz.", httpResult.error)
                        }
                    })
                    .catch(err => next(err));
            }
        });
    }
    else {
        return req.returnTemplate([], "Token YOK Lütfen Giriş Yapınız", httpResult.error)

    }
}



function ResponseModify(req, res, next) {
    req.returnTemplate = function returnJson(data, message, status = 200) {
        let responseTemplate = {
            status: status,
            data: data,
            messages: message
        }
        res.status(200).json(responseTemplate);
    }
    next();
}

module.exports = {
    TokenKontrol,
    databaseConnection,
    ResponseModify
}