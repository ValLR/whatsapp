$(document).ready(function(){
	console.log("ready, free and sigle and willing to mingle")


	$("#send").on("click", function(){
		$("#sent-message").append(`<div class="sent-container"><p>`+ $("#message").val() +`</p></div>`);
		$("#sent-message").attr("value","")}
	)
});