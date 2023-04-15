//variable

const contaner=document.getElementsByClassName("contaner")
// console.log(contaner)
for (let i = 0; i < contaner.length; i++) { 

    contaner[i].addEventListener("click",function () {
        this.classList.toggle('active');
    })

}