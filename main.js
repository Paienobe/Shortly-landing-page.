const burgerMenu =  document.querySelector("#ham-btn")
const navList = document.querySelector(".nav-list")

burgerMenu.addEventListener("click", () => {
    navList.classList.toggle("show-list")
})

const userLink = document.getElementById("url-input")
const shortenBtn = document.querySelector(".shorten")
let apiUrl = `https://api.shrtco.de/v2/shorten?url=`
let attachedLink = ""

const linksHouse = document.querySelector(".links-house")

shortenBtn.addEventListener("click", () => {
   apiUrl += userLink.value
   shortenLink()
   userLink.value = ""
}) 


async function shortenLink() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    let originalLink = data.result.original_link
    let shortLink = data.result.short_link
    
    linksHouse.innerHTML +=    `<div class="shortened">
    <a class="full-link" target="_blank">${originalLink}</a>
    <hr>
    <div class="results">
        <a class="short-link" target="_blank">${shortLink}</a>
        <button class="copy">Copy</button>
    </div>
 </div>`
 apiUrl = `https://api.shrtco.de/v2/shorten?url=`

 const copyBtn = document.querySelectorAll(".copy")
    copyBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            let neededLink = btn.parentElement.firstElementChild.textContent
            navigator.clipboard.writeText(neededLink)
            btn.style.backgroundColor = "hsl(257, 27%, 26%)"
            btn.style.color = "white"
            btn.textContent = "Copied!"
        })
    })

}

