import React, {Component} from 'react'

class Button extends Component {
    render() {
        const {text, color, clickFunction} = this.props

        return (
            <button onClick={clickFunction} style={{backgroundColor:color}}>{text}</button>
        )
    }
}

Button.defaultProps = {
    color: 'grey',
    text: 'default'
}

export default Button
