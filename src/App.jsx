import { useState } from 'react'

import Perfil from './componentes/Perfil/Perfil'
import Formulario from './componentes/Formulario';
import RepoList from './componentes/RepoList/reposList';

import './global.css'

function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  // const [reposEstaVisivel, setReposEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario} />
        <RepoList nomeUsuario={nomeUsuario} />
        </>
      )}
      
      {/* {formularioEstaVisivel && (
        <Formulario/>
        )*/}

        {/* <button onClick={() => setReposEstaVisivel(!reposEstaVisivel)} type='button' >Abrir Repositórios</button> */}
    </>
  )
}

export default App
