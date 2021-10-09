const stockData = {
    search(term, region) {
        return fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${term}&region=${region}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "" // API can be found at https://rapidapi.com/principalapis/api/stock-data-yahoo-finance-alternative/
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.quotes) {
                    console.log(data.quotes)
                    return data.quotes.map(quoteData => ({
                        exchange: quoteData.exchange,
                        longName: quoteData.longname,
                        quoteType: quoteData.quoteType,
                        score: quoteData.score,
                        shortName: quoteData.shortname,
                        symbol: quoteData.symbol,
                        typeDisp: quoteData.typeDisp
                    }))
                } else {
                    alert('no quotes found!')
                    console.log('no quotes found!')
                }
            })
    }
}

export default stockData