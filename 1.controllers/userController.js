let MongoClient = require('mongodb').MongoClient //M harus besar
let Mongo = require('mongodb')
let {url} = require('../3.database')

module.exports = {
    getAllUsers : (req, res) => {
        MongoClient.connect(url, (err, client)=>{ //Mongo connect ke server kita, perlu callback function
            let collection = client.db('latihan_mongo_jc10').collection('users') //client artinya client yg terhubung, client bebas namanya
            //collection adalah collection yg akan kita gunakan
            collection.find({}).toArray((err, result) => { //({})artinya select all, harus dikasih toArray, hasil dari dibuatnya
            //array tersebut akan disend
                if(err) throw err
                console.log(result)
                res.send(result)
            })
        })
    },

    getUserById : (req, res) => {
        MongoClient.connect(url, (err, client) => {
            let collection = client.db('latihan_mongo_jc10').collection('users')
            collection.findOne({_id : Mongo.ObjectID('5d9c1666d6f6c75969564ec0')}, (err, result) => {
                if(err) throw err
                console.log(result)
                res.send(result)
                
            })
        })
    },

    insertData : (req, res) => {
        let data = {
            username : req.body.username,
            pwd : req.body.password
        }

        MongoClient.connect(url, (err, client)=>{
            let collection = client.db('latihan_mongo_jc10').collection('users')
            collection.insertOne(data, (err, result) => {
                if(err) throw err
                console.log(result)
                res.send(result)
            })
        })
    }
}