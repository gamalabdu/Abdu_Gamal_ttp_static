function showCurrentTime(){
    console.log("HIIIIIII")
    let date = new Date();
    let hour = date.getHours() 
    if(hour > 12){
        hour -= 12
    }
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    document.getElementById("time").innerText = hour + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    setTimeout(showCurrentTime, 1000)
}