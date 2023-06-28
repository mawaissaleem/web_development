import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
   pageSize=10;
   state={
    changeprogress:0
  }
  SetProgress = (changeprogress) =>{
    this.setState({
      changeprogress:changeprogress
    })
  }
  render() {
    return (
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.changeprogress}
        
      />
        <NavBar />
        {/* <News setProgress={this.SetProgress} country={"us"} category={"general"} pageSize={this.pageSize} /> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={this.SetProgress} key="general" country={"us"} category={"general"} pageSize={this.pageSize} />}/>
          <Route exact path="/sports" element={<News setProgress={this.SetProgress} key="sports" country={"us"} category={"sports"} pageSize={this.pageSize} />}/>
          <Route exact path="/health" element={<News setProgress={this.SetProgress} key="health" country={"us"} category={"health"} pageSize={this.pageSize} />}/>
          <Route exact path="/entertainment" element={<News setProgress={this.SetProgress} key="entertainment" country={"us"} category={"entertainment"} pageSize={this.pageSize} />}/>
          <Route exact path="/science" element={<News setProgress={this.SetProgress} key="science" country={"us"} category={"science"} pageSize={this.pageSize} />}/>
          <Route exact path="/technology" element={<News setProgress={this.SetProgress} key="technology" country={"us"} category={"technology"} pageSize={this.pageSize} />}/>
          <Route exact path="/business" element={<News setProgress={this.SetProgress} key="business" country={"us"} category={"business"} pageSize={this.pageSize} />}/>
          <Route exact path="/home" element={<News setProgress={this.SetProgress} key="home" country={"us"} category={"general"} pageSize={this.pageSize} />}/>
            
          
        </Routes>
      </BrowserRouter>

    )
  }
}

