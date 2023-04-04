import { useState } from 'react';
import { HiTrash } from 'react-icons/hi';

function FormFilter({ gitRepos }) {
  const [search, setSearch] = useState('');
  const [selectedLang, setSelectedLang] = useState([]);

  const languages = gitRepos.map((item) => item.language)
    .filter((notNull) => notNull);
  const uniqueLanguages = [...new Set(languages)];

  const filteredName = gitRepos.filter(
    (el) => el.name.includes(search),
  );

  const filteredNameNLang = filteredName.filter((el) => {
    if (selectedLang.length === 0) {
      return true;
    }
    return selectedLang.includes(el.language);
  });

  return (
    <>
      <form>
        <h1>Repositórios GitHub</h1>
        <label htmlFor="filtros">
          <input
            type="text"
            name="filtros"
            placeholder="Buscar"
            onChange={ (e) => setSearch(e.target.value) }
          />
        </label>
        <select
          name="languages"
          id="languages"
          onChange={ ({ target }) => target.value !== ''
            && setSelectedLang([...selectedLang, target.value]) }
        >
          <option value="">Todos</option>
          {
            uniqueLanguages.map((language) => (
              <option key={ language } value={ language }>
                {language}
              </option>
            ))
          }
        </select>
      </form>
      <div className="filters">
        {selectedLang.map((lang) => (
          <div key={ lang }>
            <HiTrash onClick={ () => setSelectedLang([]) } />
            {lang}
          </div>
        ))}
      </div>
      {
        filteredNameNLang.map((repo) => (
          <div key={ repo.id } className="repo">
            <p>{repo.name}</p>
            <a
              className="Repo-link"
              href={ repo.html_url }
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.html_url}
            </a>
          </div>
        ))
      }
    </>
  );
}

export default FormFilter;
