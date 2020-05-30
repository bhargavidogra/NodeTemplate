NodeJS Assignment - 1


   Create an ecommerce WebApi using NodeJS (ExpressJs). Implement Nodejs Authentication
   with JWT Token and Refresh token. Once the user authenticated with the server, use should
   be able to add book, delete book, update book and get books and implement same crud
   operations for author. Please consider following practices while developing WebApi.


   1) For Data persistence use mongodb.
   2) For Validation use Joi.
   3) For Logging use Pino.



      Book Schema: -
         id: guid,
         title: string,
         price: integer,
         page_count: integer,
         image_url: string,
         description: string
         author: guid,
         comments: array of strings



     Author Schema: -
         id: guid,
         name: string,
         books: array,
         image_url: string,
         description: string