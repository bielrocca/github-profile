import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou');

        return () => {
            console.log('O componente finalizou');
        }
    }, [])

    useEffect(() => {
        console.log('O nome foi alterado')
    }, [nome]);

    const alteraNome = (evento)  => {

        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota 1" min={0} max={10} onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota 2" min={0} max={10} onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota 3" min={0} max={10} onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario