document.getElementById("login-submit").addEventListener("click", function()
{
    // console.log("Button Clicked");

    // Get User Email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // console.log(userEmail);

    // Get User Password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // Check useremail and password
    if(userEmail == "pritamcse66@gmail.com" && userPassword == "123456")
    {
        // console.log("Valid User");
        window.location.href = "banking.html";
    }
    // else
    // {
    //     console.log("Not Valid User");
    // }
});