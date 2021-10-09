import React from 'react'
import './StockList.css'
import Stock from '../Stock/Stock.js'

class StockList extends React.Component {
    render() {
        return (
            <div className='StockList-Container'>
            <div className='StockList'>
                {this.props.stockArray.map(stockP => {
                    return <Stock stockInfo={stockP} />
                })}
            </div>
            </div>
        )
    }
}

export default StockList