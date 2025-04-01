document.getElementById("sidebarToggle").addEventListener("click", function() {
    const spans = document.querySelectorAll(".sidebar__item a span");
    const sidebar = document.querySelector(".dashboard__sidebar");
    const isHidden = spans[0].classList.contains("show-span");

    spans.forEach(span => {
        if (isHidden) {
            span.classList.remove("show-span");
            setTimeout(() => (span.style.display = "none"), 300); 
        } else {
            span.style.display = "inline-block";
            setTimeout(() => span.classList.add("show-span"), 10); 
        }
    });
   
        sidebar.classList.toggle('open');
   

    
    this.innerHTML = isHidden ? "&gt;" : "&lt;";
});



