var fs=require('fs');

var r=require('readline');

var index=0;
var obj_true={};
var obj_false={};

var arr=[]


var rd=r.createInterface(
  {
  input: fs.createReadStream('file/Crimes_-_2001_to_present.csv'),
});
rd.on('line', function(line)
{
	// var newline = line.replace(/"[^"]+"/g, function(v) { 
 //        return v.replace(/,/g, ' ');
 //       });
  var newline=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  if (index == 0)
  {
    index++;
    
  }
   else
   {
    
       if(newline[5]=="ASSAULT" && newline[8]=="TRUE" && !obj_true[newline[17]])
       {
         obj_true[newline[17]]=1;
       }
       else if(newline[5]=="ASSAULT" && newline[8]=="TRUE")
       {
         obj_true[newline[17]]=obj_true[newline[17]]+1;
       }
      else if(newline[5]=="ASSAULT" && newline[8]=="FALSE" && !obj_false[newline[17]])
      {
          obj_false[newline[17]]=1;

      }
       else if(newline[5]=="ASSAULT" && newline[8]=="FALSE")
       {
          obj_false[newline[17]]=obj_false[newline[17]]+1;
        }
  }
});
rd.on('close', function()
{
  for (var k in obj_true)
  
  {
    var obj_fin=
    {
      "Arrests": obj_true[k],
      "NonArrests": obj_false[k],
      "Year": k
    };
      arr.push(obj_fin);
    
  }

    fs.writeFileSync('file/assault.json',JSON.stringify(arr),'utf8',function(err){console.log(err);});
    console.log("completed");

});