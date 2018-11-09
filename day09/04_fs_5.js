var fs = require('fs');

// fs.stat('./day09.txt',function(err,stats){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(stats.isFile());
//   }
// });


//同步
var stats= fs.statSync('./day09.txt');
console.log(stats);