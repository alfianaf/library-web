checkSession();

function checkSession(){
    const storedSession = localStorage.getItem("session");
  if(storedSession===null){
    window.location = "../login.html";
  } else{
    console.log(storedSession);
  }
}

