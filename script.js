console.log("live");



$(".send").on("click", function () {
  event.preventDefault();

  console.log("button click");

  var nameInput = $("#name").val();
  var numberInput = $("#number").val();
  var emailinput = $("#email").val();
  var messageInput = $("#message").val();

  console.log(
    "Name - " + nameInput, "Number - " + numberInput, "Email - " + emailinput, "Message - " + messageInput);

  if (nameInput, numberInput, emailinput, messageInput === "") {
    alert("Please enter a valid reply. For any fields intended to be blank please enter 'N/A'.")
  } else {
    alert("Your message has been sent!");
  }
 
});
