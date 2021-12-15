import React from "react";
class Button extends React.Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () => {
        this.setState(
            {
                count : this.state.count + 12
            }
        )
    }

    render() {
        return (
            <div>
                <button class="btn btn-secondary btn-lg" onClick = {this.addCounter}>Spam to shoot webs!</button>
                <p>Power level = {this.state.count}</p>
            </div>
        )
    }
}

export default Button