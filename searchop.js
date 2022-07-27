




 function get(){

let v = document.getElementById('name').value;

 var url =`https://www.omdbapi.com/?s=${v}&apikey=c270bb6c`;
// ajax{


    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send(  );

   // console.log(xmlHttp.responseText);

    var re = JSON.parse(  xmlHttp.responseText);


    console.log( re.Search.length);

    var me=re.Search;
    console.log( me);
me.forEach(tt);
var index="";
function tt(index){
console.log(index.Title);

document.querySelector('.result').innerHTML+=`<h1>Titie : ${index.Title} </h1><br><img src="${index.Poster}"><hr>`

}
 
 }
  
    


    //document.querySelector(".result").innerHTML+=` <h1>Movie Name " ${re.Title} And <img src="${re.Poster}"></h1>`
    
 

