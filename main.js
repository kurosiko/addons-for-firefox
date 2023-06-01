/*
function show() {
    console.log("GET");
    //動作確認用
    const tweet = document.getElementsByTagName("article");
    console.log(tweet);

    for (const element of tweet) {
        console.log("ELEMENT");
        console.log(element);
        if (element.classList.contains("isfted")){
          continue;
        }
        element.classList.add("isfted")
        const share = document.createElement("h1");
        share.style.color = "white";
        share.innerText = "TEST";
        share.className = "isft"
        element.appendChild(share);
    }
}
*/
console.log("loaded")
browser.webRequest.onBeforeSendHeaders.addListener((detail)=>{
    for (const req_data of detail.requestHeaders){
        if (req_data.name == "authorization"){
            console.log(req_data.value)
        }
    }
},
{
    urls:["https://api.twitter.com/1.1/live_pipeline/update_subscriptions"]
},
["requestHeaders"]
)
/*
console.log("loaded")
browser.webRequest.onBeforeRequest.addListener(
    (details) => {
        console.log(details);
    }, {
        urls: ["https://api.twitter.com/1.1/live_pipeline/update_subscriptions"],
    },[]);
    */