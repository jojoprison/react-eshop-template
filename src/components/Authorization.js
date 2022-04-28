import React, {useEffect, useState} from "react";

const Authorization = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState('Логин не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError])

    const loginHandler = (e) => {
        setLogin(e.target.value)
        setLoginError("")
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 6) {
            setPasswordError("Пароль должен быть больше 6 символов")
            if(!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        }
        else {
            setPasswordError("")
        }
        // setLoginError("")
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }



    return(
        <div className="authorization">
            {/*<form>*/}
                <div className="authorization_header">Авторизация</div>
                {(loginDirty && loginError) && <div style={{color:'red'} }>{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} name = 'login'
                       type="text" placeholder="Enter your login"/>
                {(passwordError && passwordDirty) && <div style={{color:'red'} }>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}
                       name = 'password' type="password" placeholder="Enter your password"/>
                <button className="authorization_btn" disabled={!formValid} type="submit">Authorization</button>
            {/*</form>*/}
        </div>
    )
}

export default Authorization;
