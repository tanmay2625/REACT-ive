import React, { Component } from 'react';
import Menu from './MenuComponents'
import '../App.css';
import DishDetails from './DishDetailsComponents';
import Home from './HomeComponents'
import {Switch, Redirect, Route, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import {TransitionGroup,CSSTransition} from "react-transition-group"
import {actions} from 'react-redux-form'
import {postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback} from '../redux/ActionCreators'
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
    postComment : (dishId, author, rating, comment) => dispatch(postComment(dishId,author,rating,comment)),
    fetchDishes : ()=>{dispatch(fetchDishes())},
    resetFeedbackForm : ()=>{dispatch(actions.reset('feedback'))},
    fetchComments:()=>{dispatch(fetchComments())},
    fetchPromos:()=>{dispatch(fetchPromos())},
    fetchLeaders:()=>dispatch(fetchLeaders()),
    postFeedback:(feedback)=>dispatch(postFeedback(feedback))
  }
}

class Main extends Component {

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
    this.props.fetchLeaders();
  }

  render(){
    const Homepage=()=>{
      return(
        <Home 
              leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]} 
              promotion={this.props.promotions.promotions.filter((promotion)=>promotion.featured)[0]} 
              dishesLoading={this.props.dishes.isLoading}
              dishesError={this.props.dishes.error}
              dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosError={this.props.promotions.error}
              leadersLoading={this.props.leaders.isLoading}
              leadersError={this.props.leaders.error}
        />
        )
    }

    const DishWithId=({match})=>{
      return(
        <DishDetails dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId))[0]}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        isLoading={this.props.dishes.isLoading}
        error={this.props.dishes.error}
        commentsError={this.props.comments.error}
        postComment={this.props.postComment}
        />
      )
    }

    return (
      <div>
        <div className="content">
          <Header/>
          <div className="container">
            <TransitionGroup>
              <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch>
                    <Route path="/home" component={Homepage}/>
                    <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} error={this.props.dishes.error}/>}/>
                    <Route exact path="/aboutus" component={()=>< About leaders={this.props.leaders} isLoading={this.props.leaders.isLoading} error={this.props.leaders.error}/>}/>
                    <Route path="/menu/:dishId" component={DishWithId}/>
                    <Route exact path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>}/>
                    <Redirect to="/home"/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
}

export default withRouter(connect(mapStatetoProps,mapDispatchToProps)(Main));