import React, {Component} from "react"

function printDate(date){
    const year=parseInt(date.slice(0,4),10);
    const month=parseInt(date.slice(5,7),10);
    const day=parseInt(date.slice(8,10));
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return day + " " + months[month-1] + ", " + year ;
}

class DishDetails extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        const dish=this.props.selectedDish;
        if(dish==null)return(<div></div>)
        const comments=dish.comments.map((comment)=>{
            return(
                    <ul className="list-unstyled">
                        <h5>{comment.comment}</h5>
                        <p className="text-right">-- <i>{comment.author}, {printDate(comment.date)}</i></p>
                    </ul>
            )
        })
        return(
            <div className="row">
                <div className="col-12 col-md-5 mt-5">
                    <div className="card" style={{backgroundColor:"black"}}>
                        <img class="card-img-top" src={dish.image} alt={dish.name}></img>
                        <h3 className="card-header" style={{color:"red"}}><strong>{dish.name}</strong></h3>
                        <hr style={{backgroundColor:"white", height:"1px"}}/>
                        <h5 className="card-body text-white">{dish.description}</h5>
                    </div>
                </div>
                <div className="col-12 col-md-5 mt-5">
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