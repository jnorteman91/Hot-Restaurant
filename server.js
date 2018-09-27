const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let data = {
    reservations: [],
    waitlist: []
};

visitorCount = 0;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/tables", function (req, res) {
    res.json(data.reservations);
});

app.get("/api/waitlist", function (req, res) {
    res.json(data.waitlist);
});


app.get("/api/", function (req, res) {
    res.json(data);
});

app.get("/api/clear", function (req, res) {
    data.reservations.length = 0;
    data.waitlist.length = 0;
    res.json(data);
});

app.get("/api/visitors", function (req, res) {
    res.json(visitorCount);
});

app.post("/api/new", function (req, res) {
    var tableData
})