let shoeDetails = document.getElementById("shoe-detail-container");
let shoeSize = document.getElementById("shoe-size-container");
let reviewInfo = document.getElementById("reviews-container");

function showDetails(){
    if(shoeDetails.style.display === "none"){
        shoeDetails.style.display = "block";
    }
    shoeSize.style.display = "none";
    reviewInfo.style.display = "none";
}

function showSize(){
    if(shoeSize.style.display === "none"){
        shoeSize.style.display = "block";
    }
    shoeDetails.style.display = "none";
    reviewInfo.style.display = "none";
}

function showReview(){
    if(reviewInfo.style.display === "none"){
        reviewInfo.style.display = "block";
    }
    shoeDetails.style.display = "none";
    shoeSize.style.display = "none";
}