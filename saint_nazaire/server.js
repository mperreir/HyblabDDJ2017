'use strict';

/**
 * ========= LIBRARIES =========
 */
var express = require('express');
var path = require('path');
var twig = require('twig');
var app = express();
var fs = require("fs");
var sqlite3 = require("sqlite3").verbose();

app.set("twig options", {
    strict_variables: false
});

app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'public'));
/**
 * ========= DATABASE =========
 */
var quizdb_name = "saint_nazaire/quiz.db";
var exists = fs.existsSync(quizdb_name);
// Database init
var db = new sqlite3.Database(quizdb_name);
db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS REPONSES (" +
        "ID_PROJET INT NOT NULL," +
        "ESTIMATION INT NOT NULL," +
        "NOTE INT NOT NULL" +
        ")");
})
db.close();
/**
 * ========= ROUTE =========
 */
/**
 * Default route
 */
app.use(express.static(path.join(__dirname, 'public')));
/**
 *  Route to Quiz
 */
app.all('/quiz', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    var yolo = "";
    db.each("SELECT * FROM REPONSES", function(err, row){
        yolo += "> " + row.ID_PROJET + " | " + row.ESTIMATION + " | " + row.NOTE + "<br>";
    }, function(){
        console.log("["+yolo+"]");
        res.render('index.html.twig', {
            hello: yolo
        });
        db.close();
    });
});

/**
 *  Adding information to database
 */
app.post('/quiz/addline/:projet/:estimation/:note', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.serialize(function() {
        var stmt = db.prepare("INSERT INTO REPONSES VALUES (?,?,?)");
        stmt.run(req.params.projet, req.params.estimation, req.params.note);
        stmt.finalize();
    });
    db.close();
    res.send("Ajout OK !");
});

app.get('/quiz/mean/:project', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.get("SELECT avg(ESTIMATION) as average FROM REPONSES WHERE ID_PROJET = ?", req.params.project, function(err, row){
        res.json({average: row.average});
    });
    db.close();
})


/**
 * ========= EOF =========
 */
// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;