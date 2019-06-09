/*works.html lightbox modal*/

//open gallery modal
function openModal() {
    document.getElementById('galleryModal').style.display = 'block';
    document.getElementById('header').style.display = 'none';
}

//close gallery modal
function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.getElementById('header').style.display = 'initial';
}

var slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('gallery-slide');
    let caption = document.getElementById('caption');
    let galleryImages = document.getElementsByClassName("galleryImage");
    if (n > slides.length) {slideIndex = 1;};
    if (n < 1) {slideIndex = slides.length;};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    caption.innerHTML = galleryImages[slideIndex - 1].alt;
    $(document).ready(function() {
        $('div.slide-number').html(slideIndex + ' / ' + slides.length)
    })
}

