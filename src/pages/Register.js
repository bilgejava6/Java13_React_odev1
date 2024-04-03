import React, {useState} from "react";

function Register(){
    //let sayi = 45;
    const [user,setUser] = useState({
        userName: 'muhammet',
        password: '123',
        rePassword: '123',
        email: 'muhammet@gmail.com'
    });
    console.log('user....: ',user);
    /**
     * {
        userName: 'muhammet',
        password: '123',
        rePassword: '123',
        email: 'muhammet@gmail.com'
        }
     */
    console.log('...user .....: ', {...user, userName: 'Deniz'});
    /**
     * 
     * {
     *  userName: 'muhammet',
        password: '123',
        rePassword: '123',
        email: 'muhammet@gmail.com',
        userName: 'Deniz'
     * 
     * }
     * 
     */
    /**
     * DİKKAT!!!!!!
     * bir obje bile olsa değişkenin içeriklerinde değişiklik yapmak için 
     * set yapmak zorundasınız, çünkü set işlemi React ın o değişkenin değerinin 
     * change olduğunu anlaması için gereklidir. Bu nedenle 
     * user.useName = 'dasd' şeklindeki atamalar sayfada işleme neden olmaz.
     * .........
     * bir object içinde tanımlanan Key:Value şeklindeki atamalarda eğer 
     * aynı anahtara sahip iki değer var ise, sonra tanımlanan ve atanan değer
     * son değer olarak kalır.
     * .........
     * Eğer bir dizi, object gibi bir değişkene [...DEGISKEN] üç nokta koyarsanız
     * o değişken ana değişkenlerinden virgül ile ayrılır.
     * 
     */

/*
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePasword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
*/
    const getUserName = (evt) =>{ setUser({...user,userName: evt.target.value}) }
    const getPassword = (evt) =>{ setUser({...user,password: evt.target.value}) }
    const getRePassword = (evt) =>{setUser({...user,rePassword: evt.target.value})  }
    const getEmail = (evt) =>{ setUser({...user,email: evt.target.value})}
    
    const register = ()=>{
        if(user.userName === '' || user.password==='' || user.rePassword==='' || user.email===''){
            alert('Lütfen gerekli alanları doldurunuz.');
        }else if(user.password !== user.rePassword){
            alert('Şifreler uyuşmuyor');
        }else{
            alert('Kayıt başarılı');
        }
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
                    <div className="m-3">
                        <label className="form-label">Tekrar Şifre</label>
                        <input className="form-control" type="text" onChange={getRePassword} />
                    </div>
                    <div className="m-3">
                        <label className="form-label">E-Posta</label>
                        <input className="form-control" type="text" onChange={getEmail} />
                    </div>
                    <div className="m-2">
                        <button className="btn btn-success" onClick={register}>Üye Ol</button>
                    </div>
                </div>
                <div className="col-4"></div>                    
            </div>
        </div>
    )
}

export default Register;