// view more info of mentor 
var stateObj = {
	status: "two"
}
function viewMore() {
     // select two h3 elements
     var classOne = document.getElementById("class-two-one");
     var classTwo = document.getElementById("class-two-two");
     
     var state = stateObj.status;
  
     // display class one else two
     if (state == "two") {
     	// make them disappear or appear
     classOne.style.display = "none";
     classTwo.style.display = "block";
     }else if (state == "one") {
     	// make them disappear or appear
     classOne.style.display = "block";
     classTwo.style.display = "none";
     }

     // change state
     if (stateObj.status == "two") {
     	stateObj.status = "one";
     }else if (stateObj.status == "one") {
     	stateObj.status = "two";
     }
     console.log(stateObj.status);
}