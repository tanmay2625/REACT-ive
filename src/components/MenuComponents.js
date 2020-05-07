import React, {Component} from "react"
import {Card, CardTitle, CardImg, CardImgOverlay} from "reactstrap"
import {Media} from "reactstrap"

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish : null,
        }
    }

    renderDetails(dish){
        if(dish==null){
            return(
                <div></div> 
            )
        }
        return(
            <Media className="mt-5">
                <Media object src={dish.image} height="500"></Media>
                <Media body className="ml-4">
                    <Media heading><h3 style={{color:"red"}} ><strong>{dish.name}</strong></h3></Media>
                        <p>{dish.description}</p>
                </Media>
            </Media>
        )
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
                <div className="row">
                    {this.renderDetails(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}

export default Menu