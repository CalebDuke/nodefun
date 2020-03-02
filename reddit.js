const path = require("path");
const fs = require("fs");
const request = require("request");

request("https://reddit.com/r/popular.json", (err, res, body) => {
    if(err) console.log(err)

    let articleArr = []

    JSON.parse(body).data.children.forEach(item => {
        console.log(item.data.title, item.data.url, item.data.author)
        articleArr.push(
            {
                title: item.data.title,
                url: item.data.url,
                author: item.data.author
            })
            console.log(articleArr)
        })
        let article = JSON.stringify(articleArr);
        fs.writeFileSync("popular-articles.json", article);
});
