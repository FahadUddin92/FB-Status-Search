function getResults(u) {
//$("#status").show();	
$("#data").empty();													// print that we are in
	$.ajax({
	    dataType: "jsonp", 
	    url: u,
	    success: function(res) {														// take an object res
				$("#data").empty();	
	    	  $("#status").show();														// show status
			  //$("#more").show();	
	    	  if (res.data.length) {													// check length of res
																	// print if >0
	    	  	nexturl = res.paging.next;												// calculate next url
				  $.each(res.data, function(i,item){
				  	if (item.id != lastid) {
						lastid = item.id;
						var html ="<div class=\"post\">";
						
						html += "<div class=\"message\"><a href=\"http:\/\/www.facebook.com\/profile.php?id="+item.from.id+"\">"+item.from.name+"</a> ";
						
						if (item.message) { 
							html += item.message+"<\/div>";
						} else {
							html += "<\/div>";
						}
						if (item.picture) { 
							html += "<div class=\"image\"><img src=\""+item.picture+"\"></div>";
						} else {
							html += "<div class=\"image\"><\/div>";
						};
						if (item.link) { 
							html += "<div class=\"link\"><a href=\""+item.link+"\">"+item.name+"</a></div>";
								
							if (item.caption) { 
									html += "<div class=\"caption\">"+item.caption+"</div>";
							};
							if (item.description) { 
									html += "<div class=\"description\">"+item.description+"</div>";
							};
								
						};
		
						html += "<div class=\"meta\">";
		
						if (item.icon) { 
							html += "<span class=\"icon\"><img src=\""+item.icon+"\"></span> ";
						};
						var t = item.created_time;
						var time = t.substring(0,19)+"\+00:00";
						html += "<span class=\"time\">"+$.cuteTime({},time)+"<\/span> ";
						html += " <\/div>";
								
						html +="</div>";
				    	$("#data").append(html) ;
				  	}
		    	  });
		    	  	$("#more").appendTo("#data_container");
		    	  	$("#more").show();
		    	  	$("#status").appendTo("#data");


	    	} else {
	    		$("#data").append("<h3 class=\"none\">No entries found. Please try another search.</h3>");
	    	}; 
	  	} 
  
	});
}

/*
     FILE ARCHIVED ON 10:25:55 Apr 24, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:20:54 Sep 24, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 71.295 (3)
  esindex: 0.006
  captures_list: 86.426
  CDXLines.iter: 10.679 (3)
  PetaboxLoader3.datanode: 88.497 (4)
  exclusion.robots: 0.169
  exclusion.robots.policy: 0.158
  RedisCDXSource: 1.667
  PetaboxLoader3.resolve: 42.705
  load_resource: 142.419
*/