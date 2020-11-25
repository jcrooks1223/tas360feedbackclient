scaleModal = function(){
    var modal = document.getElementById("scaleModal");
    document.getElementById("updateText").value = " "
    modal.style.display = "block";
    document.getElementById("updateSubmit").setAttribute('onclick','closeModal()');
    var span = document.getElementsByClassName("close")[0];
}
