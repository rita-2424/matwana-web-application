const express = require('express');
const morgan = require('morgan');


// express app
const app = express();

//register view engine
app.set('view engine', 'ejs');


//listen for requests
app.listen(3001);

//middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'));





app.get('/', (req, res) => {
  const blogs = [
   {title: 'Matwana is a software that will improve the transport sector', snippet: 'Everyone in the transport sector eats from the plate'},
   {title: 'Does your matatu sometimes take long to fill up?', snippet: '..."road is one of the cheapest means of transport used by most people to get to their various destinations." '},
   {title: 'Do you sometimes get late while going to work or school?', snippet: 'You might get very inconvinienced, right?'},
  ];
  res.render('index', { title: 'Home', blogs });
});



app.get('/about', (req, res) => {

    //res.send('<p>about page</p>');
    res.render('about', { title: 'About' });  
  });
  
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' });
});

app.get('/login', function(req, res) {
  res.render('login', {
    signUpUrl: '/signup',
    authenticated: req.isAuthenticated(),
    indexUrl: '/'
  });
});

app.get('/sign up', function(req, res) {
  res.render('sign up', {
    signUpUrl: '/sign up'
  });
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });    
});

