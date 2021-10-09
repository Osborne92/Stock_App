import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            region: ''
        }

        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleRegionChange = this.handleRegionChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    handleRegionChange(event) {
        this.setState({
            region: event.target.value
        })
    }

    handleSearch(event) {
        this.props.stockSearch(this.state.term, this.state.region)
        event.preventDefault()
    }


    render() {
        return (
            <div className='SearchBar'>
                <div className='SearchBar-Fields'>
                    <h1>Stock Search</h1>
                    <input onChange={this.handleTermChange} placeholder='Enter Stock' />
                    <input onChange={this.handleRegionChange} placeholder='Enter Country' />
                    <div className='submit-button'>
                        <a onClick={this.handleSearch}>Search</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar