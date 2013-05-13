my_profile = "#my_profile"
main_content ="#sub_main_content"
my_calendar = "#my_calendar"
loader_gif = "#loadergif"
my_diary = "#my_diary"
my_assignment = "#my_assignment"
notifications = "#notifications"
my_course = "#my_course"

$(document).ready(
	function(){
		$.ajax(
			{
				url:'/myaccount/profile',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(loader_gif).hide()		
	}
);
$(my_profile).click(
	function(){
		$(main_content).hide();
		$(loader_gif).show();		
		$.ajax(
			{
				url:'/myaccount/profile',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(main_content).show();
		$(loader_gif).hide();		

	}
);
$(my_calendar).click(
	function(){
		$(main_content).hide();
		$(loader_gif).show();
		$.ajax(
			{
				url:'/myaccount/calendar',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(main_content).show();
		$(loader_gif).hide();	
	}
);

$(my_school_calendar).click(
	function(){
		$(main_content).hide();
		$(loader_gif).show();		
		$.ajax(
			{
				url:'/myaccount/calendar',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(main_content).show();
		$(loader_gif).hide();	
	}
);

$(my_diary).click(
	function(){
		$(main_content).hide();
		$(loader_gif).show();		
		$.ajax(
			{
				url:'/myaccount/diary',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(main_content).show();
		$(loader_gif).hide();	
	}
);
$(my_assignment).click(
	function(){
		$(main_content).hide();
		$(loader_gif).show();		
		$.ajax(
			{
				url:'/myaccount/assignment',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(main_content).show();
		$(loader_gif).hide();	
	}
);


$(notifications).click(
	function(){
		$(main_content).hide();
		$(loader_gif).show();		
		$.ajax(
			{
				url:'/myaccount/notifications',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(main_content).show();
		$(loader_gif).hide();	
	}
);

$(my_course).click(
	function(){
		$(main_content).hide();
		$(loader_gif).show();		
		$.ajax(
			{
				url:'/myaccount/mycourse',
				success : function(response){
					$(main_content).html(response);
				}
			}
		);
		$(main_content).show();
		$(loader_gif).hide();	
	}
);

$(editprofile).click(
	function(){
		alert('a');
		$(profiledetails).hide();
		$(loader_gif).show();		
		$.ajax(
			{
				url:'/myaccount/editprofile',
				success : function(response){
					$(profiledetails).html(response);
				}
			}
		);
		$(profiledetails).show();
		$(loader_gif).hide();	
	}
);




