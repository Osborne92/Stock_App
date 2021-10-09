import React from 'react'
import './Stock.css'

class Stock extends React.Component {
    render() {
        return (
            <div className='StockItem'>
                <div>
                   <h2>{this.props.stockInfo.shortName}</h2> 
                </div>
                <div>
                    <p>Symbol: {this.props.stockInfo.symbol}</p>
                    <p>Exchange: {this.props.stockInfo.exchange}</p>
                    <p>Quote Type: {this.props.stockInfo.quoteType}</p>
                    <p>Score: {this.props.stockInfo.score}</p>
                </div>
            </div>
        )
    }
}

export default Stock;