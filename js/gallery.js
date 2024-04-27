/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    console.log("upDate event triggered");
    console.log(previewPic.alt);
    console.log(previewPic.src);
    x=document.getElementById("image");
    x.style.backgroundImage = "url('" + previewPic.src + "')";
    x.innerHTML = previewPic.alt;
}

function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    console.log("unDo event triggered");
    x=document.getElementById("image");
    x.style.backgroundImage = "url('')";
    x.innerHTML = "Hover over an image below to display here.";
}

function sortImages(){
    let imagesList = document.querySelectorAll("#allImages img");
    let arrayLength = imagesList.length;
    let arrayIndices = Array.from(Array(arrayLength).keys());
    let currentIndex = 0;
    while (arrayLength >= 1) {
        let randomNumber = Math.floor(Math.random() * (arrayLength-0.0001));
        let randomIndex = arrayIndices[randomNumber];
        imagesList[currentIndex].src = imagesList[randomIndex].src;
        arrayIndices.splice(randomNumber,1);
        arrayLength--;
        currentIndex++;
    }
}
