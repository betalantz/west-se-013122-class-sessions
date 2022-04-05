

# Deliverables
Create a rails app 

>Note: if you get stuck review Active Record Validations and Controller Validations 

You've been hired to create a Game Review app. It will have a React client and Rails api. 



1. Add some validations to your models. Game price should be above 0, User username should be unique and present, review should be between 10 to 300 words. 
 <details>
      <summary>
        solution 
      </summary>
      <hr/>
         <img src="assets/valid_price.png"
        alt="valid game"
        style="margin-right: 10px;" />
      <hr/>
       <img src="assets/valid_user.png"
        alt="valid user"
        style="margin-right: 10px;" />
      <hr/>
       <img src="assets/valid_review.png"
        alt="valid review"
        style="margin-right: 10px;" />
      <hr/>
      <hr/>
 </details>

2. Test that your validations work in the console. Once confirmed moved to one of your controllers and create strong params. Remove the nested params by formatting wrapped params in `config/initializers/wrap_parameters.rb`

 <details>
      <summary>
        solution 
      </summary>
      <hr/>
      <img src="assets/user_params.png"
        alt="strong params"
        style="margin-right: 10px;" />
        <img src="assets/wrapped_params.png"
        alt="strong params"
        style="margin-right: 10px;" />
      <hr/>
 </details>

3. Handel the failed validation errors in your controller.

 <details>
      <summary>
        solution 
      </summary>
      <hr/>
      <img src="assets/handel_errors_pt1.png"
        alt="errors"
        style="margin-right: 10px;" />
      <hr/>
 </details>

 4. Test your validations with postman. 
 >Note: you might get a 404 not found error, where do you think this error is coming from? How do you fix it?
 
 <details>
      <summary>
        solution 
      </summary>
      <hr/>
      <img src="assets/post_man_valid.png"
        alt="postman"
        style="margin-right: 10px;" />
      <hr/>
 </details>



 Bonus
 5. Repeat 2 - 4 for every controller and validation