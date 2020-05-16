import React, { Component } from 'react';
import Menu from './MenuComponents'
import '../App.css';
import DishDetails from './DishDetailsComponents';
import Home from './HomeComponents'
import {Switch, Redirect, Route, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import {actions} from 'react-redux-form'
import {addComment, fetchDishes} from '../redux/ActionCreators'
import Header from './HeaderComponent';
import Footer from './FooterComponents';
import Contact from './ContactComponents'
import About from './AboutComponents'

const mapStatetoProps = (state) => {
  return {
    dishes:state.dishes,
    promotions:state.promotions,
    leaders:state.leaders,
    comments:state.comments,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addComment : (dishId, author, rating, comment) => dispatch(addComment(dishId,author,rating,comment)),
    fetchDishes : ()=>{dispatch(fetchDishes())},
    resetFeedbackForm : ()=>{dispatch(actions.reset('feedback'))}
  }
}

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
  }

  render(){
    const Homepage=()=>{
      return(
        <Home 
              leader={this.props.leaders.filter((leader)=>leader.featured)[0]} 
              promotion={this.props.promotions.filter((promotion)=>promotion.featured)[0]} 
              dishesLoading={this.props.dishes.isLoading}
              dishesError={this.props.dishes.error}
              dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
        />
        )
    }

    const DishWithId=({match})=>{
      return(
        <DishDetails dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId))[0]}
        comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}
        isLoading={this.props.dishes.isLoading}
        error={this.props.dishes.error}
        addComment={this.props.addComment}
        />
      )
    }

    return (
      <div>
        <Header/>
        <div className="container">
          <Switch>
              <Route path="/home" component={Homepage}/>
              <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} error={this.props.dishes.error}/>}/>
              <Route exact path="/aboutus" component={()=>< About leaders={this.props.leaders}/>}/>
              <Route path="/menu/:dishId" component={DishWithId}/>
              <Route exact path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
              <Redirect to="/home"/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
  
}

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Main));