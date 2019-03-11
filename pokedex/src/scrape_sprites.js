const request = require('request');
const fs = require('fs');

//https://stackoverflow.com/questions/12740659/downloading-images-with-node-js
var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        if (!err) {
            // console.log('content-type:', res.headers['content-type']);
            // console.log('content-length:', res.headers['content-length']);
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        } else {
            console.log(err);
            return null;
        }
    });
  };

for (var i=1; i<650; i++) {
    let padded_pokedex_num;
    if (i.toString().length != 3) {
        let num_arr = i.toString().split('');
        let length = num_arr.length;
        let num_zeros = 3 - length;
        for (var j=0; j<num_zeros; j++) {
            num_arr.unshift('0');
        }
        padded_pokedex_num = num_arr.toString().replace(/,/g,"");
    } else {
        padded_pokedex_num = i.toString();
    }

    if (!fs.existsSync(`images/${padded_pokedex_num}.gif`)) {
        console.log(`${padded_pokedex_num} is missing.`); 
        download(`https://sprites.pokecheck.org/i/${padded_pokedex_num}.gif`, `images/${padded_pokedex_num}.gif`, function(){console.log(`completed: ${padded_pokedex_num}`)});
    }

}