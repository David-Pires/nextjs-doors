import styles from "../styles/Jogo.module.css";
import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import LINK from "next/link"

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(4, 3));

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) => {
            setPortas(atualizarPortas(portas, novaPorta));
          }}
        />
      );
    });
  }
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
       {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <LINK href="/">
          <button >Reiniciar Jogo</button>
        </LINK>
      </div>
    </div>
  );
}
