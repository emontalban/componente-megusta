import { useState } from "react";

// Este contador es un input que incrementa y decrementa con dos botones

const Contador=()=>{

  const [cuenta, setContador] =useState(0);

  const incrementar=()=>{
    setContador(cuenta+1);
  };
  const decrementar=()=>{
    setContador(cuenta-1);
  }
  return(
    <div>
      <button onClick={decrementar}>-</button>
      <input type="text" value={cuenta} size="1" style={{textAlign:"right"}}></input>
      <button onClick={incrementar}>+</button>
    </div>
  );
}
export default Contador;