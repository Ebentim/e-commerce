let productDetails =  document.querySelectorAll(".details");
let add =  document.querySelectorAll(".plus");
let myProductPreview = document.getElementById("myProductPreview");
let shopDiv = document.querySelector(".shop-div");
let imageElement = document.createElement("img");
let backButton =  document.createElement("button");
backButton.textContent = "Back";
backButton.style.backgroundColor = "black";
let addButton = document.createElement("button");
addButton.textContent = "Add to Cart";
addButton.style.backgroundColor = "orange"
const buttons = [addButton, backButton];
const buttonsClass = ["p-2", "text-white", "text-center"];
buttons.classList
let productPreviewAppend = [imageElement, ...buttons]

const preview = ()=>{
  imageElement.src = "/products/oscarPhone-PhotoRoom.png-PhotoRoom.png"
  myProductPreview.appendChild(...productPreviewAppend);
  shopDiv.style.display = "none"
};
productDetails.forEach( (view)=>{
  view.addEventListener("click", preview)
})







































// const productPreview = ()=> {
//   productDetails.forEach(function(view){
//     view.addEventListener("click", function(){
//       shopDiv.style.display = "none"
//       const imgDiv = document.createElement("div");
//       const imgDivClass = ["d-flex", "no-wrap", "p-2", "imgDiv"];
//       imgDiv.classList.add(...imgDivClass);

//       //create Images and preview them

//       const proImage1 = document.createElement("img");
//       proImage1.src = "/images/shopper.png";
//       imgDiv.appendChild(proImage1)

//       const proImage2 =  document.createElement("img");
//       proImage2.src = "/images/shopper.png";
//       imgDiv.append(proImage2)
//       proImage2.style.marginLeft = "15px"
//       myProductPreview.appendChild(imgDiv);
//       // Add to cart button and back buttons;

//       const preview = document.createElement("input");
//       preview.value = "Add to Cart"
//       preview.type = "submit"
//       preview.id = "added"
//       const previewClass = ["preview_add", "bg-orange", "border-0", "p-2"];
//       preview.classList.add(...previewClass);
//       myProductPreview.appendChild(preview);
//       // Add to cart event 
//       const adds = document.querySelector("#added");
//       adds.addEventListener("click", function(){
//       adds.style.backgroundColor = "red";
//       });
//       const back = document.createElement("input");
//       back.value = "Back";
//       back.id = "back";
//       back.type = "submit";
//       const backClass = ["bg-dark", "border", "text-white", "p-2", "ms-3"];
//       back.classList.add(...backClass)
//       myProductPreview.appendChild(back);
//       back.addEventListener("click", ()=>{
//         shopDiv.style.display = "block"
//         myProductPreview.style.display = "none"
//       })
//     })
//   })
// };

// productPreview()
// adedd()