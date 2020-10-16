import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MainSection from './pages';
import MainSection2 from './pages/step2';
import Footer from './components/Footer';





function App() {
  //Router Component has been added for routing purposes
  return (
    <Router>
      <body>
        <div className="wrapper">
          <MainHeader />
          <Switch>
            <Route exact path="/" component={MainSection} />
            {/* Route to mainSection */}
            <Route path="/step2" component={MainSection2} />
            {/* Route to mainSection2 */}
          </Switch>
        </div>
        <Footer />
      </body>
    </Router>
  );
}

export default App;
