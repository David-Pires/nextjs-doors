import { useState } from "react";
import Porta from "../components/Porta.tsx";
import { atualizarPortas } from '../functions/portas.ts';
import { criarPortas } from '../functions/portas.ts';
import PortaModel from "../model/porta.ts";

export default function Home() {
     const [portas, setPortas] = useState(criarPortas(4, 3))

    function renderizarPortas() {
      return portas.map(porta => {
        return <Porta key={porta.numero} value={porta} onChange={novaPorta => {
        setPortas( atualizarPortas(portas, novaPorta))  
         
        }} />
      })
    }

  return (
    <div style={{ display: "flex"}}>             
      {renderizarPortas()}
    </div>
    )
  }

