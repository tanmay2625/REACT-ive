import React, {Component} from "react"
import {Card, CardTitle, CardImg, CardImgOverlay, BreadcrumbItem, Breadcrumb} from "reactstrap"
import {Link} from "react-router-dom"

class Menu extends Component{
    

    render(){
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 ml-1 mt-5 ">
                    <Card key={dish.id}>
                        <CardImg object src={dish.image}></CardImg>
                        <CardImgOverlay>
                            <CardTitle><Link to={`/menu/${dish.id}`}><h3 style={{color:"red"}} ><strong>{dish.name}</strong></h3></Link></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>                
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}

export default Menu