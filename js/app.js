

$(".menu-text").click(()=>{
    const menuTemplate = `<section class="menu row">
    <div class="offset-s5 offset-m5 offset-l5 col s4 m4 l2">
        <a href=""><h3>ABOUT</h3></a>
        <a href=""><h3>WORKS</h3></a>
        <a href=""><h3>CONTACT</h3></a>
    </div>
    </section>`;

    $("#home-gif").remove();
    $("main").append(menuTemplate);
})




$(document).ready(function() {});