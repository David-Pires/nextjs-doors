import styles from "../../../styles/Jogo.module.css";
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import LINK from "next/link"
import { useRouter } from 'next/router'

export default function Jogo() {
  const router = useRouter()
  
  const [valido, setValido] = useState(false);
  const [portas, setPortas] = useState([]);


  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >=1 && temPresente <= portas
    
    setValido(qtdePortasValida && temPresenteValido)
}, [portas, router.query.portas, router.query.temPresente]) 

  useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente
      setPortas(criarPortas(portas, temPresente))
  }, [router?.query])    


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
       {valido ? 
       renderizarPortas() :
       <h2>A porta com presente deve estar dentro do número de portas existentes</h2>
       }
      </div>
      <div className={styles.botoes}>
        <LINK href="/" passHref>
          <button >Reiniciar Jogo</button>
        </LINK>
      </div>
    </div>
  );
}
