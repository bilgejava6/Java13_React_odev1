
function Buttons(props){
    /**
     *  Javascript bir değişkene fonksiyondan dönen değer
     * yani fonksiyon atanabilir.
     * ArrowFunction
     */
    const SelectButton = ()=>{
        switch (props.buttontipi) {
            case 'primary':
                return <button type="button" class="btn btn-primary">Primary</button> 
            case 'danger':
                return <button type="button" class="btn btn-danger">Danger</button> 
            case 'info':
                return <button type="button" class="btn btn-info">Info</button> 
            default: 
                return <button type="button" class="btn btn-success">Success</button>                    
        }
    };
    return(
        SelectButton()   
    )
}

export default Buttons;