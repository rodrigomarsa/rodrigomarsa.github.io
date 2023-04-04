import { Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppContext from './context/AppContext';
import About from './pages/About';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';

function App() {
  const { dark } = useContext(AppContext);

  return (
    <div className={ dark ? 'App__Dark' : 'App__Light' }>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/repos" component={ Repositories } />
        <Route exact path="/front" component={ Frontend } />
        <Route exact path="/back" component={ Backend } />
        <Route exact path="*" component={ PageNotFound } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
