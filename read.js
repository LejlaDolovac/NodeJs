const http = require('http');
const fs = require('fs');



// reads the files to the server

var readMe = fs.readFileSync('user_Dolovac,text', 'utf8'); 
console.log('Yey it works');

var file2 = fs.readFileSync('user_Lejla,text', 'utf8');
console.log('Yey this works to');


// creates a server
const webbserver = http.createServer((req, res) => {
     res.write(readMe);
     res.write(file2); 
     res.end();
});

webbserver.listen(3000,() =>{
    console.log('Working');
});

var options = {
    encoding : 'utf8',
    flag: 'r'
};


// reads both data
fs.readFile('user_Dolovac,text',options, (err1, data1) => {
    fs.readFile('user_Lejla,text', options, (err2, data2) => {
        if(err1 || err2){
            console.log(err1 || err2);

        }  
        
        // Here i create another file with the data from above
        let data = data1 + ' ' + data2;
        fs.writeFile('fullName.txt', data, (err) => {
            console.log('Yey you did it Homieee');
        });

    });
});