const MainmenuItems= [
    {name:"Home", href:"index.html"},
    {name:"Design", href:"design/index.html"},
    {name:"Theory", href:"theory/index.html"},
    {name:"About", href:"about/index.html"}
]
export function initialise(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let MainmenuItem of MainmenuItems){
        const li=document.createElement("li")
        if(currentPage = MainmenuItem.name){
            const a = document.createElement("a")
            a.innerText = MainmenuItem.name
            a.setAttribute("href", MainmenuItem.href)
            li.appendChild(a)
        } else {li.innerText=MainmenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

const BackToMainmenuItems= [
    {name:"Home", href:"../index.html"},
]
export function initialiseBackToMain(currentPage){
    const nav=document.querySelector("header > nav")
    const ul=document.createElement("ul")
    const li=document.createElement("li")
    for(let BackToMainmenuItem of BackToMainmenuItems){
        const li=document.createElement("li")
        if(currentPage =BackToMainmenuItem.name){
            const a=document.createElement("a")
            a.innerText=BackToMainmenuItem.name
            a.setAttribute("href", BackToMainmenuItem.href)
            li.appendChild(a)
        } else {li.innerText=BackToMainmenuItem.name}
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}