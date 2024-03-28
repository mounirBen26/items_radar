const cors = require('cors')
const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
require('dotenv').config();
// const username = "haceneBen"
// const password = "Peugeot208#"
const PORT = 8000
const app = express()
app.use(cors())

mongoose.connect(process.env.MONGO_DB)
    .then(()=>console.log('Successfully connected to the db'))
    .catch((error)=>{
        console.error(error)
    })

//crateing schema
const dealSchema = mongoose.Schema({
    pos:Number,
    title:String,
    price:Number,
    newPrice:Number,
    dealDiscount:Number,
    url:String,
    url_image:String,
    rating:Number
})
const Deal = mongoose.model('Deal',dealSchema)


app.get('/deals', async (req, res)=>{
    const allDeals = await Deal.find({})
    console.log(await allDeals)
    res.send(allDeals)
})

app.get('/deals', async (req, res) => {
    try {
        const body = {
            "source": "amazon_search",
            "query": "deal of the day",
            "domain": "com",
            "parse": true,
            "pages": 1
        }
        const response = await axios.post("https://realtime.oxylabs.io/v1/queries", body, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + Buffer.from(`${username}:${password}`).toString("base64")
            }
        })
        const data = response.data
        const results = data.results[0].content.results.organic
        const filtredDeals = results.filter(deal => deal.price_strikethrough)
        const sortedByBestDeal = filtredDeals.sort((b, a) =>
            ((a.price_strikethrough - a.price) / a.price_strikethrough * 10) -
            ((b.price_strikethrough - b.price) / b.price_strikethrough * 10
            ))
        res.send(sortedByBestDeal)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`)
})
