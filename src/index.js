let openedWelcome = false
function open() {
    console.log("open")
}

const welcome = (screen)=>{
    openedWelcome = true
    screen.innerHTML = ""
    video.pause()
    list.forEach((el)=>{
    screen.innerHTML = `<div id = ${el.id} class = 'serv'>
    <div>${el.service}</div>
    <div>${el.price}</div>
    </div>${screen.innerHTML}`
    setTimeout(()=>{
        document.getElementById(`${el.id}`).addEventListener("click",(e)=>{
            e.target.innerHTML = e.target.innerHTML + `<div>${el.id}</div`
            console.log(e.target)
        })
    })
    })

    
    // screen.innerHTML = arr.join("")
    // const servs = document.getElementsByClassName("serv")
    // console.log("welcome -> servs", servs[0])
    

    // screen.innerHTML = ""
    // list.map((el)=>{
    //    const elem =  document.createElement("div")
    //    const sercive =  document.createElement("div")
    //    const price =  document.createElement("div")
       
    //    elem.addEventListener("click", ()=>{console.log("elem")})
    //    elem.setAttribute("id", el.id)
    //    elem.setAttribute("class", "serv")

    //    elem.append(sercive)
    //    elem.append(price)
    //    screen.append(elem)

    //    sercive.innerHTML = el.service
    //    price.innerHTML = el.price
    // })


}
const support = (screen)=>{
    openedWelcome = false
    screen.innerHTML = `<input placeholder='Send us message'></input>
    <button id = "but">SUBMIT</button`
    document.getElementById("but").addEventListener("click",()=>{
        console.log("cliked!")
    })
}
const contacts = (screen)=>{
    openedWelcome = false
    screen.innerHTML = "Contacts"
}

const onTab = (str)=>{
   const screen =  document.getElementById("screen")
   screen.style.display = "flex"
   screen.style.flexDirection = "column"
   switch(str) {
       case !openedWelcome && 'welcome':
       welcome(screen)
       break;
       case  'support':
       support(screen)
       break;
       case 'contacts':
       contacts(screen)
       break;
   }
}