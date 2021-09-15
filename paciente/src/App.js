import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import store from './Store';
import Routers from './routers';
import Header from './Componentes/Header/header';



export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </Provider>
  )
}