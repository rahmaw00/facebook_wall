$(document).ready(function()
{
	$('#message').focus();

	$("button").click(function() {
	var postToWall = $("#message").val();
	$("#wall").prepend("<div><img src= 'http://i.telegraph.co.uk/multimedia/archive/03481/Grumpy_Cat__3481823b.jpg>' width='100'/>"+postToWall+"</div>" );
	
//	$('input').attr('#message');
//	$('body').append('#message');
	});
	
});
