import { useState } from "react";


const Megusta=()=>{

  const [cuenta, setContador] =useState(0);

  const incrementar=()=>{
    setContador(cuenta+1);
  };
  
  return(


     <div className="fila">
          <span onClick={incrementar} className="corazon">❤️</span>
          <span className="numeroLikes" >
        {cuenta}
      </span>
        </div>
  );
}
export default Megusta;