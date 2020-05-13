import React, {Component} from "react"
import {Card, CardImg, CardText, CardTitle, Label, CardSubtitle, CardBody, Breadcrumb, BreadcrumbItem, Button, Row, Col, Modal, ModalHeader, ModalBody} from "reactstrap"
import {Link} from "react-router-dom"
import {LocalForm, Control, Errors} from "react-redux-form"

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

const required = (val) => val && val.length;

class DishDetails extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen : false,
        }
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen,
        })
    }

    handleSubmit(values){
        this.toggleModal();
        alert("Current state is :" + JSON.stringify(values));
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
            <React.Fragment>
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
                    <Button color="danger" className="mt-5" onClick={this.toggleModal}>Submit Comment</Button>
                </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={10}>
                                <Control.select model=".rating" name="rating" id="rating" className="form-control" validators={{required}}>
                                    <option selected disabled>--Select--</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                <Errors className="text-danger" model=".rating" show="touched" messages={{required:"This is a required field!"}}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" md={2}>Name</Label>
                            <Col md={10}>
                                <Control.text model=".name" name="name" id="name" className="form-control" validators={{required}}/>
                                <Errors className="text-danger" model=".name" show="touched" messages={{required:"This is a required field!"}}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={2}>Comment</Label>
                            <Col md={10}>
                                <Control.textarea model=".comment" rows="6" name="comment" id="comment" className="form-control" validators={{required}}/>
                                <Errors className="text-danger" model=".comment" show="touched" messages={{required:"This is a required field!"}}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{offset:"2", size:"10"}} >
                                <Button type="submit" value="submit" color="primary">Send Comment</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </React.Fragment>
        )

    }

}

export default DishDetails