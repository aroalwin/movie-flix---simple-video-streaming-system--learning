//for all movies
 const videoCardContainerallsong = document.querySelector('#song');
// var test=[];
// async function Allmov() {
//   // [START firestore_data_get_all_documents]
//   const allmov11 = db.collection('songs');
//   const snapshot = await allmov11.get();




//   snapshot.forEach(docallsongs => {
//     //console.log('Document data:', docm.data());

//     test.push(docallsongs.data())
      
        
//       //test= docallsongs.data();
         
        
//          var allsongvar= docallsongs.data();
      
 
//          //return test;
     
      
//   }
// );


// }
// // test.length();
// // console.log(test[0]);
// Allmov();


//end for all movies

song={
one:{
    id:"CkJtsa1rjKA",
    title:"Annaatthe - Official Audio Songs Jukebox  "
     },
two:{
    id:"DV7nV9W7y-0",
    title:"Doctor - Chellamma Video "
    },
three:{
    id:"gjOLk0L830c",
    title:"Valimai - Naanga Vera Maari "
        },
 four:{
            id:"9bSTomC5H84",
            title:"Doctor - Nenjame Video "
            },
 five:{
    id:"YQ6ShcAU_dQ",
    title:"Aathi | Full Video Song "
                },

}
  
videoCardContainerallsong.innerHTML += `  <!-- MOVIE ITEM -->
<a href="play.html?id=${song.one.id}" class="movie-item">
 <img src="https://i.ytimg.com/vi/${song.one.id}/hqdefault.jpg" alt="">
 <div class="movie-item-content">
     <div class="movie-item-title">
     ${song.one.title}
     </div>
     <div class="movie-infos">
         <div class="movie-info">
             <i class="bx bxs-star"></i>
             <span>9.5</span>
         </div>
         <div class="movie-info">
             <i class="bx bxs-time"></i>
             <span>2.22.57 hr</span>
         </div>
         <div class="movie-info">
             <span>HD</span>
         </div>
         <div class="movie-info">
             <span>16+</span>
         </div>
     </div>
 </div>
</a>
<!-- END MOVIE ITEM -->
 <!-- MOVIE ITEM -->
<a href="play.html?id=${song.two.id}" class="movie-item">
 <img src="https://i.ytimg.com/vi/${song.two.id}/hqdefault.jpg" alt="">
 <div class="movie-item-content">
     <div class="movie-item-title">
     ${song.two.title}
     </div>
     <div class="movie-infos">
         <div class="movie-info">
             <i class="bx bxs-star"></i>
             <span>9.5</span>
         </div>
         <div class="movie-info">
             <i class="bx bxs-time"></i>
             <span>2.50.49 hr</span>
         </div>
         <div class="movie-info">
             <span>HD</span>
         </div>
         <div class="movie-info">
             <span>16+</span>
         </div>
     </div>
 </div>
</a>
<!-- END MOVIE ITEM -->
 <!-- MOVIE ITEM -->
 <a href="play.html?id=${song.three.id}" class="movie-item">
     <img src="https://i.ytimg.com/vi/${song.three.id}/hqdefault.jpg" alt="">
     <div class="movie-item-content">
         <div class="movie-item-title">
         ${song.three.title}
         </div>
         <div class="movie-infos">
             <div class="movie-info">
                 <i class="bx bxs-star"></i>
                 <span>9.5</span>
             </div>
             <div class="movie-info">
                 <i class="bx bxs-time"></i>
                 <span>2.49.46 hr</span>
             </div>
             <div class="movie-info">
                 <span>HD</span>
             </div>
             <div class="movie-info">
                 <span>16+</span>
             </div>
         </div>
     </div>
 </a>
 <!-- END MOVIE ITEM -->
 <!-- MOVIE ITEM -->
 <a href="play.html?id=${song.four.id}" class="movie-item">
     <img src="https://i.ytimg.com/vi/${song.four.id}/hqdefault.jpg" alt="">
     <div class="movie-item-content">
         <div class="movie-item-title">
         ${song.four.title}
         </div>
         <div class="movie-infos">
             <div class="movie-info">
                 <i class="bx bxs-star"></i>
                 <span>9.5</span>
             </div>
             <div class="movie-info">
                 <i class="bx bxs-time"></i>
                 <span>2.46.36 hr</span>
             </div>
             <div class="movie-info">
                 <span>HD</span>
             </div>
             <div class="movie-info">
                 <span>16+</span>
             </div>
         </div>
     </div>
 </a>
 <!-- END MOVIE ITEM -->
 
 <!-- MOVIE ITEM -->
 <a href="play.html?id=${song.five.id}" class="movie-item">
     <img src="https://i.ytimg.com/vi/${song.five.id}/hqdefault.jpg" alt="">
     <div class="movie-item-content">
         <div class="movie-item-title">
         ${song.five.title}
         </div>
         <div class="movie-infos">
             <div class="movie-info">
                 <i class="bx bxs-star"></i>
                 <span>9.5</span>
             </div>
             <div class="movie-info">
                 <i class="bx bxs-time"></i>
                 <span>37.26 min</span>
             </div>
             <div class="movie-info">
                 <span>HD</span>
             </div>
             <div class="movie-info">
                 <span>16+</span>
             </div>
         </div>
     </div>
 </a>
 <!-- END MOVIE ITEM -->`;