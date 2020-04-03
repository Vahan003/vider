
const welcome = (screen)=>{
    
    
    screen.innerHTML = ""
    video.play()
    setTimeout(()=>{
     video.pause()
    }, 3000)
    list.forEach((el)=>{
    screen.innerHTML += `<div  class = 'serv'>
    <div class = 'data'>
    <div>${el.service}</div>
    <div>${el.price}</div>
    </div>
    <div id = ${el.id} ><button class= 'but'>More</button></div>
    </div>`
    setTimeout(()=>{
        document.getElementById(`${el.id}`).addEventListener("click",()=>{
            const aside =  document.getElementById("aside")
            aside.style.display = "flex"
            aside.style.flexDirection = "column"
            aside.innerHTML = `<div class = "inf">MORE INFORMATION ABOUT ${el.service}</div>`
        })
    })
    })
}

const support = (screen)=>{
    screen.innerHTML = ""
    video.play()
    setTimeout(()=>{
     video.pause()
    }, 3000)
    screen.innerHTML = `<textarea id = 'inp' cols='40' rows='5' placeholder = 'Send us message'></textarea>
    <button class = 'but'>SUBMIT</button`
    document.getElementById("but").addEventListener("click",()=>{
        console.log("cliked!")
    })
}
const contacts = (screen)=>{
    screen.innerHTML = ""
    video.play()
    setTimeout(()=>{
     video.pause()
    }, 3000)
    screen.innerHTML = `<div class = 'cont'>
      Mail: blabla@mail.ru <br><br>
      Tel: +8 959 5651 11
    </div>`
}

const onTab = (str)=>{
   const screen =  document.getElementById("screen")
   screen.style.display = "flex"
   screen.style.flexDirection = "column"
   switch(str) {
       case true && 'welcome':
       welcome(screen)
       break;
       case  true && 'support':
       support(screen)
       break;
       case true && 'contacts':
       contacts(screen)
       break;
   }
}