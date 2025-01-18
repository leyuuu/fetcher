var rsp = (await fetch("https://api.nhk.or.jp/r-news/v1/newslist.js"))
var data = await rsp.text()

function radionews(list: any){
    let news = list.news.pop()
    let fileName = news.soundlist.sound_normal.filename
    let url = "https://www.nhk.or.jp/r-news/ondemand/mp3/" + fileName +".mp3"
    console.log(url)
    downloadHere(url)
}

async function downloadHere(url: string){
    const res = await fetch(url);
    const file = await Deno.open('./nhk.mp3', { create: true, write: true })

    for await(const chunk of res.body!) {
        await Deno.writeAll(file, chunk);
    }
}

eval(data)
