import { useState } from "react";
import Porta from "../components/Porta.tsx";
import PortaModel from "../model/porta.ts";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));
  const [texto, setText] = useState("...");


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>  
    <input type="text" value={texto} onChange={e => setTexto(e.target.value)}/> 
        <Porta value={p1} /> 
    </div>
  )
}
