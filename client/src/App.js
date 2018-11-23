import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ClubList from './components/ClubsList';
import ClubModal from './components/ClubModal';
import SearchModal from './components/SearchModal';
import {Container} from 'reactstrap'; 
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FullListModal from './components/FullListModal';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
      <AppNavBar/>
      <Container>
      <Container>
      <SearchModal /> <ClubModal/> <FullListModal/>
      </Container>
        <ClubList/>
      </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
