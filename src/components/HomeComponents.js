import React from "react"
import {Loading} from './LoadingComponents'
import {Card, CardImg, CardText, CardTitle, CardSubtitle, CardBody} from "reactstrap"
import { baseUrl } from "../hardcode/baseUrl";
import { FadeTransform } from "react-animation-components"

function RenderCard({item, isLoading, error}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (error) {
        return(
                <h4>{error}</h4>
        );
    }
    else 
        return(
            <FadeTransform
            in transformProps={{
                exitTransform : 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg object src={baseUrl+item.image}  alt={item.name}></CardImg>
                    <CardBody style={{backgroundColor:"black"}}>
                        <CardTitle style={{color:"red"}}><h3><strong>{item.name}</strong></h3></CardTitle>
                        {item.designation ? <CardSubtitle style={{color:"blue"}}><h4><strong>{item.designation}</strong></h4></CardSubtitle> : null }
                        <hr style={{backgroundColor:"white", height:"1px"}}/>
                        <CardText className="text-white"><h5>{item.description}</h5></CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )
}

function Home(props){
    return(
        <div className="row mt-5 mb-5 align-items-start">
            <div className="col-12 col-md ml-2">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} error={props.dishesError}  />
            </div>
            <div className="col-12 mt-4 mt-md-0 col-md ml-2 ">
                <RenderCard item={props.promotion} isLoading={props.promosLoading} error={props.promosError}/>
            </div>
            <div className="col-12 mt-4 mt-md-0 col-md ml-2">
                <RenderCard item={props.leader} isLoading={props.leadersLoading} error={props.leadersError}/>
            </div>
        </div>
    )
}

export default Home