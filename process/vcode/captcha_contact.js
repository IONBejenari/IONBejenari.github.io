$(function(){
	$("#refreshimg").click(function(){
		$.post('./process/vcode/newsession.php');
		//$("#refreshimg").load('process/vcode/image_req.php');
		$("#refreshimg img").attr('src','./process/vcode/images/image.php?'+Math.random());
	
		return false;
	});
	
	$("#reload").click(function(){
		$("#refreshimg").click();
});

	$("#cmaForm").validate({
		rules: {
			captcha: {
				required: true,
				remote: "./process/vcode/process.php"
			}
		},
		messages: {
			captcha: "Incorrect."	
		},
		submitHandler: function(form) {
	$("#cmaForm").attr('action','./process/contact_process.php');
	form.Submit();
		},
		success: function(label) {
			label.addClass("valid").text("");
			//alert(label);
		},
		onkeyup: false
	});
	
	//$("#refreshimg").click();
		//$.post('process/vcode/newsession.php');
		//$("#refreshimg").load('process/vcode/image_req.php');
		//$("#refreshimg").attr('src','process/vcode/images/image.php?'+Math.random());
});
