import React, {Component} from 'react'
import Button from './Button'


class Header extends Component {
    render() {
        const whenClicked = (e) => {
            console.log(e)
        }
        return (
            <header>
                <h1>{this.props.title}</h1>
                <Button color='green' text='Add'/>
                <Button color='blue' text='Subtract'/>
                <Button color='red' text='Multiply'/>
                <Button clickFunction={whenClicked} />

            </header>
        )
    }
}

Header.defaultProps = {
    title: "Default title"
}

export default Header