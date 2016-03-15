var express = require('express'),
  router = express.Router(),
  fs = require('fs');

function parseLatLng(s) {
  var d, m, sec, dir;

  function hexToDec(d, m, s, dir) {
    var toRet = (d + m / 60 + s / (60 * 60));
    if (dir === 'W') {
      return toRet * -1;
    }
    return toRet;
  }
  d = parseFloat(s.slice(1, s.indexOf('°')).replace('.', ','));
  m = parseFloat(s.slice(s.indexOf('°') + 1, s.indexOf("'")).replace('.', ','));
  sec = parseFloat(s.slice(s.indexOf("'") + 1, s.length - 2).replace('.', ','));
  dir = s[0];
  return hexToDec(d, m, sec, dir);
}
// Api Routes
/* Middle ware */
router
  .use(function(req, res, next) {
    console.log('Something is happening.');
    next();
  });

/* api/say-hello */
router
  .route('/say-hello')
  .get(function(req, res) {
    res.json({
      message: 'Hello, Im your son!'
    });
  });
router
  .route('/puertos-rio-magdalena')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/puertos-rio-magdalena.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/zonas-francas')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/zonas-francas.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/aeropuertos')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/aeropuertos.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/estaciones')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/estaciones-tren.json', 'utf8', function(err, data) {
      var toRet;
      if (err) throw err;
      toRet = JSON.parse(data);
      for (var i = toRet.length - 1; i >= 0; i--) {
        if (toRet[i].lat.indexOf('N') > -1) {
          toRet[i].lat = parseLatLng(toRet[i].lat);
          toRet[i].lng = parseLatLng(toRet[i].lng);
        }
      };

      res.json(toRet);
    });
  });
router
  .route('/estaciones-de-peaje')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/estaciones-de-peaje.json', 'utf8', function(err, data) {
      var toRet;
      if (err) throw err;
      toRet = JSON.parse(data);
      for (var i = toRet.length - 1; i >= 0; i--) {
        if (toRet[i].lat.indexOf('N') > -1) {
          toRet[i].lat = parseLatLng(toRet[i].lat);
          toRet[i].lng = parseLatLng(toRet[i].lng);
        }
      };

      res.json(toRet);
    });
  });
router
  .route('/puertos-maritimos')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/puertos-maritimos.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/basculas')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/basculas.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/estaciones-de-servicio')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/estaciones-de-servicio.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/parqueaderos')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/parqueaderos.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/zonas-aduaneras')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/zonas-aduaneras.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/centros-logisticos')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/centros-logisticos.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/puntos-peligrosos')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/puntos-peligrosos.json', 'utf8', function(err, data) {
      var toRet;
      if (err) throw err;
      toRet = JSON.parse(data);
      for (var i = toRet.length - 1; i >= 0; i--) {
        if (toRet[i].lat.indexOf('N') > -1) {
          toRet[i].lat = parseLatLng(toRet[i].lat);
          toRet[i].lng = parseLatLng(toRet[i].lng);
        }
      };

      res.json(toRet);
    });
  });
router
  .route('/hoteles')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/hoteles.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/restaurantes')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/restaurantes.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/talleres')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/talleres.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/parques-industriales')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/parques-industriales.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
router
  .route('/semaforos')
  .get(function(req, res) {
    fs.readFile(__dirname + '/data/semaforos.json', 'utf8', function(err, data) {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
/* Generic Root */
router
  .get('/', function(req, res) {
    res.json({
      message: 'Api running FTW'
    });
  });

module.exports = router;

