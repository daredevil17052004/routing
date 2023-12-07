import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import {Routes, Route, Link,NavLink} from 'react-router-dom'
import styles from './components/styles.module.css'

function App() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.item}>
          <NavLink to='/'>Kavium ❤️</NavLink>
        </div>
        <div className={styles.nav}>
          <div>
            <NavLink to='/contacts' >Contacts</NavLink>
          </div>
          <div>
            <NavLink to='/about'>About</NavLink>
          </div>
        </div>
      </div> 


      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App
