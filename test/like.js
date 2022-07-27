



function myFunction(x) {

   
  
  //firebase
  
  
  if(x=='like'){
    var l=document.getElementById("lii").value;
    ++l;
    console.log(l);
             

  // document.getElementById('valuel').innerHTML=++l;
  //alert("like");
  
  }
  else if(x=='dislike'){
    var d = document.getElementById('lid').value;
    ++d;
  //alert("dislike");
  }
  else{
  
  alert("de");
  
  }
  
  db.collection("likes").doc("videoid").update({

    "like":l,
  
    
  }).then(function(){
  
  console.log("sucess");
  
  })
  .catch(function(error){
  console.log("internal server error");
  
  
  })
  
  
  


  //end firebase
      
}

li(); 
  async function li() {
    // [START firestore_data_get_all_documents]
    const marli = db.collection('likes');
    const snapshot = await marli.get();
    snapshot.forEach(docml => {
      //console.log('Document data:', docm.data());
      if (docml.exists) {
          
        
        
            let marmarlile = docml.data();
         
         document.getElementById('valuel').innerHTML=`<div id="up"><input type=number id ="lii"value=${marmarlile.like} readonly></div>`;
         document.getElementById('valued').innerHTML=`<input type=number id ="lid"value=${marmarlile.dislike} readonly>`;
            console.log(marmarlile.like);
          
          
  
              
          
        
        
        } else {
            console.log('No data found');
        } 
      
    }
  );}
  

 
   
//




