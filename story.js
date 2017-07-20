function submit(){ 
  document.getElementById("btnSubmit").style.visibility = "hidden";
  document.getElementById("btnNext").style.visibility="visible";
  document.getElementById("Name").style.visibility = "hidden";
  document.getElementById("story").innerHTML="In the future…As of yet there are been no successful attempts to change our course towards Global Warming, as a result temperatures have been rising, there is acid rain, rising sea levels, mass extinction of vital crops and livestock, as well as unexpected and devastating natural disasters with no ozone layer, the polar ice caps have disappeared "
+ document.getElementById("Name").value + ", it's up to you to you to save the planet!"
}

function next(){
  document.getElementById("btnNext").style.visibility = "hidden";
  document.getElementById("btnNext2").style.visibility="visible";
  document.GetElementById("story")="You begin your day using your own recycled water to take 5 minute shower, then you dress in all-plastic clothing since natural fibers are a rarity now. You turn on the news and hear the daily warnings about the storms and floods, hoping that you won’t be hit this time. You eat your synthetic breakfast, actual fruits, vegetables, and meat are only for the rich who can pay the inflated prices."</p>
}  
function next2(){
  document.getElementById("btnNext2").style.visibility = "hidden";
  document.getElementById("btnpress").style.visibility="visible";
  document.getElementById("btnnotalk").style.visibility="visible";
  document.getElementById("btntalk").style.visibility="visible";
  document.GetElementById("story")="As you clean your dusty closet you discover a stranger machine." <br> "Do you press the button?"</p>
}  
  <p>Type 'press' or 'no press'.</p>
}  
function press(){
  document.getElementById("btnpress").style.visibility = "hidden";
  document.getElementById("btnnopress").style.visibility="hidden";
  document.getElementById("btntalk").style.visibility="visible";
  document.getElementById("btnnotalk").style.visibility="visible";
  document.GetElementById("story")="The machine whirs and then you black out for a while."</p>
}  
 function nopress(){
   document.getElementById("btnnopress").style.visibility = "hidden";
   document.getElementById("btnpress").style.visibility="hidden";
   document.getElementById("btnNext").style.visibility="visible";
   document.GetElementById("story")="A few minutes later, as you grab your camera, you accidentally knock over the strange machine. It starts whirring and then you black out.</p>
} 
<p>"You wake up in a park. You immediately take note of the healthy trees and green grass. The trees provide cool shade. No one is wearing a respirator. You pick up the machine that is next to you in the grass. It must have sent you back in time. Time machines have a cooldown of 12 hours." <br> "You see a woman walking by, do you talk to her?"</p>
} 
 <p>Type 'talk' or 'no talk</p>
 function talk(){
     document.getElementById("btntalk").style.visibility = "hidden";
     document.getElementById("btnnotalk").style.visibility = "hidden";
//   document.getElementById("btnNext").style.visibility="visible";
     document.GetElementById("story")="Excuse me miss, what is the date today?"</p>
}  
    <p>'Uh' 'she checks her phone', "today is (feature creep)"</p>
    <p>"You thank her and walk out of the park and pass a newspaper stand"</p>
 
 function no talk(){
     document.getElementById("btntalk").style.visibility = "hidden";
     document.getElementById("btnnotalk").style.visibility = "hidden";
//   document.getElementById("btnNext").style.visibility="visible";
     document.GetElementById("story")="You get up and walk out of the park. People stare at your plastic clothes."<br> "You pass a newspaper stand and realize that today is (feature creep)."</p>
}  
  <p> "The headline on the newspaper says: “LAST CHANCE TO SAVE OUR PLANET FROM CLIMATE CHANGE!” <br> "As you continue your stroll, you realize that this opportunity is the perfect time to make a difference and reverse the damage of the future. You begin your course to the Environmental Protection Agency, determined to show government officials the drastic changes which will occur in the near future if people don’t change their ways." </p>
 <p>"You arrive at the agency and show them pictures from the future and at the sight of such horrific conditions they wonder what they can do so you can grow up in a healthy world." <br> 'Well, what do you think we can do to save the planet?” </p> <br>
 <p>"Here is a checklist, choose all options that can help the environment!"</p>
