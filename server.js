var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
 'article-one': {
    title: 'Article one | gauri venkatachalapathi',
    heading: 'Article one',
    date: 'August 23, 2017',
    content: `<p>This is the content for my article one. This is the content for my article one. This is the content for my article one. This is the content for my article one.
        </p>
        <p>This is the content for my article one. This is the content for my article one. This is the content for my article one. This is the content for my article one.
        </p>
        <p>This is the content for my article one. This is the content for my article one. This is the content for my article one. This is the content for my article one.
        </p>`
},
 'article-two': {
     title: 'Article two | gauri venkatachalapathi',
    heading: 'Article two',
    date: 'August 24, 2017',
    content: `<p>This is the content for my article two.
        </p>
       `
     
 },
 'article-three' : {title: 'Article one | gauri venkatachalapathi',
    heading: 'Article one',
    date: 'August 23, 2017',
    content: `<p>This is the content for my article three. This is the content for my article three. </p>`}
};

function createtemplate (data) {
    
var title= data.title;
var date= data.date;
var heading= data.heading;
var content= data.content;

var htmltemplate = `
<html>
<head>
    <title>
   ${title}
</title>
<meta name="viewport" content="width= devicewidth, initial-scale=1" />

<link href="/ui/style.css" rel="stylesheet" />

</head>

<body>
   <div class="container">
        <div> 
    <a href="/"> HOME </a>
    </div>
    <hr/>
    <h3> 
    ${heading}
    </h3>
    <div> 
 ${date}
    </div>
    <div>
        ${content}
    </div>
    </div>
</body>

</html>

`;
 return htmltemplate;
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articlename', function (req, res) {
    var articlename = req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
