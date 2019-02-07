
// creates a file with my name ' Lejla'

const fs = require('fs');

var first = {
    userName: 'Lejla',


};
var path = './user_' + first.userName + ',text';

var firstTxt = JSON.stringify(first);

 fs.writeFile(path, firstTxt, (err) => { 
     if(err)
     console.log(err);
    else{
        console.log('Filen är sparad');
    }

 });