var express = require('express');
var request = require('request');

var router = express.Router();

username = "arshad",
password = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC",
url = "https://cryptic-dawn-8136.herokuapp.com/",
auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

var username = 'arshad',
    password = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVC',
    url = 'http://' + username + ':' + password + '@cryptic-dawn-8136.herokuapp.com';

/* GET home page. */
request({url: url}, function (error, response, body) {
   // Do more stuff with 'body' here
});


router.get('/', function(req, res, next) {

    request({
    url: url, //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'GET', //Specify the method  
    headers: { //We can define headers too
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    }
    }, function(error, response, body){
      if(error) {
          res.render('index', { title: 'Express', data: []});
      } else {
          res.render('index', { title: 'Express', data: JSON.parse(body) });
      }

});

	

});

router.get('/newtodo', function(req, res) {
    res.render('newtodo', { title: 'Add New Todo to the list' });
});

router.post('/addtodo', function(req, res) {
	
  var newtodo = req.body.newtodo;

  request({
	    url: url, //URL to hit
	    qs: {from: 'blog example', time: +new Date()}, //Query string data
	    method: 'POST',
	    //Lets post the following key/values as form
	    form: {
	        name: newtodo
	        //color: 'green'
	    }
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {
	        console.log(response.statusCode, body);
	        res.redirect('http://localhost:3000');
      }
	       

  });

});
module.exports = router;
