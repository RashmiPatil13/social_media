import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Header from './Components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
         
        <Header/>
         <Routes>
         <Route exact path="/" element={<Home/>} />
        <Route exact path="/item/:id" element={<Detail/>} />
         </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
