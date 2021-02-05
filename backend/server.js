const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 4000, url = '', configurations = {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true

};

const app = express ( );

app.use( cors( ) );
app.use( bodyParser.json( ) );

app.get( '/', function ( request, response) {

    response.send(`
    
        <html>
        
            <body>

                <style>

                    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

                    * {

                        font-family: 'Montserrat';
                        font-size: 1.2rem;
                    }
                </style>
              
                <span>Server is working</span>
            </body>
        </html>
    `);
});

app.use( '/graphql', graphqlHTTP(

    {
        graphiql: true,
        schema
    }
));

mongoose.connect( url, configurations , function ( ) {

    console.log('Connected to Database');
    app.listen( port, ( ) => console.log('Server started') );

}).catch(

    err => console.log( err )
)