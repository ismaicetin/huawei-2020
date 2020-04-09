var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const { userModel, todoModel, todoItemModel } = require('../Models/esai.model');
const httpResult = require('../config');
const config = require('../config.json');

router.get('/', list);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.put('/:id/complate', complate);
router.delete('/:id', remove);


router.post('/:id/todoitem', addTodoItem); 
router.put('/:id/todoitem/:todoitemId', updateTodoItem); 
router.put('/:id/todoitem/:todoitemId/complate', complateTodoItem); 
router.delete('/:id/todoitem/:todoitemId', removeTodoItem); 





async function list(req, res) {
    let row = await todoModel.find().populate("TodoItem")
    // todoModel.find({}, (err, row) => {
    //   if (err) {
    //     return req.returnTemplate([],"hata meydana geldi",500) 
    //   }
    //   return req.returnTemplate(row,"") 
    // });
    return req.returnTemplate(row, "", 200)
};



async function getById(req, res) {
    let row = await todoModel.findById(req.params.id).populate("TodoItem")
    // todoModel.find({ _id: req.params.id }, (err, row) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   }
    //   res.status(200).json(row);
    // });
    return req.returnTemplate(row, "")
};



async function create(req, res) {
    let payload = req.body;
    var new_todoModel = new todoModel(payload);
    let row = await new_todoModel.save()
    //  new_todoModel.save((err, row) => {
    //     if (err) {
    //       res.status(500).send(err);
    //     }
    //     res.status(201).json(row);
    //   });  
    return req.returnTemplate(row, "")
};



async function complate(req, res) {
    let paramId = req.params.id;   
    todoModel.findOneAndUpdate(
            { _id: paramId},
            {State:false},
            { new: true },
            (err, row) => {
                if (err) {
                    return req.returnTemplate([], err, httpResult.error);
                }
                return req.returnTemplate(row, "")
            }
        );


};

function update(req, res) {
    todoModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, row) => {
            if (err) {
                return req.returnTemplate([], err, httpResult.error);
            }
            return req.returnTemplate(row, "")
        }
    );
};

function remove(req, res) {
    todoModel.remove({ _id: req.params.id }, (err, Category) => {
        if (err) {
            return req.returnTemplate([], err, httpResult.error);
        }
        return req.returnTemplate([], "başarı ile silinmiştir")
    });
};


async function addTodoItem(req, res) {
    let paramId = req.params.id;
    let payload = req.body;
    var new_todoItemModel = new todoItemModel(payload);
    new_todoItemModel = await new_todoItemModel.save()
    //  new_todoModel.save((err, row) => {
    //     if (err) {
    //       res.status(500).send(err);
    //     }
    //     res.status(201).json(row);
    //   });  

    let new_todoModel = await todoModel.findByIdAndUpdate(
        paramId,
        { $push: { "TodoItem": new_todoItemModel._id} },
        { safe: true, upsert: true } );

    return req.returnTemplate(new_todoItemModel, "")
};


async function removeTodoItem(req, res) {
    let paramId = req.params.id;
    let todoitemId =req.params.todoitemId;
    
    todoModel.findByIdAndUpdate(
        paramId,
       { $pull: { 'TodoItem':  todoitemId  } }, async function(err,model){
          if(err){
            return req.returnTemplate([], err, httpResult.error);
            }
            await todoItemModel.remove({ _id:todoitemId })
            return req.returnTemplate([], "başarı ile silinmiştir")
        });

};




async function complateTodoItem(req, res) {
    let paramId = req.params.id;
    let todoitemId =req.params.todoitemId;
    let payload = req.body;
    
    // todoModel.findByIdAndUpdate(
    //     paramId,
    //    { $pull: { 'TodoItem':  todoitemId  } },async function(err,model){
    //       if(err){
    //         return req.returnTemplate([], err, httpResult.error);
    //         }
    //         await todoItemModel.remove({ _id:todoitemId })
    //         return req.returnTemplate([], "başarı ile silinmiştir")
    //     });

    todoItemModel.findOneAndUpdate(
            { _id: todoitemId},
            {State:false},
            { new: true },
            (err, row) => {
                if (err) {
                    return req.returnTemplate([], err, httpResult.error);
                }
                return req.returnTemplate(row, "")
            }
        );


};

async function updateTodoItem(req, res) {
    let paramId = req.params.id;
    let todoitemId =req.params.todoitemId;
    let payload = req.body;
    
    // todoModel.findByIdAndUpdate(
    //     paramId,
    //    { $pull: { 'TodoItem':  todoitemId  } },async function(err,model){
    //       if(err){
    //         return req.returnTemplate([], err, httpResult.error);
    //         }
    //         await todoItemModel.remove({ _id:todoitemId })
    //         return req.returnTemplate([], "başarı ile silinmiştir")
    //     });

    todoItemModel.findOneAndUpdate(
            { _id: todoitemId},
            payload,
            { new: true },
            (err, row) => {
                if (err) {
                    return req.returnTemplate([], err, httpResult.error);
                }
                return req.returnTemplate(row, "")
            }
        );


};



// var satisFirsati = await satisFirsatiModel.findById(req.params.id)
// payload["Musteri"] = satisFirsati.Firma

// var new_gorusmeKayitlariModel = new gorusmeKayitlariModel(payload);
// let rowGorusmeKayitlari = await new_gorusmeKayitlariModel.save()
// satisFirsatiModel.findOneAndUpdate({ _id: req.params.id }, 
// { 'Durumlar.Gorusme': true, $push: { GorusmeKayitlari: rowGorusmeKayitlari._id } }, (err, row) => {
//   if (err) {
//     return req.returnTemplate([], err, 500);
//   }
//   // row.GorusmeKayitlari.push(rowGorusmeKayitlari._id)
//   // row.Durumlar.Gorusme = true;
//   req.query.id = req.params.id
//   exports.list(req, res)

//   // return req.returnTemplate(row, "")
// });

module.exports = router;
