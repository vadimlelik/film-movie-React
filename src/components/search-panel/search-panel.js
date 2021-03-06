import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }
    onUpdateSearch(e) {
        const term = e.target.value;
        this.props.onUpdateSearch(term)
        this.setState({
            term:term
        })
    }
    render() {
        return (
            <input
                onChange={this.onUpdateSearch}
                className='form-control search-input'
                type='text'
                placeholder='Поиск по записям'
            />
        )
    }
}
