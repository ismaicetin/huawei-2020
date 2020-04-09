import React, { useState, useEffect, useContext } from 'react';
import TodoService from "../../services/Todo.service"
//import { TodoContext } from "../../context/TodoContext"
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
import Edit from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import { SnackbarProvider, useSnackbar } from 'notistack';


function Page(props) {
    var data = [];
    var tempPopupData = {};
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = React.useState(false);
    const [areYouSerrious, setAreYouSerrious] = React.useState(false);
    const [Todo, setTodo] = useState(data);
    const [popupData, setPopupData] = useState(tempPopupData);
    const [todoItemAdd, setTodoItemAdd] = useState(false);
    const [popupDataItem, setPopupDataItem] = useState([]);

    var onchangeHandle = (value, id) => e => {
        setPopupData({
            ...popupData,
            [value]: e.target.value
        });
    };
    var onchangeHandleItem = (value, id) => e => {
        setPopupDataItem({
            ...popupDataItem,
            [value]: e.target.value
        });
    };

    const updataTodo = (row) => {
        setPopupData(row)
        setOpen(true);
    };

    const complateTodo = (row) => {

      
        TodoService.complate(row).then(response => {
            if (response.status == 200) { 
                var tempPacketler = Todo.map((item) => { 
                   
                        if(item._id == row._id){
                            item.State=false
                        }
                         
                    return item
                });
                setTodo(tempPacketler); 
                enqueueSnackbar(`${row._id} Todo Guncellendi`, { variant: "success", preventDuplicate: true }); 
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })



    };

    const verfyComplateTodo = (row) => {

        var temp = [...row.TodoItem]
        temp = temp.map((i) => i.State).reduce(function (accumulator, pilot) {
            return accumulator || pilot;
        }, false);


        return temp
    };


    const deletePacketAreYouSerious = (packet) => {
        setPopupData(packet);
        setAreYouSerrious(true);
    };









    const handleClickOpenPopup = () => {
        setPopupData(tempPopupData)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAreYouSerrious(false);
    };
    const handleSave = () => {

        TodoService.add(popupData).then(response => {
            if (response.status == 200) {

                var newTodo = [...Todo];
                newTodo.push(response.data)
                setTodo(newTodo);
                setOpen(false);
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })
    }
    const handleSaveItem = () => {

        TodoService.addTodoItem(popupData, popupDataItem).then(response => {
            if (response.status == 200) {
                var newpopupData = popupData
                newpopupData.TodoItem.push(response.data)
                setPopupData(newpopupData)
                setTodoItemAdd(false)
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })
    }
    const handleUpdate = () => {
        TodoService.update(popupData).then(response => {
            if (response.status == 200) {

                var updated = Todo.map(item => {
                    if (item.id === popupData.id) {
                        return popupData;
                    } else {
                        return item;
                    }
                })
                setTodo(updated);
                setOpen(false);
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })
    }
    function todoRemove(row) {
        TodoService.remove(row).then(response => {
            if (response.status == 200) {
                var tempPacketler = Todo.filter((item) => { return item._id != row._id });
                setTodo(tempPacketler);
                enqueueSnackbar(`${row._id} Todo Silindi`, { variant: "success", preventDuplicate: true });
                setAreYouSerrious(false);
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })
    };
    const complateTodoItem = (row) => {
        TodoService.complateTodoItem(popupData, row).then(response => {
            if (response.status == 200) { 
                var tempPacketler = Todo.map((item) => { 
                    var newpopupData = item
                    var f = newpopupData.TodoItem.map((item) => {
                        if(item._id == row._id){
                            item.State=false
                        }
                        return item
                    }); 
                    newpopupData.TodoItem = f 
                    return newpopupData
                });
                setTodo(tempPacketler); 
                enqueueSnackbar(`${row._id} Todo Guncellendi`, { variant: "success", preventDuplicate: true }); 
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })

    }


    const deleteTodoItem = (row) => {
        TodoService.removeTodoItem(popupData, row).then(response => {
            if (response.status == 200) { 
                var tempPacketler = Todo.map((item) => { 
                    var newpopupData = item
                    var f = newpopupData.TodoItem.filter((item) => { return item._id != row._id }); 
                    newpopupData.TodoItem = f 
                    return newpopupData
                });
                setTodo(tempPacketler); 
                enqueueSnackbar(`${row._id} Todo Silindi`, { variant: "success", preventDuplicate: true }); 
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })

    }

    useEffect(() => {
        TodoService.list().then((response) => {

            if (response.status == 200) {
                setTodo(response.data);
            } else {
                enqueueSnackbar(response.messages || "Service ERROR", { variant: "error", preventDuplicate: true });
            }
        })
    }, [])







    return (
        <Card style={{
            position: "relative",
            padding: 20,
            paddingBottom: 60,
            height: "100%",
            minHeight: "400px",
            overflowY: "auto",
        }}  >
            <Button variant="outlined" color="primary" onClick={handleClickOpenPopup}>
                <AddIcon></AddIcon>  Todo EKLE
           </Button>
            <Dialog
                maxWidth={popupData._id ? "lg" : "sm"}
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Todo"} </DialogTitle>
                <DialogContent>
                    <Card >
                        <CardContent>

                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        onChange={onchangeHandle("Name")}
                                        label="Name"
                                        value={popupData.Name}
                                        variant="standard"
                                    />
                                    {popupData._id && <> <hr />
                                        {!todoItemAdd && <Button variant="outlined" color="primary" onClick={() => setTodoItemAdd(true)}>
                                            TodoItem Add <AddIcon></AddIcon>
                                        </Button>}
                                    </>}
                                </Grid>

                            </Grid>


                            {todoItemAdd ?
                                <Card >
                                    <Grid container spacing={3}>


                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                fullWidth
                                                onChange={onchangeHandleItem("Name")}
                                                label="Name"
                                                value={popupDataItem.Name}
                                                variant="standard"
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                fullWidth
                                                onChange={onchangeHandleItem("Description")}
                                                label="Description"
                                                value={popupDataItem.Description}
                                                variant="standard"
                                            />

                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                fullWidth
                                                onChange={onchangeHandleItem("Deadline")}
                                                label="Deadline"
                                                value={popupDataItem.Deadline}
                                                variant="standard"
                                            />

                                        </Grid>

                                        <Grid item xs={12} alignItems="flex-end" alignContent="flex-end'">
                                            <Button variant="outlined" color="primary" onClick={() => setTodoItemAdd(false)}>
                                                Cancel
                                        </Button>
                                            <Button variant="outlined" color="primary" onClick={handleSaveItem}>
                                                Add
                                        </Button>

                                        </Grid>


                                        {/* <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        onChange={onchangeHandle("Description")}
                                        label="Description"
                                        value={popupData.Description}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <FormControl variant="filled" style={{ minWidth: "100%" }}>
                                        <InputLabel id="demo-simple-select-label">DURUM   </InputLabel>
                                        <Select
                                            fullWidth
                                            labelId="demo-simple-select-label"
                                            value={popupData.State}
                                            onChange={onchangeHandle("State")}
                                        >
                                            <MenuItem value="A">Aktif</MenuItem>
                                            <MenuItem value="I">Pasif</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid> */}

                                    </Grid>
                                </Card>
                                : <>
                                    {
                                        popupData._id && popupData.TodoItem && popupData.TodoItem.length > 0 &&
                                        <Card >
                                            <Grid container spacing={3}>
                                                <Grid item xs={12}>
                                                    <Table aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>id</TableCell>
                                                                <TableCell align="right">Name</TableCell>
                                                                <TableCell align="right">Description</TableCell>
                                                                <TableCell align="right">Deadline</TableCell>
                                                                <TableCell align="right">State</TableCell>
                                                                <TableCell align="right">#</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {popupData.TodoItem.map(row => (
                                                                <TableRow>
                                                                    <TableCell component="th" scope="row"> {row._id} </TableCell>
                                                                    <TableCell align="right">{row.Name}</TableCell>
                                                                    <TableCell align="right">{row.Description}</TableCell>
                                                                    <TableCell align="right">{row.Deadline}</TableCell>
                                                                    <TableCell align="right">{row.State?"Active":"Tamamlandı"}</TableCell>
                                                                    <TableCell align="right">
                                                                      {row.State &&  <Button
                                                                            variant="contained"
                                                                            color="sucess"
                                                                            onClick={() => complateTodoItem(row)}>
                                                                            Tamamla
                                                                        </Button>
                                                                        }
                                                                        <Fab color="secondary" aria-label="edit"
                                                                            style={{ height: "37px", width: "37px" }}
                                                                            onClick={() => deleteTodoItem(row)}>
                                                                            <CancelIcon />
                                                                        </Fab>
                                                                    </TableCell>
                                                                </TableRow>

                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    }
                                </>
                            }
                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Çık
                        </Button>
                    {popupData.id ?
                        <Button
                            disabled={!popupData.Name}
                            onClick={handleUpdate}
                            color="primary"
                            autoFocus
                        > Update
                        </Button> :
                        <Button
                            disabled={!popupData.Name}
                            onClick={handleSave}
                            color="primary"
                            autoFocus>
                            Ekle
                        </Button>
                    }



                </DialogActions>
            </Dialog>

            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Dependency</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">#</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Todo.map(row => (
                        <TableRow>
                            <TableCell component="th" scope="row"> {row._id} </TableCell>
                            <TableCell align="right">{row.Name}</TableCell>
                            <TableCell align="right">{row.TodoItem.length}</TableCell>
                            <TableCell align="right">{row.State?"Islemde":"Tamamlandı"}</TableCell>
                            <TableCell align="right">
                               {row.State&& <Button
                                    variant="contained"
                                    disabled={verfyComplateTodo(row)}
                                    color="sucess"
                                    onClick={() => complateTodo(row)}>
                                    Tamamla
                                </Button>}

                                <Fab color="primary" aria-label="edit"
                                    style={{ height: "37px", width: "37px" }}
                                    onClick={() => updataTodo(row)}>
                                    <Edit />
                                </Fab>
                                <Fab color="secondary" aria-label="edit"
                                    style={{ height: "37px", width: "37px" }}
                                    onClick={() => deletePacketAreYouSerious(row)}>
                                    <CancelIcon />
                                </Fab>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>




            <Dialog
                open={areYouSerrious}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"TODO Silme"}</DialogTitle>
                <DialogContent>
                    Silindikten sonra işlem geri alınamaz!! <br />
                    Silmek istediginize emin misiniz.
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Hayır  </Button>
                    <Button onClick={() => todoRemove(popupData)} color="secondary"> Evet </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default Page;



