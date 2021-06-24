let express = require('express')
let server = express()

let port = 3000

let numbers = {
}

// Resource für Nummer
server.get('/number', function (req, res) {

    // Abgefragte ID auslesen
    let requestedID = req.query.ID;

    // Test ob für die ID bereits eine Zufallszahl exisitert
    let rand;
    if(numbers[requestedID] == undefined) {
        rand = Math.floor(Math.random() * 100)
        numbers[requestedID] = rand
    } else {
        rand = numbers[requestedID]
    }

    let resource = {
        ID: requestedID,
        randomNumber: rand
    }

    res.send(resource)
})

server.get('/', function(req, res) {
    res.send("Server is running.")

})

// Server starten
server.listen(port, function () {
    console.log(`Example server listening at http://localhost:${port}`)
})