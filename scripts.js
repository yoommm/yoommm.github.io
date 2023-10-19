   /*performs the conversion of a decimal number to binary.*/
  function convertToBinary() {                                                                      
    var number = document.getElementById("number").value;                                              /*retrieves value entered in the input field with the id "number" and assigns it to the variable number'*/
    var decimal = parseInt(number, 10);                                                               /* converts number variable into an integer using the parseInt() function*/
    var binary = decimal.toString(2);                                                                /*converts decimal number decimal to binary by using the toString()*/
    document.getElementById("binaryResult").innerText = "Binary is: " + binary;                        /*displays the binary representation/result*/
    }
  /*converts the decimal number to octal by using toString(8)*/
  function convertToOctal() {
    var number = document.getElementById("number").value;                                              /*retrieves value entered in the input field with the id "number" and assigns it to the variable number'*/   
    var decimal = parseInt(number, 10);                                                               /* converts number variable into an integer using the parseInt() function*/
    var octal = decimal.toString(8);                                                                 /*converts decimal number decimal to binary by using the toString()*/
    document.getElementById("octalResult").innerText = "Octal is: " + octal;                           /*displays the octal representation/result*/
    }
  /*converts the decimal number to hexadecimal by using toString(16)*/
  function convertToHexadecimal() {
    var number = document.getElementById("number").value;                                              /*retrieves value entered in the input field with the id "number" and assigns it to the variable number'*/   
    var decimal = parseInt(number, 10);                                                               /* converts number variable into an integer using the parseInt() function*/
    var hexadecimal = decimal.toString(16).toUpperCase();                                            /*converts decimal number decimal to binary by using the toString()*/
    document.getElementById("hexadecimalResult").innerText = "Hexadecimal is: " + hexadecimal;         /*displays the hexadecimal representation/result*/
    }
    