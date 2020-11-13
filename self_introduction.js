// 이미지 변경 함수
function selfImgMouseOver() {
    var img = document.self_cam;
    img.src = "./img/selfCam2.jpg";
}

function selfImgMouseOut() {
    var img = document.self_cam;
    img.src = "./img/selfCam.jpg";
}

// 키포인트 
function keypointOver(){

    var btt_text = document.getElementById("keypoint").value;
    
    var keypoint = document.getElementsByName("keypoint");
    for(var i = 0; i < keypoint.length; i++){
        
    }
    
    var popupWidth = 400;
    var popupHeight = 300;

    var popupX = (window.screen.width / 2) - (popupWidth / 2);

    var popupY= (window.screen.height / 2) - (popupHeight / 2);
    var pop = window.open('', 'gesgsedsf', 'status=no, height=' + popupHeight  + ', width=' + popupWidth  + ', left='+ popupX + ', top='+ popupY);
    pop.document.write("<br><br><div style='text-align: center;'><h3>Keypoint</h3>"+keypoint[0].innerText+"<br>"+keypoint[1].innerText+"<br>"+keypoint[2].innerText+"<br>"+keypoint[3].innerText+"<br>"+keypoint[4].innerText+"<br>"+keypoint[5].innerText+"<br>"+keypoint[6].innerText+"<br>"+"</div>");
    
}


