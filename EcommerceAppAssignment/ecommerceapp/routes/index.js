var express = require('express');
var router = express.Router();

const nav =[
  {link:'/Books',title:'books'},
{link:'/admin/addbooks',title:'Add Books'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
    nav :[{link:'/books',title:'books'},
    {link:'/authors',title:'authors'},
    {link:'/books/addbook',title:'addbooks'},
    {link:'/authors/addauthors',title:'addauthors'}],
    title:'Ecommerce App'
});
});

module.exports = router;
