const Site1 = document.querySelector('#Site1') // so children can be added
// to it
const Site2 = document.createElement('div')
Site2.className = 'siteDiv'
Site2.style.cssText = 'display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; height: 729px; width: 1000px; font-size: 30px; background-color: white; margin-top: -8px; margin-bottom: -8px; background-color: white;'
const CandyTop = document.createElement('div'),
LoginDiv = document.createElement('div'),
LoginInput = document.createElement('input'),
LoginBtn = document.createElement('button'),
CandyBottom = document.createElement('div')
/*child of Site1 and contains passInput and passBtn */
CandyTop.className = 'candy'
CandyBottom.className = 'candy'
CandyTop.style.cssText = 'display: flex; justify-content: space-evenly; height: 200px; width: 800px;'
CandyBottom.style.cssText = 'display: flex; justify-content: space-evenly; height: 200px; width: 800px;'
LoginDiv.className = 'login'
LoginDiv.style.cssText = 'display: flex; flex-direction: column; height: 300px; width: 800px; justify-content: space-evenly; align-items: center;'
LoginInput.className = 'logInp'
LoginInput.style.cssText = 'height: 40px; width: 100px; border: 1px solid black;'
LoginBtn.className = 'logBtn'
LoginBtn.style.cssText = 'height: 30px; width 60px; border: 1px solid black; transition: background-color 0.3s ease; font-size: 16px;'
LoginBtn.textContent = 'enter'
const LoginText = document.createElement('div')
LoginText.textContent = 'Type a password:'
LoginText.style.cssText = 'font-size: 40px;'
Site1.appendChild(Site2)
Site2.appendChild(CandyTop)
Site2.appendChild(LoginDiv)
LoginDiv.appendChild(LoginText)//loginText = child of Login div
Site2.appendChild(CandyBottom)
LoginDiv.appendChild(LoginInput)
LoginDiv.appendChild(LoginBtn)
function DisplayCandy() {
    let i = 1
    while (i <= 3) {
        const Pics = document.createElement('img')
        Pics.src = `candy/candy${i}.png`
        Pics.style.height = '200px'
        Pics.style.width = '220px'
        CandyTop.appendChild(Pics)
        i++
    }
}
DisplayCandy()
function DisplayCookies() {
    let j = 1
    while (j <= 3) {
        const Pics1 = document.createElement('img')
        Pics1.src = `candy/cookies${j}.png`
        Pics1.style.height = '200px'
        Pics1.style.width = '220px'
        CandyBottom.appendChild(Pics1)
        j++
    }

}
DisplayCookies()
LoginBtn.addEventListener('click', (event) => {
    let Pass = LoginInput.value
    if (Pass == 'SANTA') {
        DelItems()
        //run a function that deletes everything on screen
    }
})
function DelItems() {
    let gone = 'gone'
    while (CandyTop.firstChild) {
        CandyTop.removeChild(CandyTop.firstChild)
    }
    while (CandyBottom.firstChild) {
        CandyBottom.removeChild(CandyBottom.firstChild)
    }
    while (Site2.firstChild) {
        Site2.removeChild(Site2.firstChild)
    }
    while (LoginDiv.firstChild) {
        LoginDiv.removeChild(LoginDiv.firstChild)
    }
    if (gone == 'gone'){
        appendTopMiddleBottom()
    }
}
function appendTopMiddleBottom() {
    Site2.appendChild(CandyTop)
    Site2.appendChild(LoginDiv)
    Site2.appendChild(CandyBottom)
    pbRun()
}
function pbRun() {
    PBTop()
    PBBottom()
}
const PbPic = document.createElement('img')
PbPic.src = `candy/pb.png`
PbPic.style.height = '260px'
PbPic.style.width = '210px'
const PBText = document.createElement('div'),
PB_Btn = document.createElement('button')
PB_Btn.className = 'pbBtn'
PBText.className = 'pbText'
PBText.style.cssText = 'display: flex; flex-direction: row; height: 260px; width 180px; justify-content: center; align-items: center; font-size: 18px;'
PBText.textContent = 'You sit on the hot sofa as the lights make you temporarily dizzy. The game of bravery: Pineapple Bread is approaching its final stages as everyone awaits your decision as the final survivor.'
PB_Btn.style.cssText = 'height: 20px; width: 70px; border: 1px solid black;'
PB_Btn.textContent = 'continue'
function DisplayPB(){
        LoginDiv.style.cssText = 'display: flex; flex-direction: row; height: 300px; width: 480px; justify-content: center; align-items: center; font-size: 20px;'
        LoginDiv.appendChild(PbPic)
        LoginDiv.appendChild(PBText)
        LoginDiv.appendChild(PB_Btn)
}
function PBTop(){
    let PBTop = 1
    if (count == 0){
    while (PBTop <= 3) {
        const Pics = document.createElement('img')
        Pics.src = `candy/pb${PBTop}.png`
        Pics.style.height = '200px'
        Pics.style.width = '220px'
        CandyTop.appendChild(Pics)
        PBTop++
    }
    DisplayPB()
}
else {
    while (PBTop <= 3 || count == 6) {
        const Pics = document.createElement('img')
        Pics.src = `candy/pb${PBTop}.png`
        Pics.style.height = '200px'
        Pics.style.width = '220px'
        CandyTop.appendChild(Pics)
        PBTop++
    }
}
}
function PBBottom(){
    let PBBottom = 4
    while (PBBottom <= 6 || count == 6) {
        const Pics1 = document.createElement('img')
        Pics1.src = `candy/pb${PBBottom}.png`
        Pics1.style.height = '200px'
        Pics1.style.width = '220px'
        CandyBottom.appendChild(Pics1)
        PBBottom++
    }
}
function audienceAdder() {
    if (count == 1 || count == 4) {
    let PBTop = 1
    while (PBTop <= 3) {
        const Pics = document.createElement('img')
        Pics.src = `candy/a${PBTop}.png`
        Pics.style.height = '200px'
        Pics.style.width = '220px'
        CandyTop.appendChild(Pics)
        PBTop++
    }
    let PBBottom = 4
    while (PBBottom <= 6) {
        const Pics1 = document.createElement('img')
        Pics1.src = `candy/a${PBBottom}.png`
        Pics1.style.height = '200px'
        Pics1.style.width = '220px'
        CandyBottom.appendChild(Pics1)
        PBBottom++
    }
}
if (count == 2) {
    //PBTop()
        console.log('random pineapples ran!')
        let RandomPineapples = 7
        while (RandomPineapples <= 9) {
        const Pics2 = document.createElement('img')
        Pics2.src = `candy/a${RandomPineapples}.png`
        Pics2.style.height = '200px'
        Pics2.style.width = '220px'
        CandyTop.appendChild(Pics2)
        RandomPineapples++
        }
    PBBottom()
}
if (count == 3) {
    //PBTop()
    let Plasma = 11
    while (Plasma >= 10) {
        const Pics3 = document.createElement('img')
        Pics3.src = `candy/a${Plasma}.png`
        Pics3.style.height = '200px'
        Pics3.style.width = '330px'
        CandyTop.appendChild(Pics3)
        Plasma--
    }
    PBBottom()
}
if (count == 5) {
    PBTop()
    PBBottom()
}
}
function PB_imgDel(){
    while (CandyTop.firstChild) {
        CandyTop.removeChild(CandyTop.firstChild)
    }
    while (CandyBottom.firstChild) {
        CandyBottom.removeChild(CandyBottom.firstChild)
    }
    audienceAdder()
}
let count = 0
PB_Btn.addEventListener( 'click', (event) => {
    count += 1
    if (count == 1){
        PB_imgDel()
        PBText.textContent = `"There are two boxes left. Eat the pineapple and take the prize or eat the bread and get lost." The manic faces of the audience are reflected in the host's compound eyes — They don't want to see you win. They want to see you fail.`
    }
    console.log('count:', count)
    PBTextChanger()
})
function PBTextChanger(){
    if (count == 2) {
        PBText.textContent = 'There are over nine thousand objects in the cosmos that go by the name of "pineapple." Some are rocks, some are leaves, and some are even black holes. Until you open this box, no one knows what lies within.'
        PB_imgDel()
    }
    if (count == 3) {
        PBText.textContent = 'Your brain freezes as images of the last runner-up being evaporated by a plasma pineapple rush through your mind.'
        PB_imgDel()
    }
    if (count == 4) {
        PBText.textContent = '"Pineapple or bread!?" The spectators impatiently spur you on.'
        PB_imgDel()
    }
    if (count == 5) {
        PBText.textContent = ''
        PBText.style.flexDirection = 'column'
        PBText.style.justifyContent = 'space evenly'
        PBText.appendChild(Pineapple)
        Pineapple.appendChild(PineappleBtn)
        PBText.appendChild(Bread)
        Bread.appendChild(BreadBtn)
        LoginDiv.removeChild(PB_Btn)
    }
    if (count == 6 && Choice == 'pineapple') {
        PBText.style.fontSize = '24px'
        PBText.textContent = `Ultimately, you have ${Results} gain a candy cane "pineapple".`
        console.log('results:', Results, randomNum)
    }
    else if (count == 6 && Choice == 'bread') {
        PBText.style.fontSize = '24px'
        PBText.textContent = 'Ultimately, you give up. Still, the host gives you a candy cane for surviving the game.'
    }
    if (count == 7) {
        PBText.textContent = 'Ho ho ho! Merry christmas Y/N! Here, have a candy cane: 🍬 + 🦯'
        PB_Btn.textContent = 'credits'
    }
    if (count == 8) {
        PBText.style.fontSize = '16px'
        PBText.textContent = "Credits: Dialog writers: Hsr lore writers, Website Creator: Santa, Actors: Pineapple as pineapple, Bread as bread, Smiski lifting as .5 head, Matteo as disgusted young man, Happy Feet as yellow emoji with grippers out on full display, Kaedee as Menacing young girl (Please don't show her this 🙏 she'll kill me 💀)"
        PB_Btn.textContent = 'continue'
    }
    if (count == 9) {
        PBText.textContent = 'Matteo x Caylin (🥰) as two people facing down, Julio as snachted baddie 😎, Rocks as rocks, Leaves as leaves, IX as blackhole, Shocked Black Guy as last runner-up, Adobe Plasma Gun as plasma gun and Y/N as final survivor. Thanks for going through the slides of this glorified powerpoint and Merry Christmas!'
        LoginDiv.removeChild(PB_Btn)
    }
}
const Pineapple = document.createElement('div'),
PineappleBtn = document.createElement('button'),
Bread = document.createElement('div'),
BreadBtn = document.createElement('button')
Pineapple.className = 'pb'
PineappleBtn.className = 'pb2'
Bread.className = 'pb'
BreadBtn.className = 'pb2'
Pineapple.textContent = 'Choose Pineapple with a chance to "win."'
PineappleBtn.textContent = 'Take a chance.'
Bread.textContent = 'Choose Bread.'
BreadBtn.textContent = 'Give up.'
let Choice
PineappleBtn.addEventListener('click', (event) => {
    Choice = 'pineapple'
    PBText.removeChild(Pineapple)
    Pineapple.removeChild(PineappleBtn)
    PBText.removeChild(Bread)
    Bread.removeChild(BreadBtn)
    PBText.style.flexDirection = 'row'
    PBText.style.justifyContent = 'center'
    PBText.textContent = `One doesn't get rich without taking risks! As you swallow the pineapple, a bitterness runs over your tongue.`
    LoginDiv.appendChild(PB_Btn)
    PB_imgDel()
})
BreadBtn.addEventListener('click', (event) => {
    Choice = 'bread'
    PBText.removeChild(Pineapple)
    Pineapple.removeChild(PineappleBtn)
    PBText.removeChild(Bread)
    Bread.removeChild(BreadBtn)
    PBText.style.flexDirection = 'row'
    PBText.style.justifyContent = 'center'
    PBText.textContent = `You become deeply aware of a great truth: That no matter how much money you have, you have to be alive to spend it.`
    LoginDiv.appendChild(PB_Btn)
    PB_imgDel()
})
let randomNum = Math.random(),
Results
if (randomNum <= 0.5) {
    Results = 'lost yet'
}
else if (randomNum >= 0.5) {
    Results = 'won and'
}

