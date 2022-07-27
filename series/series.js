var getUrl = window.location.search.slice(1);

getUrl = getUrl.replace(/=/g,'":"');
getUrl = getUrl.replace(/&/g,'":"');
getUrl = getUrl.replace(/%20/g,'');
 getUrl = '{"'+getUrl+'"}';

 var obj =JSON.parse(getUrl);

 //console.log(obj.file)
//for card 

const videoCardContainercatbread = document.querySelector('#bread');

const videoCardContainercatli = document.querySelector('#movie-card-list1');

  
  videoCardContainercatbread .innerHTML += ` <div class="banner-area banner-bg-1"data-aos="flip-up" >
  <div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="banner">
        <h2>${obj.file}</h2>
        <ul class="page-title-link">
          <li><a href="../index.html">Home</a></li>
          <li><a href="#">${obj.file}</a></li>
        
        </ul>
      </div>
    </div>
  </div>
</div></div>`;


 var url =`json/${obj.file}.json`;
// ajax{


    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send();

   // console.log(xmlHttp.responseText);

    var re = JSON.parse(  xmlHttp.responseText);


    //
     console.log( re);

    // var me=re.Search;
    
re.forEach(tt);


// console.log(index.Title);
function tt(index){
  // videoCardContainercatli.innerHTML += ` <!-- Card 1: Blade Runner -->
  // <div class="movie-card" style="background-image: url(https://i.ytimg.com/vi/${index.contentDetails.videoId}/maxresdefault.jpg);">
  //     <div class="color-overlay">
         
  //         <div class="movie-content">
  //             <div class="movie-header">
  //                 <h1 class="movie-title">${index.snippet.title}</h1>
  //                 <!--<h4 class="movie-info">(1982) Sci-Fi, Thriller</h4>-->
  //             </div>
  //             <p class="movie-desc">Channel Name : ${index.snippet.channelTitle}</p>
  //             <a class="btn btn-danger" href="splay.html?id=${index.contentDetails.videoId}&title=${index.snippet.title}&cname=${index.snippet.channelTitle}&clink=${index.snippet.channelId}&cat=${obj.file}">Watch</a>

  //         </div>
  //     </div>
  // </div>`;

  videoCardContainercatli.innerHTML+=`  <div class="cardmove"style="  background-image: url(https://i.ytimg.com/vi/${index.snippet.resourceId.videoId}/maxresdefault.jpg);"loading="lazy">
  <div class="cardmove-content">
    <h2>${index.snippet.title}</h2>
    <p>
    CHANNEL NAME : ${index.snippet.channelTitle}
    </p>
    <a href="splay.html?id=${index.snippet.resourceId.videoId}&cname=${index.snippet.channelTitle}&clink=${index.snippet.videoOwnerChannelId}&cat=${obj.file}&title=${index.snippet.title}" class=" btn btn-danger"
      >watch now
      <i class="las la-long-arrow-alt-right"></i>
    </a>
  </div>
</div>`
  //console.log(index.contentDetails.videoId);


}

//for search
$(document).ready(function(){
  $("#searchin").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#movie-card-list1 *").filter(function() {
     
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});