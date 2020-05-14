import React, {Component} from 'react'

class EventBind extends Component{

    constructor(){
        super()

        this.state = {
            message: "Hello"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye!"
    //     })
    // }

    clickHandler = ()=>{
        this.setState({
            message:"Goddbye!"
        })
    }
    render(){
        
        return(
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler}>Click Me</button> */}
                <button onClick={this.clickHandler}>ClickMe</button>
            </div>
        )
    }
}

export default EventBind