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
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.set("twig options", {
    strict_variables: false
});

app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'public'));
/**
 * ========= DATABASE =========
 */
var quizdb_name = path.join(__dirname, 'quiz.db');
var exists = fs.existsSync(quizdb_name);
// Database init
var db = new sqlite3.Database(quizdb_name);
db.serialize(function(){
    db.run("PRAGMA foreign_keys = ON;");
    db.run("CREATE TABLE IF NOT EXISTS UTILISATEURS (" +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT," +
        "SEXE BOOLEAN NOT NULL," +
        "AGE INT NOT NULL," +
        "STNAZAIRE BOOLEAN NOT NULL" +
        ")");
    db.run("CREATE TABLE IF NOT EXISTS PROJETS (" +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT," +
        "NOM TEXT(60) NOT NULL" +
        ")");
    db.run("CREATE TABLE IF NOT EXISTS ESTIMATION_PROJET (" +
        "ID_PROJET INT NOT NULL," +
        "ID_UTILISATEUR INT NOT NULL," +
        "ESTIMATION INT NOT NULL," +
        "FOREIGN KEY(ID_PROJET) REFERENCES PROJETS(ID)," +
        "FOREIGN KEY(ID_UTILISATEUR) REFERENCES UTILISATEURS(ID)" +
        ")");
    db.run("CREATE TABLE IF NOT EXISTS NOTE_PROJET (" +
        "ID_PROJET INT NOT NULL," +
        "ID_UTILISATEUR INT NOT NULL," +
        "NOTE INT NOT NULL," +
        "FOREIGN KEY(ID_PROJET) REFERENCES PROJETS(ID)," +
        "FOREIGN KEY(ID_UTILISATEUR) REFERENCES UTILISATEURS(ID)" +
        ")");
});
db.close();
/**
 * ========= ROUTE =========
 */
/**
 *  Route to Quiz
 */
app.all('/quiz', function(req, res){
    res.render('quiz.html.twig');
});

/**
 *  --- BACKEND ---
 */
app.get('/projets/get/all', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.all("SELECT * FROM PROJETS", function(err, rows){
        res.json(rows);
    })
    db.close();
});

app.get('/projets/get/:id', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.all("SELECT * FROM PROJETS WHERE ID = ?", [req.params.id], function(err, rows){
        res.json(rows);
    })
    db.close();
});

app.get('/projets/add', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.serialize(function(){
        var stmt = db.prepare("INSERT INTO PROJETS (NOM) VALUES (?)");
        stmt.run(req.query.nom);
        stmt.finalize();
        res.send("OK");
    });
    db.close();
});

app.get("/utilisateurs/get/all", function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.all("SELECT * FROM UTILISATEURS", function(err, rows){
        res.json(rows);
    })
    db.close();
});

app.get("/utilisateurs/get/lastid", function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.get("SELECT ID as id FROM UTILISATEURS ORDER BY id DESC LIMIT 1", function(err, rows){
        res.json(rows);
    })
    db.close();
})

app.get('/utilisateurs/get/:id', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.all("SELECT * FROM UTILISATEURS WHERE ID = ?", [req.params.id], function(err, rows){
        res.json(rows);
    })
    db.close();
});

app.get('/utilisateurs/add', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.serialize(function(){
        var stmt = db.prepare("INSERT INTO UTILISATEURS (SEXE, AGE, STNAZAIRE) VALUES (?, ?, ?)");
        stmt.run(req.query.sexe, req.query.age, req.query.stnazaire);
        stmt.finalize();
        res.send("OK");
    });
    db.close();
});

app.get('/estimation/get/all', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.all("SELECT * FROM ESTIMATION_PROJET", function(err, rows){
        res.json(rows);
    })
    db.close();
})

app.get('/estimation/get/counted/:id', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.all("SELECT ESTIMATION AS x, COUNT(ESTIMATION) AS y FROM ESTIMATION_PROJET WHERE ID_PROJET = ? GROUP BY ESTIMATION ORDER BY x ASC", [req.params.id], function(err, rows){
        res.json(rows);
    })
    db.close();
})

app.get('/estimation/add', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.serialize(function(){
        var stmt = db.prepare("INSERT INTO ESTIMATION_PROJET (ID_PROJET, ID_UTILISATEUR, ESTIMATION) VALUES (?, ?, ?)");
        stmt.run(req.query.projet, req.query.utilisateur, req.query.estimation);
        stmt.finalize();
        res.send("OK");
    });
    db.close();
});

app.get('/note/get/all', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.all("SELECT * FROM NOTE_PROJET", function(err, rows){
        res.json(rows);
    })
    db.close();
})

app.get('/note/add', function(req, res){
    var db = new sqlite3.Database(quizdb_name);
    db.serialize(function(){
        var stmt = db.prepare("INSERT INTO NOTE_PROJET (ID_PROJET, ID_UTILISATEUR, NOTE) VALUES (?, ?, ?)");
        stmt.run(req.query.projet, req.query.utilisateur, req.query.note);
        stmt.finalize();
        res.send("OK");
    });
    db.close();
});

/**
 * Default route
 */
app.use(express.static(path.join(__dirname, 'public')));


/**
 * ========= EOF =========
 */
// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;
