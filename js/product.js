
let selectedSize = "500g";
let selectedPrice = 650;
let quantity = 1;

function changeImage(src){
document.getElementById("mainImage").src = src;
}

function setSize(size,price,btn){
selectedSize=size;
selectedPrice=price;

document.getElementById("price").innerText="৳ "+price;

document.querySelectorAll(".sizes button")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");
}

function changeQty(value){
quantity=Math.max(1,quantity+value);
document.getElementById("qty").innerText=quantity;
}

function orderWhatsApp(){

const text=`আসসালামু আলাইকুম,

আমি GhorerDaktar-এর খাঁটি মধু অর্ডার করতে চাই।

সাইজ: ${selectedSize}
পরিমাণ: ${quantity}
মোট: ৳${selectedPrice*quantity}`;

window.open(
`https://wa.me/8801571324271?text=${encodeURIComponent(text)}`,
"_blank"
);

}
