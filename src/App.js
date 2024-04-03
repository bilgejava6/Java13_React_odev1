import React, {useState} from 'react';

function App() {
  /**
   * Bir değer tanımlamak
   * Dikkat!!!!!
   * bir bileşen içinde değerler değiştiğinde sayfaya etki edebilmesi için o sayfanın
   * render edilmesi gereklidir. Bu nedenle sayfada değişiklik olup olmadığını takip 
   * etmek üzere React Hook larını kullanırız.
   */
  /**
   * render yapayım mı?
   * const sayi = 56;
   * 
   * function getSayi(){
   *  return sayi;
   * }
   * 
   * function setSayi(sayi){
   *  this.sayi = sayi;
   *  render yap
   * }
   * 
   */  
  const [getSayi, setSayi] = useState(10);

  const arttir = ()=>{
    setSayi(getSayi+1);
    console.log("Sayıyı arttırdım");
  }
  const azalt = () =>{
    setSayi(getSayi-1);
    console.log("Sayıyı azalttım");
  }
  console.log("sayfa render oldu");
  return (
    <>
      <div className="contanier-fluid text-bg-danger" style={{ minHeight: 150}}>

      </div>
      <div className="container mt-1 rounded-3">
            <div className="row">
                <div className="col-2 border border-primary" style={{minHeight: 500}}>

                </div>
                <div className="col-10 border border-success" style={{minHeight: 500}}>
                    <div>
                      <button onClick={arttir}> + </button> <br />
                      <button onClick={azalt}> - </button>                      
                    </div>
                    <h1>{getSayi}</h1>
                </div>
            </div>
      </div>
    </>
    
  );
}

export default App;
