document.getElementById("my").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("home").value;
    console.log("home:" + name)

});
document.getElementById("my").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("email").value;
    console.log("home:" + name)

});
document.getElementById("my").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("psw 1").value;
    console.log("home:" + name)
    
});
document.getElementById("my").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("psw 2").value;
    console.log("home:" + name)
    
});
function myFunction() {
    location.replace("https://github.com/VladChorny/Web-2")
}
