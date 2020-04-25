import React, { useEffect, lazy, suspense, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shoppage/shop.components'))
const ContactPage = lazy(() => import('./pages/contactpage/contact.components'))
const Signing = lazy(() => import('./pages/signing/signing.components'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

const App = ({ checkUserSession, currentUser }) => {
  
  useEffect( () => {
    checkUserSession()
  }, [checkUserSession])

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = false;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

    return (      
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/sign-in'
              render={() =>
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                    <Signing />
                  )
              }
            />
          </Suspense>  
        </ErrorBoundary>      
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);