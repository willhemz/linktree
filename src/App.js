import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from './Home'
import Allfood from './All'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Shakes from './Shakes'
import Navbar from './Navbar'
import Header from './Header'

const App = () => {

  return <Router>
    <Header />
    <main className='container-fluid p-5'>
      <section className="row">
        <article className="col-12 col-lg-3 g-3 mb-5 h-100">
          <h1 className='mb-3 fs-1 text-center'>Meal Shop</h1>
          {/* <div className="img-1 mb-5"></div> */}
          <Navbar />
        </article>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/all'>
            <Allfood />
          </Route>
          <Route path='/breakfast'>
            <Breakfast />
          </Route>
          <Route path='/lunch'>
            <Lunch />
          </Route>
          <Route path='/shakes'>
            <Shakes />
          </Route>
        </Switch>
      </section>
    </main>
  </Router>
}

export default App
