// creates a file with my lastname ' dolovac'

const fs = require('fs');

var last = {
    userName: 'Dolovac',


};
var path = './user_' + last.userName + ',text';

var lastTxt = JSON.stringify(last);

 fs.writeFile(path, lastTxt, (err) => { 
     if(err)
     console.log(err);
    else{
        console.log('Filen är sparad');
    }

 });