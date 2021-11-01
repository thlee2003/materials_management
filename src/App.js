import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Material from './pages/Material/Material';
import BOM_List from './pages/BOM_List/BOM_List';
import BOM_Add from './pages/BOM_Add/BOM_Add';
import ProjectList from './pages/ProjectList/ProjectList';
import ProjectAdd from './pages/ProjectAdd/ProjectAdd';
import ProduceList from './pages/ProduceList/ProduceList';
import ProduceAdd from './pages/ProduceAdd/ProduceAdd';
import SaleList from './pages/SaleList/SaleList';
import SaleAdd from './pages/SaleAdd/SaleAdd';

import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <div>
            <div className="header" style={{ justifyContent: 'space-between' }}>
              <Logo />
              <Menu />
              <Profile />
            </div>
            <Route exact path="/Main">
              <Main />
            </Route>
            <Route exact path="/Material">
              <Material />
            </Route>
            <Route exact path="/BOM_List">
              <BOM_List />
            </Route>
            <Route exact path="/BOM_Add">
              <BOM_Add />
            </Route>
            <Route exact path="/ProjectList">
              <ProjectList />
            </Route>
            <Route exact path="/ProjectAdd">
              <ProjectAdd />
            </Route>
            <Route exact path="/ProduceList">
              <ProduceList />
            </Route>
            <Route exact path="/ProduceAdd">
              <ProduceAdd />
            </Route>
            <Route exact path="/SaleList">
              <SaleList />
            </Route>
            <Route exact path="/SaleAdd">
              <SaleAdd />
            </Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
