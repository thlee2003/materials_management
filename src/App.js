import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Res from './pages/Res/Res';
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
import AddAS from './pages/AddAS/AddAS';
import AddASMTL from './pages/AddASMTL/AddASMTL';

import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';

import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['rememberText']);
  const [cookies2, setCookie2, removeCookie2] = useCookies(['rememberText2']);
  const [userName, setUserName] = useState('');
  const [department, setDepartment] = useState('');
  const [bool, setBool] = useState(true);
  useEffect(() => {
    if (cookies.rememberText !== undefined) {
      setUserName(cookies.rememberText);
      setDepartment(cookies2.rememberText2);
    }
  }, []);
  if (bool) {
    setCookie('rememberText', userName, { path: '/' });
    setCookie2('rememberText2', department, { path: '/' });
  } else {
    removeCookie('rememberText');
    removeCookie2('rememberText');
  }
  const logout = () => {
    setBool(!bool);
    window.location.replace('/');
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login setUserName={setUserName} setDepartment={setDepartment} />
          </Route>
          <Route exact path="/res">
            <Res />
          </Route>
          <div>
            <div className="header" style={{ justifyContent: 'space-between' }}>
              <Logo />
              <Menu />
              <Profile userName={userName} department={department} logout={logout} />
            </div>
            <Route exact path="/Main">
              <Main />
            </Route>
            <Route exact path="/Material">
              <Material userName={userName} />
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
              <ProduceAdd userName={userName} />
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
            <Route exact path="/AddAS">
              <AddAS />
            </Route>
            <Route exact path="/AddASMTL">
              <AddASMTL />
            </Route>
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
