$(document).ready(function(){
    setTimeout(function(){
     $('#popUpMain').css('display','block'); }, 1000);
   });
   
   $('.submitId').click(function(){
    $('#popUpMain').css('display','none');
    document.documentElement.requestFullscreen().catch((e) => {
       console.log(e);
    })
   });
   
   function input2 () {
       $('#popUpMain').css('display','block');
   }

   function input3 () {
    $('#popUpMain2').css('display','block');
    }
    $('.submitId2').click(function(){
    $('#popUpMain2').css('display','none');
   });
   
   document.addEventListener('fullscreenchange', function() {
	var full_screen_element = document.fullscreenElement;

	if(full_screen_element !== null)
		console.log('Page has entered fullscreen mode');
	else{        
            setTimeout(function(){
             $('#popUpMain').css('display','block'); }, 0000);
           $('.submitId').click(function(){
            $('#popUpMain').css('display','none');
            document.documentElement.requestFullscreen().catch((e) => {
               console.log(e);
            })
           });
    }
});


const flag = sessionStorage.getItem('FLAG');
    if(flag==1)
    {
    window.open("termination.html","_self");
}
window.addEventListener('load', () => {

  const name = sessionStorage.getItem('NAME');

  let counterValue=0;

    function stopCounter(){
    counterValue++;
    if(counterValue>3)
    {
        counterValue=3;
        window.open("warning.html","_self");
    }
    alert("Dear "+name+",\nYou have moved off the page "+counterValue+(counterValue===1?" time.":" times.")+"\nIf you move off the page "+(4-counterValue)+" more "+(counterValue===3?"time":"times")+", your session will be terminated.");
}

document.addEventListener('visibilitychange', () => {
    if(document.hidden){
        stopCounter();
        timer = setTimeout(function(){ window.open("warning.html","_self") }, 300000);
        return;
    }
    else{
        clearTimeout(timer);
    }
})

})

let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let dataurl = document.querySelector("#dataurl");
let dataurl_container = document.querySelector("#dataurl-container");

camera_button.addEventListener('click', async function() {
   	let stream = null;

    try {
    	stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    }
    catch(error) {
    	alert(error.message);
    	return;
    }

    video.srcObject = stream;

    video.style.display = 'block';
    camera_button.style.display = 'none';
    click_button.style.display = 'block';

    setTimeout(function(){
        stream.getTracks()[0].stop();
        console.log("Camera Stopped");
      },7000)
});

click_button.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/jpeg');
    
    dataurl.value = image_data_url;
    dataurl_container.style.display = 'block';
});

setTimeout(function(){
    document.getElementById('start-camera').click();
    setTimeout(getclicked, 5000);
    setTimeout(storinginsession, 7000);
    function getclicked() {
        document.getElementById('click-photo').click();
    }
    function storinginsession() {
        const name = document.getElementById('dataurl').value;
        sessionStorage.setItem("IMAGE URL1", name);
    }
},600000)

setTimeout(function(){
    document.getElementById('start-camera').click();
    setTimeout(getclicked, 5000);
    setTimeout(storinginsession, 7000);
    function getclicked() {
        document.getElementById('click-photo').click();
    }
    function storinginsession() {
        const name = document.getElementById('dataurl').value;
        sessionStorage.setItem("IMAGE URL2", name);
    }
},1200000)

setTimeout(function(){
    document.getElementById('start-camera').click();
    setTimeout(getclicked, 5000);
    setTimeout(storinginsession, 7000);
    function getclicked() {
        document.getElementById('click-photo').click();
    }
    function storinginsession() {
        const name = document.getElementById('dataurl').value;
        sessionStorage.setItem("IMAGE URL3", name);
    }
},1800000)
