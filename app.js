var bill=document.querySelector("#bill-input");
var cashGiven=document.querySelector("#cash-input");
var btnSelector=document.querySelector("#btn");
var output=document.querySelector("#return-money");
var denomination=document.querySelectorAll("#denomination");
var hideInitial=document.querySelector("#hide-initial");
var total=document.querySelector("#total");
var times=0;


function clickHandler(){
    if(bill.value<0 || cashGiven.value<0){
        alert("How can cash be negative! Please be logical!");
        exit;
    }
    if(cashGiven.value==0){
        alert("Very Shameful! First give the money then ask for the change");
        exit;
    }
    else if(bill.value==cashGiven.value){
       
        output.innerText=("Congratulations! You paid the full amount! Please do visit us again");
       
    }
    else if (Number(bill.value) > Number(cashGiven.value)){
        times++;
        output.innerText=("Chef is waiting for you to wash Utensils");
        if(times>=3){alert("Calling police!")}
    }
    else{
   var t=[2000,500,100,50,20,10,5,1];


   var cashToReturn=(cashGiven.value-bill.value);
     
         for(let i=0;i<t.length;i++){
             var noOfNotes=Math.trunc(cashToReturn/t[i]);
             cashToReturn=cashToReturn%t[i];
            denomination[i].innerText=noOfNotes;
            if(denomination[i].innerText!=0){
            denomination[i].style.backgroundColor="rgb(238, 23, 123)";
            denomination[i].style.borderRadius="0.5rem";}
            else
            denomination[i].style.backgroundColor="initial";
         }
      total.innerText="Total Amount to be returned : "+(cashGiven.value-bill.value);
      output.innerText="Thankyou for shopping with us! Next time please pay us online😁, this logic building for no. of notes is too tiresome!🤣";
};
}
function hide(){
    
    hideInitial.style.display="none";
}
hide();
bill.addEventListener("keydown",show);
function show(){hideInitial.style.display="initial";}
btnSelector.addEventListener("click",clickHandler);