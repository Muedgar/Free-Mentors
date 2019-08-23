/*
tokenValOne
confirm-token-one
helpOne
accept-id-one
deny-id-one
*/

/*part one*/
/*user one*/
function confirmOne() {
   if (document.getElementById("tokenValOne").value == "") {
   	document.getElementById("helpOne").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
   	document.getElementById("helpOne").innerHTML = "You are the mentor";
   }
}
function acceptReqOne() {
	if (document.getElementById("helpOne").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-one").innerHTML = "Request accepted";
        document.getElementById("deny-id-one").innerHTML = "Deny Request";
	}else{
		document.getElementById("helpOne").innerHTML = "Required: *Confirm mentor id is yours";
	}
}
function denyReqOne() {
	if (document.getElementById("helpOne").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-one").innerHTML = "Accept Request";
        document.getElementById("deny-id-one").innerHTML = "Request denied";
	}else{
		document.getElementById("helpOne").innerHTML = "Required: *Confirm mentor id is yours";
	}
}
/*user two*/
function confirmTwo() {
   if (document.getElementById("tokenValTwo").value == "") {
    document.getElementById("helpTwo").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpTwo").innerHTML = "You are the mentor";
   }
}
function acceptReqTwo() {
  if (document.getElementById("helpTwo").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-two").innerHTML = "Request accepted";
        document.getElementById("deny-id-two").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpTwo").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqTwo() {
  if (document.getElementById("helpTwo").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-two").innerHTML = "Accept Request";
        document.getElementById("deny-id-two").innerHTML = "Request denied";
  }else{
    document.getElementById("helpTwo").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user Three*/
function confirmThree() {
   if (document.getElementById("tokenValThree").value == "") {
    document.getElementById("helpThree").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpThree").innerHTML = "You are the mentor";
   }
}
function acceptReqThree() {
  if (document.getElementById("helpThree").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Three").innerHTML = "Request accepted";
        document.getElementById("deny-id-Three").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpThree").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqThree() {
  if (document.getElementById("helpThree").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Three").innerHTML = "Accept Request";
        document.getElementById("deny-id-Three").innerHTML = "Request denied";
  }else{
    document.getElementById("helpThree").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user four*/
function confirmFour() {
   if (document.getElementById("tokenValFour").value == "") {
    document.getElementById("helpFour").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpFour").innerHTML = "You are the mentor";
   }
}
function acceptReqFour() {
  if (document.getElementById("helpFour").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Four").innerHTML = "Request accepted";
        document.getElementById("deny-id-Four").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpFour").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqFour() {
  if (document.getElementById("helpFour").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Four").innerHTML = "Accept Request";
        document.getElementById("deny-id-Four").innerHTML = "Request denied";
  }else{
    document.getElementById("helpFour").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user five*/
function confirmFive() {
   if (document.getElementById("tokenValFive").value == "") {
    document.getElementById("helpFive").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpFive").innerHTML = "You are the mentor";
   }
}
function acceptReqFive() {
  if (document.getElementById("helpFive").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Five").innerHTML = "Request accepted";
        document.getElementById("deny-id-Five").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpFive").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqFive() {
  if (document.getElementById("helpFive").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Five").innerHTML = "Accept Request";
        document.getElementById("deny-id-Five").innerHTML = "Request denied";
  }else{
    document.getElementById("helpFive").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user six*/
function confirmSix() {
   if (document.getElementById("tokenValSix").value == "") {
    document.getElementById("helpSix").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpSix").innerHTML = "You are the mentor";
   }
}
function acceptReqSix() {
  if (document.getElementById("helpSix").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Six").innerHTML = "Request accepted";
        document.getElementById("deny-id-Six").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpSix").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqSix() {
  if (document.getElementById("helpSix").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Six").innerHTML = "Accept Request";
        document.getElementById("deny-id-Six").innerHTML = "Request denied";
  }else{
    document.getElementById("helpSix").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user seven*/
function confirmSeven() {
   if (document.getElementById("tokenValSeven").value == "") {
    document.getElementById("helpSeven").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpSeven").innerHTML = "You are the mentor";
   }
}
function acceptReqSeven() {
  if (document.getElementById("helpSeven").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Seven").innerHTML = "Request accepted";
        document.getElementById("deny-id-Seven").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpSeven").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqSeven() {
  if (document.getElementById("helpSeven").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Seven").innerHTML = "Accept Request";
        document.getElementById("deny-id-Seven").innerHTML = "Request denied";
  }else{
    document.getElementById("helpSeven").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user eight*/
function confirmEight() {
   if (document.getElementById("tokenValEight").value == "") {
    document.getElementById("helpEight").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpEight").innerHTML = "You are the mentor";
   }
}
function acceptReqEight() {
  if (document.getElementById("helpEight").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Eight").innerHTML = "Request accepted";
        document.getElementById("deny-id-Eight").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpEight").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqEight() {
  if (document.getElementById("helpEight").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Eight").innerHTML = "Accept Request";
        document.getElementById("deny-id-Eight").innerHTML = "Request denied";
  }else{
    document.getElementById("helpEight").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user nine*/
function confirmNine() {
   if (document.getElementById("tokenValNine").value == "") {
    document.getElementById("helpNine").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpNine").innerHTML = "You are the mentor";
   }
}
function acceptReqNine() {
  if (document.getElementById("helpNine").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Nine").innerHTML = "Request accepted";
        document.getElementById("deny-id-Nine").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpNine").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqNine() {
  if (document.getElementById("helpNine").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Nine").innerHTML = "Accept Request";
        document.getElementById("deny-id-Nine").innerHTML = "Request denied";
  }else{
    document.getElementById("helpNine").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user ten*/
function confirmTen() {
   if (document.getElementById("tokenValTen").value == "") {
    document.getElementById("helpTen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpTen").innerHTML = "You are the mentor";
   }
}
function acceptReqTen() {
  if (document.getElementById("helpTen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Ten").innerHTML = "Request accepted";
        document.getElementById("deny-id-Ten").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpTen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqTen() {
  if (document.getElementById("helpTen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Ten").innerHTML = "Accept Request";
        document.getElementById("deny-id-Ten").innerHTML = "Request denied";
  }else{
    document.getElementById("helpTen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user eleven*/
function confirmEleven() {
   if (document.getElementById("tokenValEleven").value == "") {
    document.getElementById("helpEleven").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpEleven").innerHTML = "You are the mentor";
   }
}
function acceptReqEleven() {
  if (document.getElementById("helpEleven").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Eleven").innerHTML = "Request accepted";
        document.getElementById("deny-id-Eleven").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpEleven").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqEleven() {
  if (document.getElementById("helpEleven").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Eleven").innerHTML = "Accept Request";
        document.getElementById("deny-id-Eleven").innerHTML = "Request denied";
  }else{
    document.getElementById("helpEleven").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user twelve*/
function confirmTwelve() {
   if (document.getElementById("tokenValTwelve").value == "") {
    document.getElementById("helpTwelve").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpTwelve").innerHTML = "You are the mentor";
   }
}
function acceptReqTwelve() {
  if (document.getElementById("helpTwelve").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-twelve").innerHTML = "Request accepted";
        document.getElementById("deny-id-twelve").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpTwelve").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqTwelve() {
  if (document.getElementById("helpTwelve").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-twelve").innerHTML = "Accept Request";
        document.getElementById("deny-id-twelve").innerHTML = "Request denied";
  }else{
    document.getElementById("helpTwelve").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user thirteen*/
function confirmThirteen() {
   if (document.getElementById("tokenValThirteen").value == "") {
    document.getElementById("helpThirteen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpThirteen").innerHTML = "You are the mentor";
   }
}
function acceptReqThirteen() {
  if (document.getElementById("helpThirteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Thirteen").innerHTML = "Request accepted";
        document.getElementById("deny-id-Thirteen").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpThirteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqThirteen() {
  if (document.getElementById("helpThirteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Thirteen").innerHTML = "Accept Request";
        document.getElementById("deny-id-Thirteen").innerHTML = "Request denied";
  }else{
    document.getElementById("helpThirteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user fourteen*/
function confirmFourteen() {
   if (document.getElementById("tokenValFourteen").value == "") {
    document.getElementById("helpFourteen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpFourteen").innerHTML = "You are the mentor";
   }
}
function acceptReqFourteen() {
  if (document.getElementById("helpFourteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Fourteen").innerHTML = "Request accepted";
        document.getElementById("deny-id-Fourteen").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpFourteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqFourteen() {
  if (document.getElementById("helpFourteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Fourteen").innerHTML = "Accept Request";
        document.getElementById("deny-id-Fourteen").innerHTML = "Request denied";
  }else{
    document.getElementById("helpFourteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user fifteen*/
function confirmFifteen() {
   if (document.getElementById("tokenValFifteen").value == "") {
    document.getElementById("helpFifteen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpFifteen").innerHTML = "You are the mentor";
   }
}
function acceptReqFifteen() {
  if (document.getElementById("helpFifteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Fifteen").innerHTML = "Request accepted";
        document.getElementById("deny-id-Fifteen").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpFifteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqFifteen() {
  if (document.getElementById("helpFifteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Fifteen").innerHTML = "Accept Request";
        document.getElementById("deny-id-Fifteen").innerHTML = "Request denied";
  }else{
    document.getElementById("helpFifteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user sixteen*/
function confirmSixteen() {
   if (document.getElementById("tokenValSixteen").value == "") {
    document.getElementById("helpSixteen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpSixteen").innerHTML = "You are the mentor";
   }
}
function acceptReqSixteen() {
  if (document.getElementById("helpSixteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Sixteen").innerHTML = "Request accepted";
        document.getElementById("deny-id-Sixteen").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpSixteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqSixteen() {
  if (document.getElementById("helpSixteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Sixteen").innerHTML = "Accept Request";
        document.getElementById("deny-id-Sixteen").innerHTML = "Request denied";
  }else{
    document.getElementById("helpSixteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user seventeen*/
function confirmSeventeen() {
   if (document.getElementById("tokenValSeventeen").value == "") {
    document.getElementById("helpSeventeen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpSeventeen").innerHTML = "You are the mentor";
   }
}
function acceptReqSeventeen() {
  if (document.getElementById("helpSeventeen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Seventeen").innerHTML = "Request accepted";
        document.getElementById("deny-id-Seventeen").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpSeventeen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqSeventeen() {
  if (document.getElementById("helpSeventeen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Seventeen").innerHTML = "Accept Request";
        document.getElementById("deny-id-Seventeen").innerHTML = "Request denied";
  }else{
    document.getElementById("helpSeventeen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user eighteen*/
function confirmEighteen() {
   if (document.getElementById("tokenValEighteen").value == "") {
    document.getElementById("helpEighteen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpEighteen").innerHTML = "You are the mentor";
   }
}
function acceptReqEighteen() {
  if (document.getElementById("helpEighteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Eighteen").innerHTML = "Request accepted";
        document.getElementById("deny-id-Eighteen").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpEighteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqEighteen() {
  if (document.getElementById("helpEighteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Eighteen").innerHTML = "Accept Request";
        document.getElementById("deny-id-Eighteen").innerHTML = "Request denied";
  }else{
    document.getElementById("helpEighteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user nineteen*/
function confirmNineteen() {
   if (document.getElementById("tokenValNineteen").value == "") {
    document.getElementById("helpNineteen").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpNineteen").innerHTML = "You are the mentor";
   }
}
function acceptReqNineteen() {
  if (document.getElementById("helpNineteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Nineteen").innerHTML = "Request accepted";
        document.getElementById("deny-id-Nineteen").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpNineteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqNineteen() {
  if (document.getElementById("helpNineteen").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-Nineteen").innerHTML = "Accept Request";
        document.getElementById("deny-id-Nineteen").innerHTML = "Request denied";
  }else{
    document.getElementById("helpNineteen").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
/*user twenty*/
function confirmTwenty() {
   if (document.getElementById("tokenValTwenty").value == "") {
    document.getElementById("helpTwenty").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpTwenty").innerHTML = "You are the mentor";
   }
}
function acceptReqTwenty() {
  if (document.getElementById("helpTwenty").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-twenty").innerHTML = "Request accepted";
        document.getElementById("deny-id-twenty").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpTwenty").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqTwenty() {
  if (document.getElementById("helpTwenty").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-twenty").innerHTML = "Accept Request";
        document.getElementById("deny-id-twenty").innerHTML = "Request denied";
  }else{
    document.getElementById("helpTwenty").innerHTML = "Required: *Confirm mentor id is yours";
  }
}

/*user twenty-one*/
function confirmTwentyOne() {
   if (document.getElementById("tokenValTwentyOne").value == "") {
    document.getElementById("helpTwentyOne").innerHTML = "Required: *Confirm mentor id is yours";
   }else{
    document.getElementById("helpTwentyOne").innerHTML = "You are the mentor";
   }
}
function acceptReqTwentyOne() {
  if (document.getElementById("helpTwentyOne").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-TwentyOne").innerHTML = "Request accepted";
        document.getElementById("deny-id-TwentyOne").innerHTML = "Deny Request";
  }else{
    document.getElementById("helpTwentyOne").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
function denyReqTwentyOne() {
  if (document.getElementById("helpTwentyOne").innerHTML == "You are the mentor") {
        document.getElementById("accept-id-TwentyOne").innerHTML = "Accept Request";
        document.getElementById("deny-id-TwentyOne").innerHTML = "Request denied";
  }else{
    document.getElementById("helpTwentyOne").innerHTML = "Required: *Confirm mentor id is yours";
  }
}
