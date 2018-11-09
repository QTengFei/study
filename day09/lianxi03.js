var fs = require('fs');

fs.readdir('./a',function(err,files){
  if(err){
    console.log(err);
  }else{
    // console.log(files);
    //异步循环导致结果出问题
    /* for(key in files){
      console.log(files[key]);
      fs.stat('./a/'+files[key],function(err,stats){
        if(stats.isFile()){
          console.log(files[key]+"是文件");
        }else{
          console.log(files[key]+"是文件夹");
        }
      })
    } */

    var arr1 = [];
    var arr2 = [];
    //递归
    (function a(i){
      //先判定递归结束的条件
      if(i==files.length){  //当i与数组长度一样,说明遍历结束了
        console.log("文件有:"+arr1);
        console.log("文件夹有:"+arr2);
        return;
      }
      //遍历没有结束,检查判断每一个元素的状态
      
      fs.stat('./a/'+files[i],function(err,stats){
        if(err){
          console.log(err);
          return;
        }
        if(stats.isFile()){
          
          // console.log(files[i]);
          arr1.push(files[i]);
        }else{
          // console.log(files[i]);
          arr2.push(files[i]);

        }
        
        a(++i);//自调
      });
    })(0)
    
  }

});

