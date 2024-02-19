// product image file id
const imageOne = document.getElementById("product_main_image");
const imageTwo = document.getElementById("product_second-image");
const imageThree = document.getElementById("product_third_image");
const imageFour = document.getElementById("product_forth_image");
const productVideo = document.getElementById("product_video");

// product images preview id
const previewOne = document.getElementById("preview_main_image");
const previewTwo = document.getElementById("preview_second_image");
const previewThree = document.getElementById("preview_third_image");
const previewFour = document.getElementById("preview_forth_image");
const previewVideo = document.getElementById("preview_video")

// products information id
const productName = document.getElementById("product_name");
const productPrice = document.getElementById("product_price");
const productDescription = document.getElementById("product_description");
const lastPrice = document.getElementById("last_price")

// warranty information id
const yes = document.getElementById("yes_warranty");
const no = document.getElementById("no_warranty");
const duration = document.getElementById("warranty_duration");
const warrantyOutput = document.getElementById("warranty_duration_output")

// stock information id
const stockQuanty = document.getElementById("stock_quantity");
const stockOutput = document.getElementById("stock_quantity_output");


// submit
const submit = document.getElementById("submit")




// image object

class ImageUpload {
  constructor() {
    this.imageOne = imageOne;
    this.imageTwo = imageTwo;
    this.imageThree = imageThree;
    this.previewOne = previewOne;
    this.previewTwo = previewTwo;
    this.previewThree = previewThree;
    this.imageFour = imageFour;
    this.previewFour = previewFour;
    this.productVideo = productVideo;
    this.previewVideo = previewVideo;
  }

  previewImageOne() {
    const imageone = this.imageOne;
    const previewone = this.previewOne;

    imageone.addEventListener("change", () => {
      const file = imageone.files[0];
      const imageUrl = URL.createObjectURL(file);

      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;

      previewone.innerHTML = ""; // Clear previous preview
      previewone.appendChild(imageElement);
    });
  }

  previewImageTwo() {
    const imagetwo = this.imageTwo;
    const previewtwo = this.previewTwo;

    imagetwo.addEventListener("change", () => {
      const file = imagetwo.files[0];
      const imageUrl = URL.createObjectURL(file);

      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;

      previewtwo.innerHTML = ""; // Clear previous preview
      previewtwo.appendChild(imageElement);
    });
  }
  previewimageThree(){
    const imagethree = this.imageThree;
    const previewthree = this.previewThree;

    imagethree.addEventListener("change", ()=>{
    const file = imagethree.files[0];
    const imageUrl = URL.createObjectURL(file);

    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    
    previewthree.innerHTML = ""; // Clear previous preview
    previewthree.appendChild(imageElement);
    })
  }
  previewimageFour(){
    const imagefour = this.imageFour;
    const previewfour = this.previewFour;

    imagefour.addEventListener("change", ()=>{
    const file = imagefour.files[0];
    const imageUrl = URL.createObjectURL(file);

    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    
    previewfour.innerHTML = ""; // Clear previous preview
    previewfour.appendChild(imageElement);
    })
  }
  previewProductVideo(){
    const video = this.productVideo;
    const previewvideo = this.previewVideo;

    video.addEventListener("change", ()=>{
      const file = video.files[0];
      const videoUrl = URL.createObjectURL(file);

      const videoElement = document.createElement("video");
      const videoSource = document.createElement("source");
      const type = document.createAttribute("type");
      type.value = "video/mp4"
      videoSource.src = videoUrl;
      videoSource.setAttributeNode(type);
      videoElement.appendChild("videoSource")
      previewvideo.innerHTML = ""
      previewvideo.appendChild(videoElement)
    })
  }
}

const product = new ImageUpload();
product.previewImageOne();
product.previewImageTwo();
product.previewimageThree();
product.previewimageFour();
product.previewProductVideo();


// discount information id
const yesDiscount = document.getElementById("yes_discount");
const noDiscount = document.getElementById("no_discount");
const discountSize = document.getElementById("percent_discount");
const discount_output =  document.getElementById("percent_discount_output");
const salesPrice = document.getElementById("selling_price");
const price = document.getElementById("dprice")

noDiscount.addEventListener("change", ()=>{
  discountSize.style.display = "none";
  price.innerText = productPrice.value;
})
function percentDiscount (){
  let cal = ((productPrice.value - lastPrice.value)/productPrice.value) * 100
  return cal
}

const discountInfo = ()=>{
  const pd = Math.floor(percentDiscount())
  const discountHeading = document.getElementById("product_discount_heading");    
  price.innerText = lastPrice.value

  let heading;
  const productPriceValue = parseFloat(productPrice.value);
  const lastPriceValue = parseFloat(lastPrice.value);
  if(productPriceValue > lastPriceValue){
    heading = `${productName.value} comes with ${pd} % Discount`;
    return discountHeading.innerText = heading;
  } else if (productPriceValue < lastPriceValue){
    heading = `${productPrice.value} is less than the last price (${lastPrice.value}): Kindly review the initial and last prices of ${productName.value}`;
    price.innerText = ""
    return discountHeading.innerText = heading;
  } else if(productPriceValue === lastPriceValue){
    heading = `You did not include a discount for ${productName.value}`
    price.innerText = productPrice.value.value
    return discountHeading.innerText = heading;
  }else{
    heading = `You did not include a discount for ${productName.value}`
    price.innerText = productPrice.value
    return discountHeading.innerText = heading;
  }
}

productName.addEventListener("input", discountInfo)
productPrice.addEventListener("input", discountInfo);
lastPrice.addEventListener("input", discountInfo)

yesDiscount.addEventListener("change", ()=>{
  lastPrice.removeAttribute("disabled")
});

noDiscount.addEventListener("change", ()=>{
  lastPrice.setAttribute("disabled", "disabled")
  lastPrice.value = ""
  price.innerText = productPrice.value
})

// productPrice.addEventListener("input", ()=>{
//   price.innerText = productPrice.value
// });

// discountSize.addEventListener("input", ()=>{
//   price.innerText = percentDiscount()
// })
const main = document.getElementsByTagName("main")
main.setAttribute("class", "signin")
