function addBinary() {
      var binary1 = document.getElementById("binary1").value;     /* retrieves value entered in the input field with the id "binary1"*/
      var binary2 = document.getElementById("binary2").value;     /* same as binary1 that retrives and assigns value to binary2*/
      
      var decimal1 = parseInt(binary1, 2);                        /*converts binary number binary1&2 to decimal by using parseInt() function.*/
      var decimal2 = parseInt(binary2, 2);
      var sum = decimal1 + decimal2;                              /*adds the decimal values of decimal1 and decimal2 together and assigns result to variable sum*/
      var binarySum = sum.toString(2);                            /* converts sum back to a binary number by using the toString()*/

      document.getElementById("result").innerText = "Result is: " + binarySum;   /*displays result*/
      document.getElementById("decimalResult").innerText = "Decimal no.: " + sum;
    }
