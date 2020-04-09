var     express         = require('express');
var     router          = express.Router();
const   returnTemplate  = require('../Template/returnTemplate');
const   httpResult      = require('../config');
var     FirmaService     = require('../Services/firma.service');

router.get      ('/next',   getNext)
router.get      ('/list',   getList)

router.get      ('/',       getAll);
router.get      ('/:id',    getById);
router.post     ('/',       create);
router.put      ('/:id',    update);
router.delete   ('/:id',    remove);

function getNext(req, res, next) {
    var currentUser = req.TokenUser._id;
    console.log('-------------------------------------')
    console.log(currentUser)
    
    FirmaService.getNext(currentUser).then(data => {
        if (data) {
            res.json(returnTemplate(data, ""))
        } else {
            res.json(returnTemplate([], "Kayıt bulunamamıştır", httpResult.error))
        }
    })
    .catch(err => next(err));
}

function getList(req, res, next) {
    FirmaService.getAll().then(data => {
        if (data.length) {
            res.json(returnTemplate(data, ""))
        } else {
            res.json(returnTemplate([], "Kayıt bulunamamıştır", httpResult.error))
        }
    })
    .catch(err => next(err));
}


function getAll(req, res, next) {
    FirmaService.getAll().then(data => {
        if (data.length) {
            res.json(returnTemplate(data, ""))
        } else {
            res.json(returnTemplate([], "Kayıt bulunamamıştır", httpResult.error))
        }
    })
    .catch(err => next(err));
}

function getById(req, res, next) {
    FirmaService.getById(req.params.id).then(data => {
        //console.log(data)
        if (data) {
            res.json(returnTemplate([data], ""))
        } else {
            res.json(returnTemplate([], "Kayıt bulunamamıştır", httpResult.error))
        }
    })
    .catch(err => next(err));
}

function create(req, res, next) {
    FirmaService.create(req.body).then(data => {
        if (data.length) {
            res.json(returnTemplate(data, ""))
        } else {
            res.json(returnTemplate([], "Kayıt bulunamamıştır", httpResult.error))
        }
    })
    .catch(err => next(err));
}

function update(req, res, next) {
    FirmaService.update(req.params.id, req.body).then(data => {
        if (data) {
            res.json(returnTemplate(data, ""))
        } else {
            res.json(returnTemplate([], "Kayıt bulunamamıştır", httpResult.error))
        }
    })
    .catch(err => next(err));
}

function remove(req, res, next) {
    FirmaService.remove(req.params.id).then(data => {
        if (data) {
            res.json(returnTemplate(data, ""))
        } else {
            res.json(returnTemplate([], "Kayıt bulunamamıştır", httpResult.error))
        }
    })
    .catch(err => next(err));
}

module.exports = router;
