let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config parameter
let countItem = items.length;
let itemActive = 0;

//event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive=0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
}
//auto run slider
let refreshIntervel = setInterval(() => {
    next.click();
}, 5000)


function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
   
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    //clear auto time run slider
    clearInterval(refreshIntervel);
    refreshIntervel = setInterval(() => {
        next.click();
    }, 5000)
    
}

//click thumbnail
thumbnails.forEach((thumbnail , index) => {
    thumbnail.addEventListener('click' , () =>{
        itemActive = index;
        showSlider( );
    })
})