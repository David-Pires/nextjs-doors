import { useState } from 'react';
import Porta from '../components/Porta.tsx'
import PortaModel from '../model/porta.ts'

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  const [p2, setP2] = useState(new PortaModel(2))

  return (
    <div style={{display:"flex"}}>
      <Porta porta={p1}/>
      <Porta porta={p2}/>

          </div>
  );
}
