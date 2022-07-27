$(document).ready(function(){
    // var data = '';
    var url="series/json/90s.json"
    var Http = new XMLHttpRequest();
    Http.open( "GET", url, false ); // false for synchronous request
    Http.send();

   var data=[];
  data.push( Http.responseText);

    // var data = JSON.parse(  Http.responseText);

$('#txt-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
			
            var regex = new RegExp(searchField,"i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function( key,val){
				if ( (val.snippet.title.search(regex) != -1)) {
				  output += '<ul class="list-group">';
				  output += ' <li class="list-group-item">';
				  output += '<h5>' + val.snippet.title + '</h5>';
				  output += '</li>';
				  output += '</ul>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#filter-records').html(output);
        });
  });