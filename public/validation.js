function validate()
{
  var customerName = document.getElementById('name').nodeValue
var nameRGEX = \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b.
var phoneNumber = document.getElementById('number').value;
var nameResult = nameRGEX.test(name);
var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
var phoneResult = phoneRGEX.test(phoneNumber);
if(phoneResult == false)
{
alert('Please enter a valid phone number');
return false;
}
 
if(postalResult == false)
{
alert('Please enter a valid postal number');
return false;
}
 
  return true;
}
}