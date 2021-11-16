import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Material from './pages/Material/Material';
import BOMList from './pages/BOMList/BOMList';
import BOMAdd from './pages/BOMAdd/BOMAdd';
import ProjectList from './pages/ProjectList/ProjectList';
import ProjectAdd from './pages/ProjectAdd/ProjectAdd';
import ProduceList from './pages/ProduceList/ProduceList';
import ProduceAdd from './pages/ProduceAdd/ProduceAdd';
import AddQuantity from './pages/AddQuantity/AddQuantity';
import SaleList from './pages/SaleList/SaleList';
import SaleAdd from './pages/SaleAdd/SaleAdd';
import AS from './pages/AS/AS';

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
            <Route exact path="/BOMList">
              <BOMList />
            </Route>
            <Route exact path="/BOMAdd">
              <BOMAdd />
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
            <Route exact path="/AddQuantity">
              <AddQuantity />
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
            <Route exact path="/AS">
              <AS />
            </Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
