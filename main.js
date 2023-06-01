function show() {
    console.log("GET");
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
// 元のfetch関数を保存
var originalFetch = window.fetch;

// fetch関数を上書き
window.fetch = function(url, options) {
    console.log(url)
    // リクエストが送信される前に行いたい処理を追加
    // fetchの結果を取得するための処理を設定
    return originalFetch.apply(this, arguments).then(function(response) {
        // レスポンスを取得するための処理を追加
        return response.text().then(function(text) {
            console.log('Response:', text);
            return response;
        });
    });
};

// ブラウザでの通信が行われる度に上記の処理が実行されます
