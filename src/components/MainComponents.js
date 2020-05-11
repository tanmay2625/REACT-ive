import React, { Component } from 'react';
import Menu from './MenuComponents'
import {DISHES} from '../hardcode/dishes'
import {COMMENTS} from '../hardcode/comments'
import {LEADERS} from '../hardcode/leaders'
import {PROMOTIONS} from '../hardcode/promotions'
import '../App.css';
import DishDetails from './DishDetailsComponents';
import Home from './HomeComponents'
import {Switch, Redirect, Route} from "react-router-dom"
import Header from './HeaderComponent';
import Footer from './FooterComponents';
import Contact from './ContactComponents'
import About from './AboutComponents'

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      dishes : DISHES,
      comments : COMMENTS,
      leaders : LEADERS,
      promotions : PROMOTIONS,
    }
  }

  render(){
    const Homepage=()=>{
      return(
        <Home 
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]} 
              promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]} 
              dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        />
        )
    }

    const DishWithId=({match})=>{
      return(
        <DishDetails dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId))[0]}
        comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}
        />
      )
    }

    return (
      <div>
        <Header/>
        <div className="container">
          <Switch>
              <Route path="/home" component={Homepage}/>
              <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
              <Route exact path="/aboutus" component={()=>< About leaders={this.state.leaders}/>}/>
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route exact path="/contactus" component={Contact}/>
              <Redirect to="/home"/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
  
}

export default Main;