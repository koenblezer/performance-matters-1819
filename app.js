const express = require('express');
const request = require('request');
const app = express();
const port = 3000;
//
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/overview', function(req, res) {
  request('https://api.giphy.com/v1/gifs/search?q=tree&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=50', function (err, requestRes, output){
    if (err) {
      // We got an error
      res.send(err);
    } else {
      // Render the page using the 'posts' view and our body data
      res.render('overview', {
        title: 'Header title',
        overviewtitle: 'Overview', // We use this for the page title, see views/partials/head.ejs
        overview_output: output
      });
    }
  });
});

app.get('/detail/:id', function(req, res) {
request(`https://api.giphy.com/v1/gifs?ids=${req.params.id}&api_key=JbB7Jd0sog3jHtYdb3woTkONWQYNSTfp&limit=50`, function (err, requestRes, output){
		if (err) {
			// We got an error
			res.send(err);
		} else {
			// Render the page using the 'posts' view and our body data
			res.render('detail', {
				title: 'Detail', // We use this for the page title, see views/partials/head.ejs
				detail_output: output
			});
		}
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
