import { http } from './axios'


async function list() { 
    return  http.get("/todo")
}

async function getById(data) { 
    return  http.get(`/todo/${data._id}`)
}


async function add(data) {
    return  http.post("/todo",data)
}
async function update(data) {
    return  http.put(`/todo/${data._id}`,data)
}
async function remove(data) { 
    return  http.delete(`/todo/${data._id}`)
}
async function complate(data) { 
    return  http.put(`/todo/${data._id}/complate`)
}


async function addTodoItem(data,todoItem) { 
    return  http.post(`/todo/${data._id}/todoitem`,todoItem)
}
async function updateTodoItem(data,todoItem) { 
    return  http.put(`/todo/${data._id}/todoitem/${todoItem._id}`,todoItem)
}
async function complateTodoItem(data,todoItem) { 

    return  http.put(`/todo/${data._id}/todoitem/${todoItem._id}/complate`)
}
 

async function removeTodoItem(data,todoItem)  { 
    return  http.delete(`/todo/${data._id}/todoitem/${todoItem._id}`)
}
 
export default {
    list,
    add,
    update,
    remove,
    addTodoItem,
    updateTodoItem,
    removeTodoItem,
    complateTodoItem,
    complate
}; 
