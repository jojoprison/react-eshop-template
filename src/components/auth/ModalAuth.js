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
  // const history = useHistory();
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
      <Modal.Dialog>
          <div className="padding-y container col-md-10">
              <Modal.Header>
                  <div className="container mb-3">
                      <Modal.Title><h2>Авторизация</h2></Modal.Title>
                  </div>
              </Modal.Header>

              <form onSubmit={submit}>
                  <Modal.Body>
                          <input id="name" type="text"
                                 onChange={(e) => setUsername(e.target.value)}
                                 placeholder="Ваш логин"
                                 name="login"
                                 value={username}
                                 className="form-control mb-4 input-box"/>

                          <input id="name" type="password"
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Ваш пароль"
                                 value={password}
                                 name="password"
                                 className="form-control input-box"/>
                      {/*<p>Modal body text goes here.</p>*/}
                  </Modal.Body>
                  <Modal.Footer>
                      {/*<Button variant="secondary">Close</Button>*/}
                      {/*<Button variant="primary">Войти</Button>*/}
                      <div className="container mt-4">
                        <button type="button" className="btn btn-lg btn-primary btn-block">
                            <p className="font-weight-bold">Авторизироваться</p></button>
                      </div>
                  </Modal.Footer>
              </form>
          </div>
      </Modal.Dialog>
  );
};
