import { useState, useEffect } from 'react';

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [gitRepos, setGitRepos] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const newError = await data.json();
          throw newError.message;
        }
        const results = await response.json();
        setGitRepos(results);
      } catch (e) {
        setErrors(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, [url]);

  return { gitRepos, isLoading, errors };
}

export default useFetch;
