var fs=require('fs');
var r=require('readline');

var rd=r.createInterface(
  {
  input: fs.createReadStream('../csv/Crimes_-_2001_to_present.csv'),// to read file
});

var heading=[];// store headings
var count=0;
var obj={},obj2={};// create objects to store values to the keys
var final_array=[]// final array in which the objects have to be pushed
rd.on('line', function(line)// read line wise
{
  var value=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); // split the line comma wise ignoring the commas which are inside the string
  if (count == 0)
  {
    heading =value;
    count=count+1;
  }
  else
  {
          if(value[5] =="THEFT" && value [6]=="OVER $500" && !obj[value[17]]) // check if the object for a prticular year is already there
          {
            obj[value[17]]=1;// if no then create the object
          }
          else if(value[5] =="THEFT" && value [6]=="OVER $500")
          {
            obj[value[17]]=obj[value[17]]+1; // if the object is already created then increase the counter by one
          }
          else if(value[5] =="THEFT"  && value [6]=="$500 AND UNDER" &&!obj2[value[17]])
          {
              obj2[value[17]]=1;
          }
          else if(value[5] =="THEFT"  && value [6]=="$500 AND UNDER")
          {
            obj2[value[17]] =obj2[value[17]]+1;
          }

  }
});

rd.on('close',function()
{
  for (var k in obj)
  {

    var json={"OVER $500":[],"$500 AND UNDER":[],"year":[],} // create the final array
    // assign values to the keys
    json["OVER $500"]=obj[k];
    json["$500 AND UNDER"]=obj2[k];
    json["year"]=k;
    //push values into the final array
    final_array.push(json);
}
fs.writeFileSync('../json/theft.json',JSON.stringify(final_array),'utf8',function(err){console.log(err);});// write it to the file
  console.log("done");
});
