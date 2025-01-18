Task Requirements
Develop a responsive React application that meets the following criteria:
Website Layout
1. The website should have two main sections:
o Left Section: Contains a form.
o Right Section: Displays a live preview of the form's input.
2. On smaller devices, the live preview section should appear below the form, occupying the
full width, with a maximum width of 400px.
Form Details
The form in the left section should include the following input fields:
• Spa Name: Text input.
• City: Text input.
• Area: Text input.
• Images: File input for uploading multiple images.
• Price: Number input.
• Timing: Time input.
Live Preview
1. The right section should display a live preview of the data entered in the form, styled
exactly as specified.
2. Changes in any form input field should instantly reflect in the live preview.
3. For the uploaded multiple images:
o Use the Swiper.js library to display them in a carousel format.
o The Swiper carousel must update dynamically to show the selected images.
Submit Functionality
1. On clicking the Submit button, the form data should be sent via a POST request to the
provided API endpoint.
2. Ensure the payload structure matches the specified API requirements.
API Details
• Endpoint: http://20.193.149.47:2242/spas/vendor-spa-update-test/1/
• Payload Structure:
Json payload
{
“spa_name” : “spa for test”,
“city” : “ahmdebad”,
“area” : “aaa”,
“price” : 33,
“timing” : “10:00:00”,
“images” : (multiple image field)
}
Additional Requirements
1. Ensure the application is fully responsive.
2. Use appropriate CSS to achieve the specified design.
3. Write clean, readable, and maintainable code.
Evaluation Criteria
• Functional correctness.
• Adherence to the design and responsiveness.
• Efficient state management and code quality.
• API integration and accurate payload structure.
• Proper use of Swiper.js for multiple images.

 