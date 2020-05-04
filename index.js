
const form = document.querySelector(".my-form");
form.addEventListener("submit",function(event){
  event.preventDefault();
  checkInputs();
});
function checkInputs(){
  const name = document.querySelector(".name-of-client").value.trim();
  const crushName = document.querySelector(".name-of-crush").value.trim();
  let loveRate = Math.floor((Math.random()*10)+1);
  if(name==="" || name==null){
    document.querySelector(".form-text").style.visibility="visible";
    document.querySelector(".form-text").innerText="This cannot be empty";
    return false;
  }else {
    document.querySelector(".form-text").style.visibility="hidden";
  }
  if(crushName===""|| crushName==null){
    document.getElementById("emailHelpp").style.visibility = "visible";
    document.getElementById("emailHelpp").innerText="this cannot be empty";
    return false;
  }else {
    document.getElementById("emailHelpp").style.visibility = "hidden";
  }
  if(name.length<3){
    document.querySelector(".form-text").style.visibility="visible";
    document.querySelector(".form-text").innerText="it does'nt seem to be a name";
    return false;
  }else {
    document.querySelector(".form-text").style.visibility="hidden";
  }
  if(crushName.length<3){
    document.getElementById("emailHelpp").style.visibility = "visible";
    document.getElementById("emailHelpp").innerText="it does'nt seem to be a name";
    return false;
  }else {
    document.getElementById("emailHelpp").style.visibility = "hidden";
  }
  if(loveRate===10 || loveRate===9){
    document.querySelector(".my-result").innerText = name + " and " + crushName +" are made for each other.";
    document.querySelector(".image").setAttribute("src","images/love-and-romance.png");
    document.querySelector(".result").classList.add("visibility");
  } else if(loveRate !== 10 && loveRate!==9 && loveRate > 5){
    document.querySelector(".my-result").innerText = name + " and "+ crushName + " are nice for each other.";
    document.querySelector(".image").setAttribute("src","images/interface.png");
    document.querySelector(".result").classList.add("visibility");
  }else if(0<loveRate < 5){
    document.querySelector(".my-result").innerText = name + " and " + crushName + " are not good for each other. sorry!";
    document.querySelector(".image").setAttribute("src","images/two.png");
    document.querySelector(".result").classList.add("visibility");
  }
}
