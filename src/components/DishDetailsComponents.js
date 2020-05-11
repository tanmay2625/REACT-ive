import React, {Component} from "react"
import {Card, CardImg, CardText, CardTitle, CardSubtitle, CardBody, Breadcrumb, BreadcrumbItem} from "reactstrap"
import {Link} from "react-router-dom"

function printDate(date){
    const year=parseInt(date.slice(0,4),10);
    const month=parseInt(date.slice(5,7),10);
    const day=parseInt(date.slice(8,10));
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return day + " " + months[month-1] + ", " + year ;
}

function RenderCard({item}){
    return(
        <Card>
            <CardImg object src={item.image}></CardImg>
            <CardBody style={{backgroundColor:"black"}}>
                <CardTitle style={{color:"red"}}><h3><strong>{item.name}</strong></h3></CardTitle>
                {item.designation ? <CardSubtitle style={{color:"blue"}}><h4><strong>{item.designation}</strong></h4></CardSubtitle> : null }
                <hr style={{backgroundColor:"white", height:"1px"}}/>
                <CardText className="text-white"><h5>{item.description}</h5></CardText>
            </CardBody>
        </Card>
    )
}

class DishDetails extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        const dish=this.props.dish;
        if(dish==null)return(<div></div>)
        const comments=this.props.comments.map((comment)=>{
            return(
                    <ul className="list-unstyled">
                        <h5>{comment.comment}</h5>
                        <p className="text-right">-- <i>{comment.author}, {printDate(comment.date)}</i></p>
                    </ul>
            )
        })
        return(
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>                
                <div className="col-12 col-md-5 mt-5 mb-5">
                    <RenderCard item={dish}/>
                </div>
                <div className="col-12 col-md-5 mt-5 mb-5 ml-md-5">
                    <div className="card">
                        <h3 className="card-header bg-warning" style={{color:"blue"}}><strong>Comments</strong></h3>
                        <div className="card-body" style={{backgroundColor:"skyblue"}}>
                            {comments}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default DishDetails