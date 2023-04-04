import React from 'react';
import FormFilter from '../components/FormFilter';
import useFetch from '../hooks/useFetch';

function Repositories() {
  const { gitRepos, errors } = useFetch('https://api.github.com/users/rodrigomarsa/repos');

  if (!gitRepos) {
    return <h1>Carregando...</h1>;
  }

  if (errors) {
    return <h1>{errors}</h1>;
  }

  return (
    <div className="Repositories">
      <FormFilter gitRepos={ gitRepos } />
    </div>
  );
}

export default Repositories;
