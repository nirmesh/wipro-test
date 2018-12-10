const rp = require('request-promise');
const cheerio = require('cheerio');
var request = require('request');
var urls = require('sitemap-urls'); 
var express = require('express');

var url = "https://wiprodigital.com/";
var app     = express();
const port = 3005

//app.get('/scrape', (req, res)=> {
  app.get('/', (req, res) => res.send('Hello World!'))
    request(url, function (error, response, body) {
      if (!error) {
        var $ = cheerio.load(body)
        
        var title = $('title').text();
        var content = $('body').text();
        
        console.log('URL: ' + url);
        console.log('Title: ' + title);
              console.log('content: ' + content);

      }
      else {
        console.log("We’ve encountered an error: " + error);
      }
    });
//});
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))


request('https://wiprodigital.com/page-sitemap.xml', function (error, response, html) {
  var sitemap = html;
    var results = urls.extractUrls(sitemap);
   if(results) {
      console.log(results.length);
    for(i = 0; i < results.length; i++) {
        sitemap = results[i]
        console.log(sitemap)

    }
  }                                                                               
});


