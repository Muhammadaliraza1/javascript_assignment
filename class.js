document.getElementById("calculateBtn").
addEventListener("click", function ()
{
    
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter numbers!");
    return;
  }
  
    document.getElementById("result").textContent =  "The sum of " + num1 + " and " + num2 + " is " + sum;
    
});

// ASSIGMENT HEADING BUTTON //
document.getElementById("headingone").
addEventListener("click", function ()
{
  alert("Sir neeche fill kare");
  
});
document.getElementById("headingone2").
addEventListener("click", function ()
{
  alert("Sir neeche fill kare");
  
});
document.getElementById("headingone3").
addEventListener("click", function ()
{
  alert("Sir neeche fill kare");
  
});
// ASSIGMENT HEADING BUTTON END //



// first calculator End //


// second calculator start 

function calculateDiscount() {
  // Get user input values
  let userName = document.getElementById('name').value;
  let purchaseAmount = parseFloat(document.getElementById('amount').value);

  // Check if input values are valid
  if (!userName || isNaN(purchaseAmount) || purchaseAmount <= 0) {
      document.getElementById('result2').innerText = 'Please enter a valid name and purchase amount.';
      return;
  }

  // Calculate the discount amount (10% of the purchase amount)
  let discountAmount = (purchaseAmount * 10) / 100;

  // Calculate the final amount after applying the discount
  let finalAmount = purchaseAmount - discountAmount;

  // Display the result to the user
  document.getElementById('result2').innerHTML = `
      <strong>Hello, ${userName}!</strong><br>
      Original Purchase Amount: PKR.${purchaseAmount.toFixed(2)} <br>
      Discount (10%): PKR.${discountAmount.toFixed(2)} <br>
      Final Amount to Pay: PKR.${finalAmount.toFixed(2)}
  `;
}

// second calculator end 


// third calculator start 

function showComment() {
  // Get user input
  const animalName = document.getElementById('animal').value.trim();

  // Check if input is valid
  if (!animalName) {
      document.getElementById('result3').innerText = 'Please enter your favorite animal!';
      return;
  }

  // Capitalize first letter of the animal name
  const formattedAnimalName = animalName.charAt(0).toUpperCase() + animalName.slice(1);

  // Generate positive comment using string interpolation
  const positiveComment = `Wow, ${formattedAnimalName}s are amazing creatures!`;
  
  // Display the result
  document.getElementById('result3').innerText = positiveComment;
}