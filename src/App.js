import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import mainbuilder from './containers/mainbuilder/mainbuilder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <Layout header={props.header} sidebar={props.sidebar} footer={props.footer} loginpage={props.loginpage}>
      <Switch>
        <Route path="/" component={mainbuilder} />
      </Switch>
    </Layout>
  )
}

const mapStatetoProps = state => {
  return {
    header: state.ui_red.header,
    sidebar: state.ui_red.sidebar,
    footer: state.ui_red.footer,
    loginpage: state.ui_red.loginpage
  };
}

export default withRouter(connect(mapStatetoProps)(App));

// export default App