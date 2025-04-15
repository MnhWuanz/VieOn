import React from 'react'
import MainRouter from './routers/mainRouter';
import "./App.css";
import Header  from './components/header';
const App = () => {
  return (
    <>
      <Header/>
      <MainRouter/>
    </>
  )
}
export default App;

