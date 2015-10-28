$('#frmSignUp').validate();
$(function(){
	$('form').submit(function(){
	  var userInfo = {
				fName: $("#txtFName").val(),
				lName: $("#txtLName").val(),
				userName:$("#txtUserName").val(),
				password:$("#txtPwd").val()
			}     
      alert( userInfo.userName + " Account Created Succefully");
			$.ajax({
				url: '/echo/json/',
				type: 'post',
				dataType: 'json',
				success: function (data) {
					 alert( userName + "Account Created Succefully");
				},
				data: userInfo
			});
			
		return false;
		});
});
