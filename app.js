let span = document.getElementById("point__selected")



function submitBtn(){  
  let ratingstate = document.getElementById("Rating__state")
  let thankyoustate = document.getElementById("Thank__you__state")
  ratingstate.classList.add("oculto")
  thankyoustate.classList.remove("oculto")
  setInterval("location.reload()", 10000);
}

const punto = document.querySelectorAll('.Rating__state-item')
punto.forEach( (cadapunto, i)=>{  
  punto[i].addEventListener('click',()=>{    
    punto[i].classList.toggle("activo")    
    span.innerText = i+1  
  })
})


  


 









