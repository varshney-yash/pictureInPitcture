const videoElement=document.getElementById('video');
const button=document.getElementById('button');

async function selectMedia(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
        // const apiURL='';
    } catch(error){
        console.log(error);
    }
}

button.addEventListener('click',async()=>{
    button.disabled=true;
    await videoElement.requestPictureInPicture();
    button.disabled=false;
});

selectMedia();