

var getUrl = window.location.search.slice(1);

getUrl = getUrl.replace(/=/g,'":"');
getUrl = getUrl.replace(/&/g,'":"');
 getUrl = '{"'+getUrl+'"}';

 var obj =JSON.parse(getUrl);
 console.log(obj.cat)
//for loading breadcum
  let category = obj.cat;
  const videoCardContainercatbread = document.querySelector('#bread');



  
  videoCardContainercatbread .innerHTML += ` <div class="banner-area banner-bg-1"data-aos="flip-up" >
  <div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="banner">
        <h2>${category}</h2>
        <ul class="page-title-link">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">${category}</a></li>
        
        </ul>
      </div>
    </div>
  </div>
</div></div>`;

//end for breadcum
 //for loading category
 const videoCardContainercatli = document.querySelector('#movie-card-list1');
 

 async function catAll() {
    // [START firestore_data_get_all_documents]
    const catlist = db.collection(category);
    const snapshot = await catlist.get();
    snapshot.forEach(docl => {
      //console.log('Document data:', docm.data());
      if (docl.exists) {
     
            let catlistvar = docl.data();
         
        
            console.log(catlistvar.title);
             
            videoCardContainercatli.innerHTML += ` <!-- Card 1: Blade Runner -->
             <div class="movie-card" style="background-image: url(https://i.ytimg.com/vi/${catlistvar.id}/maxresdefault.jpg);">
                 <div class="color-overlay">
                    
                     <div class="movie-content">
                         <div class="movie-header">
                             <h1 class="movie-title">${catlistvar.title}</h1>
                             <!--<h4 class="movie-info">(1982) Sci-Fi, Thriller</h4>-->
                         </div>
                         <p class="movie-desc">${catlistvar.desc}</p>
                         <a class="btn btn-danger" href="play.html?id=${catlistvar.id}">Watch</a>
         
                     </div>
                 </div>
             </div>
             
             `;
        
        
        } else {
            console.log('No data found');
        } 
      
    }
  );}

  catAll();
  var file;
 switch (category) {
  case 'songs':
 file="New-Songs-2021"
  break;
  case '90s':
file="90s"
break;
case 'horror':
  file='horror'
break;
default:
  document.getElementById('more').style.visibility="hidden"
   
    break;
}
  // if(category=="songs"){
  //   document.getElementById('songs').style.visibility="visible"
  //   }else{
  //     document.getElementById('songs').style.visibility="hidden"
    
  //   }


    document.querySelector('#more').innerHTML=`<center><a href="series/series.htm?file=${file}"><button  class="btn btn-danger">load More</button></a> </center><br><br>`