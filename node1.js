var index=0;
var count=0;
var y1=0,y2=0, y3=0, y4=0,y5=0, y6=0, y7=0, y8=0, y9=0, y10=0, y11=0, y12=0, y13=0, y14=0, y15=0, y16=0;
var arr_year=[];
var header="";
var counts={};
var count=0;
var total=0;
var objTemp={};
var newline="";
var currLine;
var arr=[];
var new_arr=[];
var j;
var f=0;
var fs= require('fs');
var input= fs.createReadStream('file/Crimes_-_2001_to_present.csv');
// var write= fs.createWriteStream('file/crimenew20.json', {'flag':'a'}); //here 'a' means that the file will be opened in append mode
var rl= require('readline').createInterface(
  {
    input: input,
    terminal:false
  }
);
  rl.on('line', function(line) {
   //console.log("hie");
    if(index===0)
  {
    console.log("headers saved");
     header= line.split(","); //headers saved
     index=1;
   }
   else
   {
      
//     var len= line.length;
// //console.log(line);
// for(var j=0; j<len; j++)
// {
//  var x= line.indexOf("\"");
//  //var y= line.indexOf("\"", line.indexOf("\"")+1);
//      // console.log(y);
//      // if(line.substring(x)== ',')
//      var comma= line.substring(x).length;
//      for(var i=0; i<comma ;i++)
//      {
//        if(line.charAt(i)==",")
//        {
//        newline = line.replace("," , " ");
//      }
//      else
//      {
//        newline=line.replace(",", ",");
//      }
       
//    }
// }

 
        var newline = line.replace(/"[^"]+"/g, function(v) { 
        return v.replace(/,/g, ' ');
       });

    for(j=0; j<header.length; j++)
     {
      //console.log("hi");
       if(header[j]=="Description")
       {
         var currLine= newline.split(",");
         for(var i=0; i<currLine.length; i++)
         {
           if(currLine[i]=="$500 AND UNDER" || currLine[i]=="OVER $500")
           {
              

              objTemp= {
                 Description: currLine[i],
                Year: currLine[17],
              };


             //  arr.push(objTemp);
             //  if(f==0)
             //    {
             //   fs.appendFile('file/crimenew21.json',JSON.stringify(objTemp));
             //   f=-1;
             // }
             //   else
             //   fs.appendFile('file/crimenew21.json',","+JSON.stringify(objTemp));
             //   objTemp={};
             arr_year.push(objTemp.Year);
            
            }
          }
        }
      }
      objTemp.Year=objTemp.Year+1;



     // console.log(arr_year);
    //console.log(arr_year.length);
    // if(objTemp.Description=="$500 AND UNDER")
    // {




      // for(var j=0; j<arr_year.length; j++)
      //   {
      //               //console.log(arr_year.length);

      //       var num= arr_year[j];
      //      // console.log(num);
      //       switch(num)
      //       {
      //         case '2001':
      //         y1++;
      //         break;
      //         case '2002':
      //         y2++;
      //         break;
      //         case '2003':
      //         y3++;
      //         break;
      //         case '2004':
      //         y4++;
      //         break;
      //         case '2005':
      //          y5++;
      //         break;
      //         case 2006:
      //        y6++;
      //         break;
      //         case 2007:
      //          y7++;
      //         break;
      //         case 2008:
      //          y8++;
      //         break;
      //         case 2009:
      //          y9++;
      //         break;
      //         case 2010:
      //          y10++;
      //         break;
      //         case 2011:
      //          y11++;
      //         break;
      //         case 2012:
      //          y12++;
      //         break;
      //         case 2013:
      //          y13++;
      //         break;
      //         case 2014:
      //          y14++;
      //         break;
      //         case 2015:
      //          y15++;
      //         break;
      //         case 2016:
      //         {
      //         y16++;
      //         break;
      //         }
      //       }
      // } 
//}


      
}
});
                

            

              var finalObj={'$500 AND UNDER':{'2001':y1,'2002':y2, '2003': y3,'2004':y4,'2005': y5,'2006':y6,'2007': y7,'2008': y8,'2009':y9,'2010':y10,'2011':y11,'2012':y12,'2013':y13,'2014':y14,'2015':y15, '2016':y16}} ;
   // new_arr.push(finalObj);
              if(f==0)
                {
               fs.appendFile('file/crimenew22.json',JSON.stringify(finalObj));
               f=-1;
             }
               else
               fs.appendFile('file/crimenew22.json',","+JSON.stringify(finalObj));
               finalObj={};
  

  

// console.log(count[2016]);

