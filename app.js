window.onload = function(){
    const body = document.getElementById('bodyenso');
    const spinning = document.getElementById('spinnerCenter');
    body.style.overflow = 'auto';
    spinning.style.display = 'none';
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// theme
const themeSwitchTo1 = document.querySelector('#theme1')
const themeSwitchTo2 = document.querySelector('#theme2')
const navClass = document.querySelector('#menu')
const themeClass = document.querySelector('#themeBtn')
const isologotipo = document.querySelector('#isologotipo')

themeSwitchTo1.addEventListener('click', ()=>{
    document.body.style.backgroundImage = 'linear-gradient(to Top, rgb(200, 200, 200) 0%, white 100%)'
    document.body.classList.remove('dark')
    document.body.classList.add('light')
    navClass.classList.remove('bg-dark')
    navClass.classList.add('bg-secondary')
    navClass.classList.remove('navbar-dark')
    navClass.classList.add('navbar-light')
    themeClass.classList.remove('btn-dark')
    themeClass.classList.add('btn-light')
    anashei.style.backgroundColor = 'whitesmoke'
    anashei.style.border = '2px solid rgb(184, 184, 184)'
    isologotipo.style.backgroundImage = 'url(imgs/nav-brand-logo-black.png)'
    searchText.style.color = 'black'
    aside.style.backgroundColor = 'rgba(255, 255, 255, 0.74)'
    if(localStorage.getItem('dark-mode')==='true'){
        localStorage.removeItem('dark-mode')
        anashei.style.backgroundColor = 'whitesmoke'
        anashei.style.border = '2px solid rgb(184, 184, 184)'
        searchText.style.color = 'black'
        aside.style.backgroundColor = 'rgba(255, 255, 255, 0.74)'
        isologotipo.style.backgroundImage = 'url(imgs/nav-brand-logo-black.png)'
    }
})
themeSwitchTo2.addEventListener('click', ()=>{
    document.body.style.backgroundImage = 'linear-gradient(to Top, rgb(20, 20, 20) 0%, rgb(50, 50, 50) 100%)'
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    navClass.classList.add('bg-dark')
    navClass.classList.remove('bg-secondary')
    navClass.classList.add('navbar-dark')
    navClass.classList.remove('navbar-light')
    themeClass.classList.add('btn-dark')
    themeClass.classList.remove('btn-light')
    anashei.style.backgroundColor = '#353535'
    anashei.style.border = '2px solid grey'
    isologotipo.style.backgroundImage = 'url(imgs/nav-brand-logo-black.png)'
    searchText.style.color = 'white'
    aside.style.backgroundColor = 'rgba(30, 30, 30,0.6)'
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true')
        anashei.style.backgroundColor = '#353535'
        anashei.style.border = '2px solid grey'
        searchText.style.color = 'white'
        aside.style.backgroundColor = 'rgba(30, 30, 30,0.6)'
        isologotipo.style.backgroundImage = 'url(imgs/nav-brand-logo.png)'
    }
})
if(localStorage.getItem('dark-mode')==='true'){
    document.body.style.backgroundImage = 'linear-gradient(to Top, rgb(20, 20, 20) 0%, rgb(50, 50, 50) 100%)'
    document.body.classList.add('dark')
    document.body.classList.remove('light')
    navClass.classList.add('bg-dark')
    navClass.classList.remove('bg-secondary')
    navClass.classList.add('navbar-dark')
    navClass.classList.remove('navbar-light')
    themeClass.classList.add('btn-dark')
    themeClass.classList.remove('btn-light')
    isologotipo.style.backgroundImage = 'url(imgs/nav-brand-logo.png)'
}

// inspect
const anashei = document.getElementById('anashei')

const preAnashei = document.getElementById('preAnashei')
const cruz = document.getElementById('cruz')

anashei.style.display = 'none'
preAnashei.style.display = 'none' 

cruz.addEventListener('click', ()=>{
    anashei.style.display = 'none'
    preAnashei.style.display = 'none'
    bodyenso.style.overflow = 'auto'
    pGrid.style.filter = 'blur(0px)'
})
preAnashei.addEventListener('click', ()=>{
    anashei.style.display = 'none'
    preAnashei.style.display = 'none'
    bodyenso.style.overflow = 'auto'
    pGrid.style.filter = 'blur(0px)'
})    
document.addEventListener('keydown', (event) => {
    const key = event.key
    if(key == 'Escape'){
        anashei.style.display = 'none'
        preAnashei.style.display = 'none'
        bodyenso.style.overflow = 'auto'
        pGrid.style.filter = 'blur(0px)'
    }
})

//web3
let web3
async function connect(){
    await window.web3.currentProvider.enable()
    web3 = new web3(window.web3.currentProvider)
}

//array
const values = {
    "nftTitle1": "Insanity",
    "nftImage1": "imgs/nft 1.png",
    "nftDescription1": "Time travelling selfDrived virtual bot.",
    "nftPrice1": "$75",
    "nftUid1": "7f3354cb3a3d47c7",
    "nfTags1": "Insanity, insanity",

    "nftTitle2": "Protowave111",
    "nftImage2": "imgs/nft 2.png",
    "nftDescription2": "Empathyless bot called Protoboy.",
    "nftPrice2": "$75",
    "nftUid2": "cc43bbe48eda480a",
    "nfTags2": "Protowave111, protowave, protoboy, 111",

    "nftTitle3": "OBSERVER",
    "nftImage3": "imgs/nft 3.png",
    "nftDescription3": "You are never aware of him.",
    "nftPrice3": "$75",
    "nftUid3": "4e6592c887bb4d9a",
    "nfTags3": "OBSERVER, observer",

    "nftTitle4": "OBSERVER ® XL",
    "nftImage4": "imgs/nft 4.png",
    "nftDescription4": "SE ® XL.",
    "nftPrice4": "$75",
    "nftUid4": "c89b01122fb846a1",
    "nfTags4": "",
    
    "nftTitle5": "dangerLeader",
    "nftImage5": "imgs/nft 5.png",
    "nftDescription5": "You are always on danger cause of him.",
    "nftPrice5": "$75",
    "nftUid5": "d895fbbfe7124f2c",
    "nfTags5": "",
    
    "nftTitle6": "Kawaki.v1",
    "nftImage6": "imgs/nft 6.png",
    "nftDescription6": "First token on the Kawaki NFT Collection.",
    "nftPrice6": "$50",
    "nftUid6": "9a24859a4c0444cd",
    "nfTags6": "Kawaki, kawaki",
    
    "nftTitle7": "Kawaki.v2",
    "nftImage7": "imgs/nft 7.png",
    "nftDescription7": "Second token on the Kawaki NFT Collection.",
    "nftPrice7": "$50",
    "nftUid7": "12663705d2d44982",
    "nfTags7": "Kawaki, kawaki",
    
    "nftTitle8": "Kawaki.v3",
    "nftImage8": "imgs/nft 8.png",
    "nftDescription8": "Third token on the Kawaki NFT Collection.",
    "nftPrice8": "$50",
    "nftUid8": "5192056c92324347",
    "nfTags8": "Kawaki, kawaki",
    
    "nftTitle9": "Kawaki.v4",
    "nftImage9": "imgs/nft 9.png",
    "nftDescription9": "Fourth token on the Kawaki NFT Collection.",
    "nftPrice9": "$50",
    "nftUid9": "acdb3acec66844e1",
    "nfTags9": "Kawaki, kawaki",
    
    "nftTitle10": "Kawaki.v5",
    "nftImage10": "imgs/nft 10.png",
    "nftDescription10": "Fifth token on the Kawaki NFT Collection.",
    "nftPrice10": "$50",
    "nftUid10": "56b8dc28f3e64051",
    "nfTags10": "Kawaki, kawaki",
    
    "nftTitle11": "endlessScream.v1",
    "nftImage11": "imgs/nft 11.png",
    "nftDescription11": "First token on the screamer cat NFT Collection.",
    "nftPrice11": "$50",
    "nftUid11": "c84519f4fcc34288",
    "nfTags11": "",
    
    "nftTitle12": "endlessScream.v2",
    "nftImage12": "imgs/nft 12.png",
    "nftDescription12": "Second token on the screamer cat NFT Collection.",
    "nftPrice12": "$50",
    "nftUid12": "ad12288f079d4c11",
    "nfTags12": "",
    
    "nftTitle13": "endlessScream.v3",
    "nftImage13": "imgs/nft 13.png",
    "nftDescription13": "Third token on the screamer cat NFT Collection.",
    "nftPrice13": "$50",
    "nftUid13": "88ed930bfe804df0",
    "nfTags13": "",
    
    "nftTitle14": "endlessScream.v4",
    "nftImage14": "imgs/nft 14.png",
    "nftDescription14": "Fourth token on the screamer cat NFT Collection.",
    "nftPrice14": "$50",
    "nftUid14": "bcf8bcff07344958",
    "nfTags14": "",
    
    "nftTitle15": "endlessScream.v5",
    "nftImage15": "imgs/nft 15.png",
    "nftDescription15": "Fifth token on the screamer cat NFT Collection.",
    "nftPrice15": "$50",
    "nftUid15": "",
    "nfTags15": "",
    
    "nftTitle16": "Annoyed Protoboy",
    "nftImage16": "imgs/nft 16.png",
    "nftDescription16": "You don't want to be in front of him at his rage moment.",
    "nftPrice16": "$50",
    "nftUid16": "9b8b5bd050ef4744",
    "nfTags16": "",
    
    "nftTitle17": "04.EVA",
    "nftImage17": "imgs/nft 17.png",
    "nftDescription17": "Eva-04 Re-designed.",
    "nftPrice17": "$50",
    "nftUid17": "7cf1b19d127c4441",
    "nfTags17": "",
    
    "nftTitle18": "Chuck-E",
    "nftImage18": "imgs/nft 18.png",
    "nftDescription18": "Small size - big injuries.",
    "nftPrice18": "$50",
    "nftUid18": "74eb945e6f5f48ac",
    "nfTags18": "",
    
    "nftTitle19": "astroBot.v1",
    "nftImage19": "imgs/nft `9.png",
    "nftDescription19": "Astro-boy was modified to kill every existing life forms.",
    "nftPrice19": "$50",
    "nftUid19": "ff38c1b3a42949b2",
    "nfTags19": "",
    
    "nftTitle20": "astroBot.v2",
    "nftImage20": "imgs/nft 20.png",
    "nftDescription20": "He is no longer half human.",
    "nftPrice20": "$50",
    "nftUid20": "41e9c4063a224854",
    "nfTags20": "",
    
    "nftTitle21": "Texture.v1",
    "nftImage21": "imgs/nft 21.png",
    "nftDescription21": "Feel free to use this image on your personal works.",
    "nftPrice21": "$25",
    "nftUid21": "caabea9c4ad74966",
    "nfTags21": "",
    
    "nftTitle22": "Texture.v2",
    "nftImage22": "imgs/nft 22.png",
    "nftDescription22": "Feel free to use this image on your personal works.",
    "nftPrice22": "$25",
    "nftUid22": "14b41570fdf04a90",
    "nfTags22": "",
    
    "nftTitle23": "Texture.v3",
    "nftImage23": "imgs/nft 23.png",
    "nftDescription23": "Feel free to use this image on your personal works.",
    "nftPrice23": "$25",
    "nftUid23": "08a09eeba88b430f",
    "nfTags23": "",
    
    "nftTitle24": "Texture.v4",
    "nftImage24": "imgs/nft 24.png",
    "nftDescription24": "Feel free to use this image on your personal works.",
    "nftPrice24": "$25",
    "nftUid24": "cf8ddd7f131b4155",
    "nfTags24": "",
    
    "nftTitle25": "Texture.v5",
    "nftImage25": "imgs/nft 25.png",
    "nftDescription25": "Feel free to use this image on your personal works.",
    "nftPrice25": "$25",
    "nftUid25": "40ca6d423e2b40ff",
    "nfTags25": "",
    
    "nftTitle26": "Texture.v6",
    "nftImage26": "imgs/nft 26.png",
    "nftDescription26": "Feel free to use this image on your personal works.",
    "nftPrice26": "$25",
    "nftUid26": "d873bf75e8bb4347",
    "nfTags26": "",
    
    "nftTitle27": "Texture.v7",
    "nftImage27": "imgs/nft 27.png",
    "nftDescription27": "Feel free to use this image on your personal works.",
    "nftPrice27": "$25",
    "nftUid27": "b552a0a6853d4d66",
    "nfTags27": "",
    
    "nftTitle28": "Texture.v8",
    "nftImage28": "imgs/nft 28.png",
    "nftDescription28": "Feel free to use this image on your personal works.",
    "nftPrice28": "$25",
    "nftUid28": "269a90aadbf440b6",
    "nfTags28": "",
    
    "nftTitle29": "Texture.v9",
    "nftImage29": "imgs/nft 29.png",
    "nftDescription29": "Feel free to use this image on your personal works.",
    "nftPrice29": "$25",
    "nftUid29": "0acef96486304dbe",
    "nfTags29": "",
    
    "nftTitle30": "Texture.v10",
    "nftImage30": "imgs/nft 30.png",
    "nftDescription30": "Feel free to use this image on your personal works.",
    "nftPrice30": "$25",
    "nftUid30": "2bee479dd5514470",
    "nfTags30": "",
    
    "nftTitle31": "Texture.v11",
    "nftImage31": "imgs/nft 31.png",
    "nftDescription31": "Feel free to use this image on your personal works.",
    "nftPrice31": "$25",
    "nftUid31": "b681c7b194c54f72",
    "nfTags31": "",
    
    "nftTitle32": "Texture.v12",
    "nftImage32": "imgs/nft 32.png",
    "nftDescription32": "Feel free to use this image on your personal works.",
    "nftPrice32": "$25",
    "nftUid32": "c9d20f6ae1124163",
    "nfTags32": "",
    
    "nftTitle33": "Texture.v13",
    "nftImage33": "imgs/nft 33.png",
    "nftDescription33": "Feel free to use this image on your personal works.",
    "nftPrice33": "$25",
    "nftUid33": "4bc30b973c2f4a85",
    "nfTags33": "",
    
    "nftTitle34": "Texture.v14",
    "nftImage34": "imgs/nft 34.png",
    "nftDescription34": "Feel free to use this image on your personal works.",
    "nftPrice34": "$25",
    "nftUid34": "691a57e1886c4848",
    "nfTags34": "",
    
    "nftTitle35": "Texture.v15",
    "nftImage35": "imgs/nft 35.png",
    "nftDescription35": "Feel free to use this image on your personal works.",
    "nftPrice35": "$25",
    "nftUid35": "1a26a8d0321a44b1",
    "nfTags35": "",
};  

const addedToGrid = document.querySelectorAll('#added');

function load() {
    for (let i = 1; i < 36; i++) {
        let title = values[`nftTitle${i}`]
        let description = values[`nftDescription${i}`]
        let price = values[`nftPrice${i}`]
        let dataUid = values[`nftUid${i}`]
        let tag1 = values[`nfTags${i}`]
        let tag2 = values[`nfTagz${i}`]
        
        addedToGrid[i].innerHTML += `
        <div class="productBox" data-ftag="${tag1}" data-stag="${tag2}">
            <div id="photo" class="image${[i]}"></div>
        
            <h1 id="title" class="productTitle">${title}</h1>
            <p id="description" class="productDescription">${description}</p>
            <p id="price" class="productPrice">${price}</p>
        
            <div id="bitcoinPay">
                <a onclick="nft${[i]}()">
                    <button type="button" class="btn btn-secondary">Inspect</button>
                </a>
                <a class="blockoPayBtn" data-toggle="modal" data-uid="${dataUid}">
                    <button type="button" class="btn btn-dark"> Buy </button>
                </a>
            </div>
        </div>`
    }
}
load()

// search
const searchText = document.querySelector('#search-text');
const searchInput = document.querySelector('#search-input');
const searchIcon = document.querySelector('#search-icon');
const aside = document.querySelector('#aside-wrapper');
const pGrid = document.querySelector('#productGrid');
const pBox = document.querySelectorAll('.productBox')

searchInput.addEventListener(('keyup'), (e) => {
    let target = e.target.value
    for (let i = 0; i < 36; i++) {
        let pBoxed = pBox[i]
        let boxed = pBoxed.getAttribute('data-ftag')

        if(boxed.includes(target)){
            pBoxed.style.display = 'flex'
            pGrid.style.rowGap = '0px'
        }
        if(!boxed.includes(target)){
            pBoxed.style.display = 'none'
        }
        if(target == ''){
            pBoxed.style.display = 'flex'
            pGrid.style.rowGap = '40px'
        } 
    }
})

aside.addEventListener(('mouseover'), () => {
    pGrid.style.filter = 'blur(4px)'
    searchIcon.style.left = '218px'
    searchText.style.left = '5px'
})
aside.addEventListener(('mouseleave'), () => {
    pGrid.style.filter = 'blur(0px)'
    searchIcon.style.left = '5px'
    searchText.style.left = '-150px'
})