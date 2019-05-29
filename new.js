$(document).ready(function() {
    var sidebarStatus = 'hidden';
    $("#menu-icon").click(function(){
        
        if(sidebarStatus == 'hidden'){
            $("#hamburger").toggleClass('active');
            $("#sidebar").toggleClass('show-sidebar');
            
            sidebarStatus = 'visible';
        }
        

        else if( sidebarStatus == 'visible'){
            $("#hamburger").toggleClass('active');
            $("#sidebar").toggleClass('hide-sidebar');
            

            sidebarStatus = 'hidden';
        }


    });

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

});