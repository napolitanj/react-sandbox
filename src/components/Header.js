import React, {Component} from 'react'
import Button from './Button'


class Header extends Component {
    render() {
        const {title, onAdd} = this.props
        return (
            <header>
                <h1>{title}</h1>
                <Button color='green' text='Add New Task' clickFunction={onAdd}/>

            </header>
        )
    }
}

Header.defaultProps = {
    title: "Default title"
}

export default Header