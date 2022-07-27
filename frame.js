





var getUrl = window.location.search.slice(1);

getUrl = getUrl.replace(/=/g,'":"');
getUrl = getUrl.replace(/&/g,'":"');
 getUrl = '{"'+getUrl+'"}';

 var obj =JSON.parse(getUrl);
 console.log(obj.id)

 let src = obj.id;

 document.getElementById('frame').innerHTML=`<div class="video-responsive"><iframe frameborder="0" marginheight="0" marginwidth="0" height="520" src="${src}" name="iframe_a" scrolling="no" width="640">Your Browser Do not Support Iframe</iframe></div> <br>
 <a href="https://www.youtube.com/watch?v=${video}"><!--<img src="images/yotube.png" class="cardyoutube" width="200px"height="70px"></a>-->`;

//     document.getElementById('player1').innerHTML=`<div class="video-responsive"><div class="plyr__video-embed" id="player">
//     <iframe src="https://www.youtube.com/embed/${video}"
//         allowfullscreen
//         allowtransparency
//         allow="autoplay">
//     </iframe>
// </div></div> `
//  <a href="https://www.youtube.com/watch?v=${video}"><img src="images/yotube.png" class="cardyoutube" width="200px"height="70px"></a>`;