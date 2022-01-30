

let btnajoout = document.getElementById("btnAjout")

let body = document.querySelector("body")
let section = document.querySelector("section")
let divbtnArticle = document.querySelector(".divbtnArticle")


// les inp
let inpAjout = document.getElementById("inp1")
let inpName = document.getElementById("inpName")
let inpPanier = document.getElementById("inpPanier")

let btnArticles = document.querySelector(".btnArticles")
let btnArticles2 = document.querySelector(".btnArticles2")
let btnArticles3 = document.querySelector(".btnArticles3")
let btnArticles4 = document.querySelector(".btnArticles4")
let btnArticles5 = document.querySelector(".btnArticles5")
let btnArticles6 = document.querySelector(".btnArticles6")

let divBlueGTotal = document.querySelector(".divBlueGTotal")



let divG2 = document.querySelector(".divG2")




// div calculettes
let divcal = document.createElement("div")
divcal.className = "calculatrice"
divBlueGTotal.append(divcal)



// ecran
let divEcran = document.createElement("input")
divcal.append(divEcran)
divEcran.className='ecran'


// touches 1, 2, 3, +, ___
let div1 = document.createElement('div')
divcal.append(div1)

let p1 = document.createElement("button")
p1.innerText = "1" 
div1.append(p1)
let p2 = document.createElement("button")
p2.innerText = "2" 
div1.append(p2)

let p3 = document.createElement("button")
p3.innerText = "3" 
div1.append(p3)

let pl = document.createElement("button")
pl.innerText = "+" 
div1.append(pl)





// touches 4, 5, 6, -,
let div2 = document.createElement("div")
divcal.append(div2)

let p4 = document.createElement("button")
p4.innerText = "4" 
div2.append(p4)

let p5 = document.createElement("button")
p5.innerText = "5" 
div2.append(p5)

let p6 = document.createElement("button")
p6.innerText = "6" 
div2.append(p6)

let moins = document.createElement("button")
moins.innerText = "-" 
div2.append(moins)





// touches 7, 8, 9, *, _
let div3 = document.createElement("div")
divcal.append(div3)

let p7 = document.createElement("button")
p7.innerText = "7" 
div3.append(p7)

let p8 = document.createElement("button")
p8.innerText = "8" 
div3.append(p8)

let p9 = document.createElement("button")
p9.innerText = "9" 
div3.append(p9)

let multi = document.createElement("button")
multi.innerText = "*" 
div3.append(multi)


// BTN de nuit 
let ntBtn = document.createElement("button")
body.append(ntBtn)
ntBtn.className = "BtnModent"
ntBtn.innerHTML = '<i class="fas fa-moon"></i>'

// ____


// C, 0, =, /, __

let div4 = document.createElement("div")
divcal.append(div4)

let clean = document.createElement("button")
clean.innerText = "C" 
div4.append(clean)

let p0 = document.createElement("button")
p0.innerText = "0" 
div4.append(p0)

let egal = document.createElement("button")
egal.innerText = "=" 
div4.append(egal)

let division = document.createElement("button")
division.innerText = "/" 
div4.append(division)



// affichage des btn

let chiffre = ""

divEcran.readOnly = "readonly"

// chiffre 1
p1.addEventListener("click", function(){
    chiffre += 1
    divEcran.value += "1"
    console.log(chiffre);
})


// chiffre 2    
p2.addEventListener("click", function(){
    chiffre += 2
    divEcran.value += "2"
    console.log(chiffre);
})


// chiffre 3
p3.addEventListener("click", function(){
    chiffre += 3
    divEcran.value += "3"
    console.log(chiffre);
})





// chiffre 4
p4.addEventListener("click", function(){
    chiffre += 4
    divEcran.value += "4"
    console.log(chiffre);
})


// chiffre 5
p5.addEventListener("click", function(){
    chiffre += 5
    divEcran.value += "5"
    console.log(chiffre);
})


// chiffre 6
p6.addEventListener("click", function(){
    chiffre += 6 
    divEcran.value += "6"
    console.log(chiffre);
})


// chiffre 7
p7.addEventListener("click", function(){
    chiffre += 7
    divEcran.value += "7"
    console.log(chiffre);
})


// chiffre 8
p8.addEventListener("click", function(){
    chiffre +=8 
    divEcran.value += "8"
    console.log(chiffre);
})


// chiffre 9
p9.addEventListener("click", function(){
    chiffre +=9
    divEcran.value += "9"
    console.log(chiffre);
})



// chiffre 0
p0.addEventListener("click", function(){
    chiffre += 0
    divEcran.value += "0"
    console.log(chiffre);
})




// OPERAATEURS
var operateurs;

var chiffre2;
var reponse;

// opé +
pl.addEventListener("click", function(){
    chiffre2 = divEcran.value
    divEcran.value = ""
    operateurs = "+"
})

// opé -
moins.addEventListener("click", function(){
    chiffre2 = divEcran.value
    divEcran.value = ""
    operateurs = "-"
})

// opé *
multi.addEventListener("click", function(){
    chiffre2 = divEcran.value
    divEcran.value = ""
    operateurs = "*"
})

// opé /
division.addEventListener("click", function(){
    chiffre2 = divEcran.value
    divEcran.value = ""
    operateurs = "/"
})

// opé = 
egal.addEventListener("click", function(){
    
    var contenu2 = parseInt(divEcran.value)
    switch (operateurs) {
        case "+":
            reponse = parseInt(chiffre2) + contenu2
            divEcran.value = reponse
            break;
        case "-":
            reponse = parseInt(chiffre2) - contenu2
            divEcran.value = reponse
            break;
        case "*":
            reponse = parseInt(chiffre2) * contenu2
            divEcran.value = reponse
            break;
        case "/":
            reponse = parseInt(chiffre2) / contenu2
            divEcran.value = reponse
            break;
    
        default:
            break;
    }
})


clean.addEventListener("click", function(){
    chiffre2 += 0
    divEcran.value = " "
})

// __________________________________________________



btnajoout.addEventListener("click", function () {
    // creation d'element
    // ceate div
    var divTodo = document.createElement("div")
    divTodo.className = "divTodo"
    section.append(divTodo)


    var divindiv1 = document.createElement("div")
    divTodo.append(divindiv1)
    divindiv1.className = "divInDiv1"

    var p2InDivTodo = document.createElement("h1")
    divindiv1.append(p2InDivTodo)
    p2InDivTodo.classList.add("p2InDivTodo")

    p2InDivTodo.innerHTML = "panier: " + inpPanier.value
    inpPanier.value = ""

    var pInDivTodo = document.createElement("p")
    divindiv1.append(pInDivTodo)
    pInDivTodo.classList.add("pInDivTodo")

    pInDivTodo.innerHTML = "nom: " + inpName.value
    inpName.value = ""

    var hr = document.createElement("hr")
    divindiv1.append(hr)
    hr.className = "hrViaJs"


    var h2InDivTodo = document.createElement("p")
    divindiv1.append(h2InDivTodo)
    h2InDivTodo.innerHTML = "Articles: "
    h2InDivTodo.className = "h2InDivTodo"

    var pInDivTodo1 = document.createElement("p")
    divindiv1.append(pInDivTodo1)
    pInDivTodo1.classList.add("pInDivTodo1")

    pInDivTodo1.innerText = btnArticles.value
    btnArticles.value = ""


    var pcalcul = document.createElement("p")
    divindiv1.append(pcalcul)
    pcalcul.innerHTML = "TOTAL: " +  divEcran.value + " €"
    divEcran.value = ""

})