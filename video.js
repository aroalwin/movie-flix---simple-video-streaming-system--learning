





var getUrl = window.location.search.slice(1);

getUrl = getUrl.replace(/=/g,'":"');
getUrl = getUrl.replace(/&/g,'":"');
 getUrl = '{"'+getUrl+'"}';

 var obj =JSON.parse(getUrl);
 console.log(obj.id)

 let video = obj.id;

 document.getElementById('player1').innerHTML=`<div class="video-responsive"><iframe  width="400" height="300" src="https://www.youtube.com/embed/${video}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1&theme=light&color=blue" frameborder="0"; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div> <hr>
 <a href="https://www.youtube.com/watch?v=${video}"><img src="images/developed-with-youtube-sentence-case-light.png"width="150px"height="70px">
 
<!--<a href="https://www.youtube.com/watch?v=${video}"><h3 class="btn btn-danger btn-sm "align="right">SUBSCRIBE </h3></a>--><hr>
 
 </a><!--<img src="images/yotube.png" class="cardyoutube" width="200px"height="70px"></a>-->`;

//     document.getElementById('player1').innerHTML=`<div class="video-responsive"><div class="plyr__video-embed" id="player">
//     <iframe src="https://www.youtube.com/embed/${video}"
//         allowfullscreen
//         allowtransparency
//         allow="autoplay">
//     </iframe>
// </div></div> `
//  <a href="https://www.youtube.com/watch?v=${video}"><img src="images/yotube.png" class="cardyoutube" width="200px"height="70px"></a>`;