var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = 80;
var serviceSchema = require('./schema/service');

mongoose.connect('mongodb:27017/serviceregistry');

var Service = mongoose.model('Service', serviceSchema);

var options = {
    host: `localhost:${PORT}`
};

app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
    Service.find(function(err, services) {
        res.json({
            services
        });
    });
});

var parseToService = function parseToService(plainObj) {
    if (plainObj.title == null ||
        plainObj.url == null ||
        plainObj.service == null ||
        plainObj.version == null) {
        return null;
    }

    return {
        title: plainObj.title,
        url: plainObj.url,
        service: plainObj.service,
        version: plainObj.version
    };
}

router.post('/new', function(req, res) {
    var parsedServiceObject = parseToService(req.body);

    if (parsedServiceObject == null) {
        throw new Error("Unable to parse the provided object to an service");
    }

    var newService = new Service(parsedServiceObject);

    newService.save(function(err, serviceInstance) {
        if (err) throw new Error(err);
    });
    res.json(newService);
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log('startet service');
});

