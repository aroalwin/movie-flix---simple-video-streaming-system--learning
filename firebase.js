const firebaseConfig = {
//your config key
  };
  //db initialize
 firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();


const videoCardContainermar = document.querySelector('.mar');
//for marquee
async function marAll() {
        // [START firestore_data_get_all_documents]
        const marqu = db.collection('marquee');
        const snapshot = await marqu.get();
        snapshot.forEach(docm => {
          //console.log('Document data:', docm.data());
          if (docm.exists) {
              
            
            
                let marmess = docm.data();
             
            
                console.log(marmess.message);
              
                 
               
                  
                 videoCardContainermar.innerHTML += `${marmess.message}`
            
            
            } else {
                console.log('No data found');
            } 
          
        }
      );}
    
      marAll();



//end marquee
//for all movies
const videoCardContainerallmov = document.querySelector('#movie-card-list');
async function Allmov() {
  // [START firestore_data_get_all_documents]
  const allmov = db.collection('allmovies');
  const snapshot = await allmov.get();
  snapshot.forEach(docallmov => {
    //console.log('Document data:', docm.data());
    if (docallmov.exists) {
        
      
      
          let allmovvar = docallmov.data();
       
      
          console.log(allmovvar.id);
        
           
         
            
           videoCardContainerallmov.innerHTML += ` <!-- Card 1: Blade Runner -->
           <div class="movie-card" style="background-image: url(https://i.ytimg.com/vi/${allmovvar.id}/maxresdefault.jpg);">
               <div class="color-overlay">
                  
                   <div class="movie-content">
                       <div class="movie-header">
                           <h1 class="movie-title">${allmovvar.title}</h1>
                           <!--<h4 class="movie-info">(1982) Sci-Fi, Thriller</h4>-->
                       </div>
                       <p class="movie-desc">${allmovvar.desc}</p>
                       <a class="btn btn-danger" href="play.html?id=${allmovvar.id}">Watch</a>
       
                   </div>
               </div>
           </div>`;
      
      
      } else {
       
        console.log("error");
      } 
    
  }
);}

Allmov();

//for from server
const videoCardContainersermov = document.querySelector('#from-servere');
async function Allserver() {
  // [START firestore_data_get_all_documents]
  const allser = db.collection('servermessege');
  const snapshot = await allser.get();
  snapshot.forEach(docsermov => {
    //console.log('Document data:', docm.data());
    if (docsermov.exists) {
        
      
      
          let allservar = docsermov.data();
       
      
          console.log(allservar.code);
        
           
         
            
           videoCardContainersermov.innerHTML += `${allservar.code}`;
      
      
      } else {
       
        console.log("error");
      } 
    
  }
);}

Allserver();
//end for all movies

// //for cat comedy
// const videoCardContainercatcom = document.querySelector('#movie-card-list1');
// async function catCom() {
//   // [START firestore_data_get_all_documents]
//   const catcom = db.collection('catcomedy');
//   const snapshot = await catcom.get();
//   snapshot.forEach(docatcom => {
//     //console.log('Document data:', docm.data());
//     if (docatcom.exists) {
        
      
      
//           let catcomvar = docatcom.data();
       
      
//           console.log(catcomvar.id);
        
           
         
            
//            videoCardContainercatcom.innerHTML += `  <!-- Card 1: Blade Runner -->
//            <div class="movie-card" style="background-image: url(https://i.ytimg.com/vi/${catcomvar.id}/maxresdefault.jpg);">
//                <div class="color-overlay">
                  
//                    <div class="movie-content">
//                        <div class="movie-header">
//                            <h1 class="movie-title">${catcomvar.title}</h1>
//                            <!--<h4 class="movie-info">(1982) Sci-Fi, Thriller</h4>-->
//                        </div>
//                        <p class="movie-desc">${catcomvar.desc}</p>
//                        <a class="btn btn-danger" href="play.html?id=${catcomvar.id}">Watch</a>
       
//                    </div>
//                </div>
//            </div>`;
      
      
//       } else {
       
//         console.log("error");
//       } 
    
//   }
// );}

// catCom();

//end for cat comedy

//const videoCardContainer2 = document.querySelector('#m');

// for trending

// async function trendingAll() {
//     // [START firestore_data_get_all_documents]
//     const citiesRef = db.collection('allmovies');
//     const snapshot = await citiesRef.get();
//     snapshot.forEach(doc => {
//        //console.log('Document data:', doc.data());
//       if (doc.exists) {
          
        
        
//             let trending = doc.data();
         
        
//             console.log(trending.id);
//              console.log(trending.title);
//              console.log(trending.desc);
             
           
              
//              videoCardContainer2.innerHTML += `<a href="play.html?id=${trending.id}"><img src="https://i.ytimg.com/vi/${trending.id}/maxresdefault.jpg" alt=""></a>
//              <div class="movie-item-content">
//                  <div class="movie-item-title">
//                   ${trending.title}
//                  </div>
//                  <div class="movie-infos">
//                      <div class="movie-info">
//                          <i class="bx bxs-star"></i>
//                          <span>9.5</span>
//                      </div>
//                      <div class="movie-info">
//                          <i class="bx bxs-time"></i>
//                          <span>120 mins</span>
//                      </div>
//                      <div class="movie-info">
//                          <span>HD</span>
//                      </div>
//                      <div class="movie-info">
//                          <span>16+</span>
//                      </div>
//                  </div>
//              </div>`;
        
        
//         } else {
//             console.log('No data found');
//         } 
      
//     }
//   );}

//   trendingAll();


  // End For Trending
  
  // for latest
//   const videoCardContainerlatest = document.querySelector('#latest');
// async function latestAll() {
//     // [START firestore_data_get_all_documents]
//     const latest1 = db.collection('latest');
//     const snapshot = await latest1.get();
//     snapshot.forEach(doc1 => {
//        //console.log('Document data:', doc.data());
//       if (doc1.exists) {
          
        
        
          //  let latest = doc1.data();
         
        
            // console.log(trending.id);
            //  console.log(trending.title);
            //  console.log(trending.desc);
             
           
              
//              videoCardContainerlatest.innerHTML += `<a href="play.html?id=${latest.id}" class="movie-item">
//              <img src="https://i.ytimg.com/vi/${latest.id}/maxresdefault.jpg" alt="">
//              <div class="movie-item-content">
//                  <div class="movie-item-title">
//                      ${latest.title}
//                  </div>
//                  <div class="movie-infos">
//                      <div class="movie-info">
//                          <i class="bx bxs-star"></i>
//                          <span>9.5</span>
//                      </div>
//                      <div class="movie-info">
//                          <i class="bx bxs-time"></i>
//                          <span>120 mins</span>
//                      </div>
//                      <div class="movie-info">
//                          <span>HD</span>
//                      </div>
//                      <div class="movie-info">
//                          <span>16+</span>
//                      </div>
//                  </div>
//              </div>
//          </a>`;
        
        
//         } else {
//             console.log('No data found');
//         } 
      
//     }
//   );}

//   latestAll();


  // End For latest


  ////################################## For Future Purpose   ###############################################################################///
    // [END firestore_data_get_all_documents]
  

// db.collection('movies').doc('trending').get().then(function(doc){  
//     if (doc.exists) {
//     //console.log('Document data:', doc.data());


   
//      trending = doc.data();
 

//     //  console.log(trending.id);
//     //  console.log(trending.title);
//     //  console.log(trending.desc);
     
//      videoCardContainer.innerHTML += `<a href="play.html?id=${trending.id}"><img src="https://i.ytimg.com/vi/${trending.id}/maxresdefault.jpg" alt=""></a>
//      <div class="movie-item-content">
//          <div class="movie-item-title">
          
//          </div>
//          <div class="movie-infos">
//              <div class="movie-info">
//                  <i class="bx bxs-star"></i>
//                  <span>9.5</span>
//              </div>
//              <div class="movie-info">
//                  <i class="bx bxs-time"></i>
//                  <span>120 mins</span>
//              </div>
//              <div class="movie-info">
//                  <span>HD</span>
//              </div>
//              <div class="movie-info">
//                  <span>16+</span>
//              </div>
//          </div>
//      </div>`;


// } else {
//     console.log('No data found');
// }     });

//end for trending

  ////################################## For Future Purpose   ###############################################################################//
