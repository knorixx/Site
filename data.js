const content = [
    {
        img: 'https://sun9-34.userapi.com/impg/9zXSVPPMk-y8ihFgfTMjR7Yjfpkiq_i-s_4zUQ/bmmwfRQmikU.jpg?size=505x474&quality=96&sign=3b36374ad075d6e0e234d82912d259b8&type=album',
        title: 'Егорыч',
        link: 'https://youtu.be/ro1smIi0V5I',
    },
    //2
    {
        img: 'https://sun9-51.userapi.com/impg/tVtZpsvMZcc1nOZzmOGasc6S8VRl3pIupMYgkw/l-XLVBmPy3M.jpg?size=899x1599&quality=95&sign=5b08a53d7f5a187f976e516a49175c99&type=album',
        title: 'МайХаэль',
        link: 'https://youtu.be/Xr6CDmgryVQ',
    },
    //3
    {
        img: 'https://sun9-22.userapi.com/impg/RNBwCimeJfv-4rPwd-7H9r-9FXCDhqUXKa_e3Q/BGCWaFSIbGQ.jpg?size=360x476&quality=96&sign=58d9014fb0bf573d229d7df2a3ce60e0&type=album',
        title: 'Ильюша',
        link: 'https://youtu.be/X0zSCic2el8',
    },
    //4
    {
        img: 'https://sun9-46.userapi.com/impg/lYZ39bu5lFIL2pUPoXWGcaQYg6bXQmh5zhAMrw/6-gXn_FNPLw.jpg?size=478x476&quality=96&sign=1ecccdff0c206f70b76386274c7bcd21&type=album',
        title: 'Никита',
        link: 'https://youtu.be/Gku5h4RoHvk',
    },
    //5
    {
        img: 'https://sun9-78.userapi.com/impg/N3N16zpqMPIg_B3gRa_wAN278RKbnAtbALTWAw/TV3KTPzKnuM.jpg?size=1104x1472&quality=96&sign=aa5143dc0827921407380a3dd97af373&type=album',
        title: 'Егор бульдозер',
        link: 'https://www.youtube.com/watch?v=wcaZcbain2s&ab_channel=JustMyFavStrangeMusic',
    },
    //6
    {
        img: 'https://sun9-69.userapi.com/impg/LEk6HfF4wdbeyX74NVVfH3vfpeoH2yKtX7rgVQ/K5Lc_sP8ffU.jpg?size=1920x1080&quality=96&sign=aa2d681f8c18c72469da667cbb04b0fb&type=album',
        title: 'Саньёк',
        link: 'https://youtu.be/IRrL3bYA-AU',
        
    },
    //7
    {
        img: 'https://sun9-53.userapi.com/impg/-bA7VilhyYwUpT2LgBNHbBo8liwNfH3vnpbgkg/qCchVbjWNd4.jpg?size=1626x2160&quality=95&sign=cc8e0d8ea00e826178fd63e8c86bc3cd&type=album',
        title: 'Васимка',
        link: 'https://youtu.be/HBKuN_EgDfs',

    }, 
     {
        img: 'https://sun7-1.userapi.com/impg/c97j_7draxxuDiJBclCoY0RL5L4nSFBnVmU93g/aALCXdsw3ws.jpg?size=387x400&quality=96&sign=7a997b35f14182d4320448381a1bb6ee&type=album',
        title: 'Арсений',
        link: 'https://youtu.be/3Y_3_V_8y78',
        
    },
]

const wrapper = document.querySelectorAll('.wrapper')[1]
let blocks = ''
for(i = 0; i < content.length; i++){
    const block = `
    <a href="${content[i].link}" style="color: black" >
        <div class="block">
        <div class="imgBox">
            <img class="img" src="${content[i].img}" style="margin-left: ${content[i].margin}">
        </div>
        <div class="titleBox" >
            <span>${content[i].title}</span>
        </div>
        </div>
    </a>`
    blocks = blocks + block
}
wrapper.innerHTML = blocks
console.log(blocks)
