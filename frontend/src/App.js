import React, { Component } from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import {Route} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import MainSection from './pages';
import MainSection2 from './pages/step2';
import Footer from './components/Footer';
import Login  from './components/accounts/Login';
import PrivateRoute from './components/common/PrivateRoute'
import store from './store';
import { loadUser } from './actions/auth';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    //Router Component has been added for routing purposes
    return (
      <Provider store={store}>
      <Router>
        <body>
          <div className="wrapper">
            <MainHeader />
            <Switch>
              <PrivateRoute exact path="/" component={MainSection} />
              {/* Route to mainSection */}
              <PrivateRoute path="/step2" component={MainSection2} />
              {/* Route to mainSection2 */}

              {/* Login  */}
              <Route path="/login" component={Login} />
            </Switch>
          </div>
          <Footer />
        </body>
      </Router>
      </Provider>
    );
  }
}

export default App;
