import React, {Component} from 'react'
import Button from './Button'

//check name of clickFunction - onClick is better but for the sake of understanding props / it's not reserved
class Header extends Component {
    render() {
        const {title, onAdd, showAdd} = this.props
        return (
            <header>
                <h1>{title}</h1>
                <Button color={showAdd? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} clickFunction={onAdd}/>

            </header>
        )
    }
}

Header.defaultProps = {
    title: "Default title"
}

export default Header