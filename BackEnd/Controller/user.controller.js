var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const { userModel } = require('../Models/esai.model');
const httpResult = require('../config');
const config = require('../config.json');

router.post('/authenticate', auth);
// router.get      ('/',       getAll);
router.get('/:id', getById);
router.post('/', create);
// router.put      ('/:id',    update);
// router.delete   ('/:id',    remove);


async function auth(req, res, next) {
    let payload = req.body;
    const dbRes = await userModel.find({ UserName: payload.UserName, Password: payload.Password });
    if (dbRes.length > 0) {
        var user = dbRes[0]
        const token = jwt.sign({ _id: user._id, role: user.Password }, config.secret);
        var sendData = {
            UserName: user.UserName,
            FirstName: user.FirstName,
            LastName: user.LastName,
            token: token,
            IsAdmin: user.isAdmin,
            _id: user._id
        }
        return req.returnTemplate(sendData, "")
    } else {
        return req.returnTemplate(null, "Kullanıcı bulunamadı", httpResult.error)
    }
}

async function getById(req, res, next) {
    userModel.findById(req.params.id, (err, data) => {
        if (err) {
            return req.returnTemplate([], err, httpResult.error)
        }
        else {
            return req.returnTemplate(data, "")
        }
    })

}

function create(req, res, next) { 
    let payload = req.body;
    var new_userModel = new userModel(payload);
    // let row = await new_userModel.save()
    new_userModel.save((err, row) => {
        if (err) {
            return req.returnTemplate(err, "kullancı oluşturulamadı", httpResult.error)
        }

        const token = jwt.sign({ _id: row._id, role: row.Password }, config.secret);
        var sendData = {
            UserName: row.UserName,
            FirstName: row.FirstName,
            LastName: row.LastName,
            token: token,
            IsAdmin: row.isAdmin,
            _id: row._id
        }
        return req.returnTemplate(sendData, "")

        // return req.returnTemplate(row, "")
    });
 
}
 
module.exports = router;
