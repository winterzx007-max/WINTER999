if(localStorage.getItem("credit")==null){
  localStorage.setItem("credit",1000);
}

function credit(){ return parseInt(localStorage.getItem("credit")); }
function setCredit(c){ localStorage.setItem("credit",c); }

function updateCredit(){
  let el=document.getElementById("credit");
  if(el) el.innerText=credit();
}

function useCredit(n){
  if(credit()>=n){
    setCredit(credit()-n);
    updateCredit();
    return true;
  }
  alert("Not enough credits!");
  return false;
}

function reward(n){
  setCredit(credit()+n);
  updateCredit();
  showPopup("You earned "+n+" credits!");
}

function showPopup(t){
  let p=document.getElementById("popup");
  if(!p) return;
  p.innerText=t;
  p.style.display="block";
  setTimeout(()=>p.style.display="none",1500);
}

function go(p){ location.href=p; }

updateCredit();