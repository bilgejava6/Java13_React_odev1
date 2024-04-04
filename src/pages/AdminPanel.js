import React, { useState, useEffect } from 'react';
import UserCard from '../components/molekul/UserCard';

function AdminPanel(){

    const [users,setUsers] = useState([]);

    /**
     * JavaScript te bir end-point e istek atmak ve oradan cevap almak için kullanılan 
     * yapı; Fetch tir.
     * Asenkron bir işlem olup istek ilgili adrese gönderilir ve cevap beklenir. Gelen
     * cevap istenilen türde handle edilebilir.(JSON, Text v.s.)
     * 
     * Sayfa yüklenirken bu işlemi yap nasıl diyebiliriz?
     * Bunun için kullılacak yöntem React Hooks "useEffect" tir. useEffect bir contructor
     * gibi davranabilir, temelde bir bişeni takip etmek için kullanılır ve iligli bileşen
     * değiştiğinde sayfayı render eder.
     * 
     * DİKKAT!!!!
     * bir bileşen (component) tanımladığınızda bu bileşenin react tarafından takip edilebilmesi için
     * özellikle bir id bilgisinin geçilmesi gereklidir. Bu id bilgisi bir index olabilir.
     */
    

    useEffect(()=>{
        // DİKKAT!!!! Burada yapılan işlem asenkron dur yani sayfa yüklendikten sonra cevap gelecektir.
            fetch('https://randomuser.me/api/?results=5') // Bu ilgili adrese istek atar[GET]
            .then(data=> data.json()) // gelen datayı json formatına çevirecek
            .then(data=>{   
                console.log(data.results);  // ilgili datayı object olarak kullanıma sunuyoruz.
                setUsers(data.results);
            });
    },[]);
    console.log('adminpanel render');
    return(
        <>
            <div className="contanier-fluid text-bg-danger text-center" style={{ minHeight: 150}}>
                <h1>Admin Panel</h1>
            </div>
            <div className="container mt-1 rounded-3">
                    <div className="row">
                        <div className="col-2 border border-primary" style={{minHeight: 500}}>

                        </div>
                        <div className="col-10 border border-success" style={{minHeight: 500}}>
                            <div className='row p-2 justify-content-center'>

                             {
                                users.map((user,index)=>{                                    
                                    return <UserCard 
                                            key= {index}
                                            img={user.picture.large} 
                                            userName={user.name.first} 
                                            phone={user.phone} 
                                            email={user.email}/>
                                })
                             }   

                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AdminPanel;