

var getUrl = window.location.search.slice(1);

getUrl = getUrl.replace(/=/g,'":"');
getUrl = getUrl.replace(/&/g,'","');

 
getUrl = '{"'+getUrl+'"}';

 var obj =JSON.parse(getUrl);

 console.log(obj)
let title= obj.title.replace(/%20/g,' ');

let cname= obj.cname.replace(/%20/g,' ');


console.log(title);
 let video = obj.id;



 document.getElementById('splayer').innerHTML=`<div class="video-responsive"><iframe  width="400" height="300" src="https://www.youtube.com/embed/${video}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1&theme=light&color=blue" frameborder="0"; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> <br>
 
 <h5> ${title}</h5><hr>
 
 <div class="container">
 <div class="row">
 <div  class="col-4">
 <a href="https://www.youtube.com/watch?v=${video}"><img src="../images/developed-with-youtube-sentence-case-light.png"width="140px"height="50px">
 
 </a></div>


 <div class="col-8">

<h4 align="right">${cname}


<a href="http://www.youtube.com/channel/${obj.clink}?sub_confirmation=1"><h3 class="btn btn-danger btn-sm ">SUBSCRIBE </h3></a></h4>

</div>
 <hr>
 
 <!--<img src="images/yotube.png" class="cardyoutube" width="200px"height="70px"></a>-->
 </div></div>
 `;

 // for relted video and other thing http request
 var url1 =`json/${obj.cat}.json`;
// 
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url1, false ); // false for synchronous request
    xmlHttp.send(  );

   // console.log(xmlHttp.responseText)
    var result = JSON.parse(  xmlHttp.responseText);

     console.log( result);


    
result.forEach(related);

function related(index){
document.querySelector('#related').innerHTML+=`
<!-- Card 1: Blade Runner -->
  <div class="movie-card" style="background-image: url(https://i.ytimg.com/vi/${index.snippet.resourceId.videoId}/maxresdefault.jpg);">
      <div class="color-overlay">
         
          <div class="movie-content">
              <div class="movie-header">
                  <h1 class="movie-title">${index.snippet.title}</h1>
                  <!--<h4 class="movie-info">(1982) Sci-Fi, Thriller</h4>-->
              </div>
              <p class="movie-desc">Channel Name : ${index.snippet.channelTitle}</p>
              <a class="btn btn-danger" href="splay.html?id=${index.snippet.resourceId.videoId}&cname=${index.snippet.channelTitle}&clink=${index.snippet.channelId}&cat=${obj.cat}&title=${index.snippet.title}">Watch</a>

          </div>
      </div>
  </div>
`
    
}