let ops=document.getElementById("op");

 function display(num){
       ops.value += num;
  }    

 function clr(){
        ops.value="";
  }

  function calculate(){

     try{
      ops.value=eval(ops.value);
     }
     catch(err){
      alert("invalid input ☹")
     }
     
  }
  function del(){

    ops.value=ops.value.slice(0,-1)
  }