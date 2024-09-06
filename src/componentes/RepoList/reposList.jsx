import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const RepoList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000)
        })
    }, [nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <img className={styles.loading} src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" />
            ) : (
                <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.listItemName}>
                        <b>Nome: </b> 
                        {repositorio.name}
                    </div>
                    <div className={styles.listItemLanguage}>
                        <b>Linguagem: </b>
                        {repositorio.language}
                    </div>
                    <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
            </ul>
            ) }
            
        </div>
    )
}

export default RepoList;