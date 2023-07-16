import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const [gitUserData, setGitUserData] = useState(null);

  useEffect(() => {
    const fetchData = async (username) => {
      try {
        const data = await fetch(`https://api.github.com/users/${username}`);
        if (!data.ok) {
          const newError = await data.json();
          throw newError.message;
        }
        const json = await data.json();
        setGitUserData(json);
      } catch (e) {
        setErrors(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData('rodrigomarsa');
  }, []);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  if (errors) {
    return <h1>{errors}</h1>;
  }

  const { avatar_url: avatarUrl, bio, location, name } = gitUserData;

  return (
    <div className="Home">
      <h1>{`Olá, eu sou o ${name}, moro em ${location} e sou ${bio}`}</h1>
      <h2>
        Esse portfólio está consumindo a API do GitHub para buscar minhas
        informações pessoais e meus repositórios.
        Ficou curioso em saber como? Me chame para batermos um papo.
      </h2>
      <img src={ avatarUrl } alt={ name } width="200" />
    </div>
  );
}

export default Home;
