const dropdownBtn = document.querySelector(".dropdown--btn")
const menu = document.querySelector(".dropdown--menu")
const page = document.querySelector(".page")



console.log(dropdownBtn)
console.log(menu)
console.log(page)

const toggleDropdown = function (){
    console.log("kok")
    menu.classList.toggle('open')
}

const hidePage = function (){
page.classList.toggle('hidden')

}

dropdownBtn.addEventListener('click', function(e, menu, page) {
    console.log("click")
    e.stopPropagation
    toggleDropdown (menu)
    hidePage (page)
   
})



// const dropdownBtn = document.getElementById("dropdown--btn")
// const menu = document.getElementById("dropdown--menu")
// const page = document.getElementById("page")

// const toggleDropdown = function (){
//     console.log("kok")
//     menu.classList.toggle('open')
// }

// const hidePage = function (){
// page.classList.toggle('hidden')

// }

// dropdownBtn.addEventListener("click", function (e) {
//  e.stopPropagation
//  console.log("click")
// toggleDropdown()
// hidePage()

// })



