import React from 'react';
import './App.css';
import logo from '../../logo.svg';
import stockData from '../Util/Stockdata.js'
import StockList from '../StockList/StockList.js'
import SearchBar from '../SearchBar/SearchBar.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stockList: []
    }

    this.searchStock = this.searchStock.bind(this)
  }

  searchStock(term, region) {
    stockData.search(term, region).then(stock => {
      this.setState({
        stockList: stock
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar stockSearch={this.searchStock} />
        <StockList stockArray={this.state.stockList} />
      </div>
    )
  }
}

export default App

// change region and stock option in future