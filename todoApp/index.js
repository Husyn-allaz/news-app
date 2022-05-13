// local storda saxlamaq ucun bos arraya push edirik
// kopyalamaqla daha muasir usul edecik
// localStorage yazanda melumatlar saxlanilir yenisi elave olunanda kohneler silinir deye Json.parse elave edib if serti verdik

let store = localStorage.getItem("studentData")

let studentData = store ? JSON.parse(store) : [];
console.log(studentData);


let renderPage = (arr) =>{
    document.querySelector("ul").innerHTML = arr.map((person,index) =>{
        return( `<li><strong>${index+1}:</strong>${person.full_name} / ${person.age}</li>`);
    }).join("");
}

// preventDefault refresh eliyende melumatlari itirmir

document.querySelector("#sendButton").addEventListener("click",function(e){
    e.preventDefault()

    let full_name = document.querySelector("#todofullName").value 
    let age = document.querySelector("#todoage").value

    let form = {
        full_name,
        age
    };

    // studentData.push(form)
    studentData = [...studentData, form];
    console.log(studentData);

    localStorage.setItem("studentData",JSON.stringify(studentData))
    renderPage(studentData);
})

renderPage(studentData);

