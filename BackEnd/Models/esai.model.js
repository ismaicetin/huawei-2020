const mongoose = require('mongoose');
const Schema = mongoose.Schema;




var UserSchema = new Schema({
    UserName: { type: String, required: false},
    Password: { type: String, required: false },
    FirstName: { type: String, required: false },
    LastName: { type: String, required: false},
    isAdmin: { type: Boolean, default: false }
}, { versionKey: false })

var TodoSchema = new Schema({
    Name: { type: String, required: false, default: null },
    State: { type: Boolean, default: true },
    TodoItem:[{ type: Schema.Types.ObjectId, ref: 'TodoItem', default: []}]
}, { versionKey: false })

var TodoItemSchema = new Schema({
    Name: { type: String, required: false },
    Description: { type: String,   default: "" },
    Deadline: { type: String, required: false },
    State: { type: Boolean, default: true },
}, { versionKey: false })


module.exports.todoItemModel = mongoose.model('TodoItem', TodoItemSchema);
module.exports.todoModel = mongoose.model('Todos', TodoSchema);
module.exports.userModel = mongoose.model('Users', UserSchema);
