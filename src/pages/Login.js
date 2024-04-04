import React, {useState} from "react";

import {useNavigate} from 'react-router-dom';
function Login(){
    const navigate = useNavigate();
    /**
     * String isim = "Ali";
     * 
     * void setIsim(isim){
     * this.isim = isim;
     * }
     * 
     * String ahmetAmca(){
     * return isim;
     * }
     * 
     * 
     */
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const login = ()=>{
        console.log("Giriş butonuna basıldı.");
        console.log("Giriş Bilgileri...: ", userName,password);
        navigate.call(null,'/admin-panel');
    }

    const getUserName = (evt) => {
        setUserName(evt.target.value);
    }

    const getPassword = (evt) =>{
        setPassword(evt.target.value);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="m-3">
                        <label className="form-label">Kullanıcı Adı</label>
                        <input className="form-control" type="text" onChange={getUserName}/>
                    </div>
                    <div className="m-3">
                        <label className="form-label">Şifre</label>
                        <input className="form-control" type="text" onChange={getPassword} />
                    </div>
                    <div className="m-2">
                        <button className="btn btn-success" onClick={login}>Giriş Yap</button>
                    </div>
                    <div className="m-2 text-center">
                        <a href="/register">üye olmak ister misin?</a>
                    </div>
                </div>
                <div className="col-4"></div>                    
            </div>
        </div>
    )
}

export default Login;