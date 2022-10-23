function input () {
    const name = document.getElementById('name').value;
    const meetingno = document.getElementById('meetingno').value;
    const meetingpw = document.getElementById('meetingpw').value;
    const email = document.getElementById('email').value;

    const name2=sessionStorage.getItem('NAME');
    if(name===name2)
    window.open("termination.html","_self");
    else{

    // to set into local storage
    /* localStorage.setItem("NAME", name); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("MEETING NUMBER", meetingno);
    sessionStorage.setItem("MEETING PASSWORD", meetingpw);
    sessionStorage.setItem("EMAIL", email);
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name == "" || meetingno == ""){
        alert("Required fields are empty");
        sessionStorage.setItem("NAME", "i7MvyBgW2Z"); //random string
    }
    else if(!email.match(pattern))
    {
        alert("Email Format not valid");
        sessionStorage.setItem("NAME", "OjoMtec19Y"); //random string
    }
    else{
    window.open("form.html","_self");
    }

    return;}
}

function warningvid()
{
    console.log("Pressed");
    $('#popUpMain3').css('display','block');
    $('.submitId3').click(function(){
        $('#popUpMain3').css('display','none');
    })
}

function namerecvid()
{
    console.log("Pressed");
    $('#popUpMain4').css('display','block');
    $('.submitId4').click(function(){
        $('#popUpMain4').css('display','none');
    })
}

function customins()
{
    console.log("Pressed");
    $('#popUpMain5').css('display','block');
    $('.submitId5').click(function(){
        $('#popUpMain5').css('display','none');
    })
}
function fullscreenexp()
{
    console.log("Pressed");
    $('#popUpMain6').css('display','block');
    $('.submitId6').click(function(){
        $('#popUpMain6').css('display','none');
    })
}
function visibstd()
{
    console.log("Pressed");
    $('#popUpMain7').css('display','block');
    $('.submitId7').click(function(){
        $('#popUpMain7').css('display','none');
    })
}

function disjs()
{
    console.log("Pressed");
    $('#popUpMain8').css('display','block');
    $('.submitId8').click(function(){
        $('#popUpMain8').css('display','none');
    })
}

function snapstd()
{
    console.log("Pressed");
    $('#popUpMain9').css('display','block');
    $('.submitId9').click(function(){
        $('#popUpMain9').css('display','none');
    })
}
