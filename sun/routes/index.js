var express = require('express');
var router = express.Router();
var data = require('../API/data.js');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'SUN Radio présente sa Dataviz' });
});

/* GETTERS FOR RESTFUL API DB */


router.get('/creneau/:start/:stop', function(req, res, next) {
    data.getCreneau(req.params.start, req.params.stop, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


// season : winter, spring, summer, autumn
// week : 0 week - 1 weekend
// start: start of  (0-23)
// end: end of intervalle hour : (0-23)
router.get('/creneau/:season/:week/:start/:end', function(req, res, next) {
    data.getCreneauSeasonWeekHour(req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/creneauM/:season/:week/:start/:end', function(req, res, next) {

    data.getMoodSeasonWeekHour("Nostalgique", req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{
            res.json(rows);
        }
    });
});

router.get('/today', function(req, res, next) {
    data.getToday(function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


router.get('/creneauMood/:season/:week/:start/:end', function(req, res, next) {
    var json = [];

    data.getMoodSeasonWeekHour("Cool",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{
            json.push({id:"Cool", value:rows[0].value});
        }
    });
    data.getMoodSeasonWeekHour("Nostalgique",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        if(err){res.json(err);}
        else{
            json.push({id:"Nostalgique", value:rows[0].value});
        }
    });
    data.getMoodSeasonWeekHour("Stimulante",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        json.push({id:"Stimulante", value:rows[0].value});
    });
    data.getMoodSeasonWeekHour("Agressive",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        json.push({id: "Agressive", value: rows[0].value});
    });
    data.getMoodSeasonWeekHour("Sentimentale",req.params.season, req.params.week, req.params.start, req.params.end, function(err, rows)
    {
        json.push({id:"Sentimentale", value:rows[0].value});
        res.json(json);
    });
});
router.get('/ThisWeekRock', function(req, res, next) {
    data.getThisWeekRock( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekAlternativeEtPunk', function(req, res, next) {
    data.getThisWeekAlternativeEtPunk( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekUrban', function(req, res, next) {
    data.getThisWeekUrban( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekElectronica', function(req, res, next) {
    data.getThisWeekElectronica( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


router.get('/ThisWeekJazz', function(req, res, next) {
    data.getThisWeekJazz( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekPop', function(req, res, next) {
    data.getThisWeekPop( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekNostalgique', function(req, res, next) {
    data.getThisWeekNostalgique( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/ThisWeekCool', function(req, res, next) {
    data.getThisWeekCool( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekStimulante', function(req, res, next) {
    data.getThisWeekStimulante( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekAgressive', function(req, res, next) {
    data.getThisWeekAgressive( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
router.get('/ThisWeekSentimentale', function(req, res, next) {
    data.getThisWeekSentimentale( function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});

router.get('/GenreCreneau4H/:numberOfCreneau', function(req, res, next) {
    data.getGenreCreneau4H(req.params.numberOfCreneau, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});


router.get('/MoodCreneau4H/:numberOfCreneau/:mood', function(req, res, next) {
    data.getMoodCreneau4H(req.params.mood, req.params.numberOfCreneau, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});



router.get('/getLast24', function(req, res, next)
{
    var alternatif = ['Alternative et punk'];
    var electro = ['Electronica'];
    var pop = ['Pop'];
    var rock = ['Rock'];
    var urban = ['Urban'];
    var jazz = ['Jazz'];
    var retour = [];

    var elt = ['Alternative et punk','Electronica','Pop','Rock','Urban', 'Jazz'];

    function trouve(genre, array)
    {
        for (var j=0 ; j<array.length;j++)
        {
            if (genre == array[j].id)
                return j;
        }
        return -1;
    }


    function proceed(rows)
    {
        for (var e in elt)
        {
            var el = trouve(elt[e],rows);
            if (el == -1)
            {
                switch(elt[e])
                {
                    case "Alternative et punk":
                        alternatif.push(0);
                        break;
                    case "Electronica":
                        electro.push(0);
                        break;
                    case "Pop":
                        pop.push(0);
                        break;
                    case "Rock":
                        rock.push(0);
                        break;
                    case "Urban":
                        urban.push(0);
                        break;
                    case "Jazz":
                        jazz.push(0);
                }
            }
            else
            {
                switch(elt[e])
                {
                    case "Alternative et punk":
                        alternatif.push(rows[el].value);
                        break;
                    case "Electronica":
                        electro.push(rows[el].value);
                        break;
                    case "Pop":
                        pop.push(rows[el].value);
                        console.log("pop"+pop)
                        break;
                    case "Rock":
                        rock.push(rows[el].value);
                        break;
                    case "Urban":
                        urban.push(rows[el].value);
                        break;
                    case "Jazz":
                        jazz.push(rows[el].value);
                }
            }
        }
    }

    var p = new Promise(function(resolve, reject)
    {
        data.getGenreCreneau4H(0, function(err, rows)
        {
            if(err){res.json(err);}
            else{
                console.log("p");
                proceed(rows);
                resolve();
            }
        });
    });

    var p1 = new Promise(function(resolve, reject)
    {
        data.getGenreCreneau4H(1, function(err, rows)
        {
            if(err){res.json(err);}
            else{
                proceed(rows);
                resolve();
            }
        });
    });

    var p2 = new Promise(function(resolve, reject)
    {
        data.getGenreCreneau4H(2, function(err, rows)
        {
            if(err){res.json(err);}
            else{
                proceed(rows);
                resolve();
            }
        });
    });

    var p3 = new Promise(function(resolve, reject)
    {
        data.getGenreCreneau4H(3, function(err, rows)
        {
            if(err){res.json(err);}
            else{
                proceed(rows);
                resolve();
            }
        });
    });


    var p4 = new Promise(function(resolve, reject)
    {
        data.getGenreCreneau4H(4, function(err, rows)
        {
            if(err){res.json(err);}
            else{
                proceed(rows);
                resolve();
            }
        });
    });

    var p5 = new Promise(function(resolve, reject)
    {
        data.getGenreCreneau4H(5, function(err, rows)
        {
            if(err){res.json(err);}
            else{
                proceed(rows);
                retour.push(alternatif);
                retour.push(electro);
                retour.push(pop);
                retour.push(rock);
                retour.push(urban);
                retour.push(jazz);
                resolve();
            }
        });
    });

    p.then(function() { return p1; })
        .then(function() { return p2; })
        .then(function() { return p3; })
        .then(function() { return p4; })
        .then(function() { return p5; })
        .then(function() { res.json(retour);});

});


router.get('/Cover/:artist/:titre', function(req, res, next)
{
 var url = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=b5763b483c7b63572a59804b2d18f9bc&artist="+req.params.artist+"&track="+req.params.titre+"&format=json"
request({
    url: url,
    json: true
}, function (error, res2, body) {

    if (!error && res2.statusCode === 200) {
        res.json(body) // Print the json response
    }
})


 });
router.get('/5LastGenre/:genre', function(req, res, next) {
    data.get5LastGenre(req.params.genre, function(err, rows)
    {
        if(err){res.json(err);}
        else{res.json(rows);}
    });
});
module.exports = router;