import React, {Component} from "react"
import {Card, CardTitle, CardImg, CardImgOverlay} from "reactstrap"
import DishDetails from './DishDetailsComponents'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish : null,
        }
    }

    selectDish(dish){
        this.setState({
            selectedDish : dish
        });
    }

    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 ml-1 mt-5 ">
                    <Card key={dish.id} onClick={
                        () => this.selectDish(dish)
                    }>
                        <CardImg object src={dish.image}></CardImg>
                        <CardImgOverlay>
                            <CardTitle><h3 style={{color:"red"}} ><strong>{dish.name}</strong></h3></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetails selectedDish={this.state.selectedDish}/>
            </div>
        )
    }
}

export default Menu