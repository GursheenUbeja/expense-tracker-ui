import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExpenseDistribution from './components/ExpenseDistribution';
import MonthlyReport from './components/MonthlyReport';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/expenseDistribution" component={ExpenseDistribution} />
      <Route exact path="/monthlyReport" component={MonthlyReport} />
    </Switch>
 </Router>,
  document.getElementById('root')
);