$(document).ready(function(){
    onChangeValues();
    //phone no must be numeric value
    $("#phone_no").keyup(function(e)                          {
      if (/\D/g.test(this.value))
      {
        // Filter non-digits from input value.
        this.value = this.value.replace(/\D/g, '');
        }
      });
});
//loader
function myloading(){
 setTimeout(()=>{
   $("#preloader").css("display","none");
   $("#contact-enquiry").css("display","block");
   $("body").css("overflow","visible");

 },1000);
}

//onchaneg validation error removed
function onChangeValues(){
    $("#fname").blur(()=>{
        $("#error_fname").html(null);
    });
    $("#email").blur(()=>{
        $("#error_email").html(null);
    });
    $("#phone_no").blur(()=>{
        $("#error_phone").html(null);
    });
    $("#address").blur(()=>{
        $("#error_address").html(null);
    });
}
//form submition
function onSubmitData(){
 let fname=$("#fname").val();
 let email=$("#email").val();
 let phone_no=$("#phone_no").val();
 let address=$("#address").val();
 //email patern
 var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
 if(fname==""){
    $("#error_fname").html(`<small  id="error_message" >Please enter the full name</small>`);
 }
 if(email==""){
    $("#error_email").html(`<small  id="error_message" >Please enter the email</small>`);
 }else if(!pattern.test(email)){
    $("#error_email").html(`<small  id="error_message" >Please enter valid format email</small>`);
 }
 if(phone_no==""){
    $("#error_phone").html(`<small  id="error_message" >Please enter the phone no</small>`);
 }
 if(address==""){
    $("#error_address").html(`<small  id="error_message" >Please enter the address</small>`);
 }

 if(fname!=="" && email!=="" &&  pattern.test(email)==true && phone_no!=="" && address!==""){
    let myObjData={fname:fname,email:email,phone_no:phone_no,address:address}
    onCallAjax(myObjData);
 }

}

//Create Ajax Function
function onCallAjax(objData){
    //alert(objData);
    var url="proceess_data.php";
    try {
        $.ajax({
            url:url,
            type: "POST",
            data:objData,
            success:function(response){
                alert("succes");
            },
            error:function(error){
                alert(error);
                console.log(error);
            }
        }); 
    } catch (error) {
        console.log(error);
        alert(error);
    }
}


