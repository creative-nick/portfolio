

<!-- Optional JavaScript --> 
<!-- jQuery first, then Popper.js, then Bootstrap JS --> 
<script src="assets/js/jquery.min.js"></script> 
<script src="assets/js/popper.min.js"></script> 
<script src="assets/js/bootstrap.min.js"></script> 
<script src="assets/js/owl.carousel.js"></script>
<script>
$('.owl-carousel').owlCarousel({
    stagePadding: 80,
    loop:false,
    margin:15,
    nav:true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
		1400:{
            items:4
        }
    }
})
</script>
<script src="//npmcdn.com/isotope-layout@3/dist/isotope.pkgd.js"></script> 

<script src="assets/js/script.js"></script>
<script>
$('.carousel').carousel({
  interval: 5000
})
</script>

</body>
</html>