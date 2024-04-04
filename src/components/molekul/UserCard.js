import { useState } from "react";

function UserCard(props){

    const [buttonText, setButtonText]= useState("+");

    const changeButton = ()=>{
        if(buttonText==='+')
            setButtonText("-");
        else
            setButtonText("+");
    }

    console.log('card render');

    return(
        <div className='col-3 border border-secondary rounded-2 m-2' style={{minHeight:250}}>
        <div className='row rounded-top-2 border-bottom border-secondary' style={{position:'relative',minHeight:100, backgroundColor:'#f9f9f9'}}>
            <img src={props.img} 
            style={{
                position: 'absolute',
                borderRadius:'50%', 
                width:'50%', 
                height:'100px',
                left: '25%',
                top: '30%',
                border: '0.5px solid black',
                padding: '2%'
                }} />
        </div>
        <div className='row'>
            <div className='col'>
                <div className='row mt-5 text-center'>
                    <h5>{props.userName}</h5>
                </div>
                <div className='row mt-1 text-center'>
                    <h6>{props.phone}</h6>
                </div>
                <div className='row mt-1 text-center'>
                    <h6>{props.email}</h6>
                </div>
                <div className="row mt-1 text-center">
                    <button onClick={changeButton}>{buttonText}</button>
                </div>
                
            </div>
        </div>                                        
    </div>

    )
}


export default UserCard;