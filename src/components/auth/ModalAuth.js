import { useState } from "react";
import React from "react";
import API from "../../api/API";
import {Modal, Button, Row, Col, Form, Image} from 'react-bootstrap';
// TODO доделать стили модальки!!
import css from "./modalAuth.module.css";
import { useNavigate } from "react-router-dom";
import closeImg from "../../images/closeBlackImg.png"
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

export const ModalAuth = (props) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const[open, setOpen] = React.useState(false)


    const submit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    API.createUser(user)
      .then((res) => {
        props.authUser(res.data.access)
        if(res.status === 200) {
          props.setModal(false);
          // запоминаем новый чекпоинт
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        if (error.status === 400) {
          setError("Логин или пароль введены неправильно");
        } else if (username === "") {
          setError("Это обязательное поле");
        } else {
          setError("Логин или пароль ввели неправильно");
        }
      });
  };
  const handleClickOpen = () => {
      setOpen(true)
  }
    const handleClickClose = () => {
        setOpen(false)
    }


    return (
      // <Modal.Dialog>
      //     <Modal.Header closeButton>
      //         <Modal.Title>Modal title</Modal.Title>
      //     </Modal.Header>
      //
      //     <Modal.Body>
      //         <p>Modal body text goes here.</p>
      //     </Modal.Body>
      //
      //     <Modal.Footer>
      //         <Button variant="secondary">Close</Button>
      //         <Button variant="primary">Save changes</Button>
      //     </Modal.Footer>
      // </Modal.Dialog>
      <Dialog open={open} onClose={handleClickOpen} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Log In</DialogTitle>
          <DialogContent>
              <DialogContentText>Log in to see videos </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Login"
                  type="login"
                  fullWidth
              />
              <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
              />
          </DialogContent>
          <DialogActions>
              <Button onClick={handleClickOpen} color="primary"> Cancel </Button>
              <Button onClick={handleClickOpen} color="primary"> Login </Button>
          </DialogActions>
      </Dialog>
  );
};
