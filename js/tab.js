$(document).ready(function(){
			  $('#wabactive').trigger('click');
			  //$('#webactive').attr('class','tablinks active');
			  $("#wabactive").addClass("active");
			});
			function openCity(evt, cityName) {
				var i, tabcontent, tablinks;
				tabcontent = document.getElementsByClassName("tabcontent");
				for (i = 0; i < tabcontent.length; i++) {
					tabcontent[i].style.display = "none";
				}
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}
				document.getElementById(cityName).style.display = "block";
				evt.currentTarget.className += " active";
				
				if(cityName == 'FASHION'){
					$("#wabactive").addClass("active");
				}
			}