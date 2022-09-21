const signupButton = document.getElementById("signup-button"),
  loginButton = document.getElementById("login-button"),
  userForms = document.getElementById("user_options-forms");

signupButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  },
  false
);

loginButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  },
  false
);

function userFormSubmit() {
  var username = document.getElementById("username-signup").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password-signup").value;

  if (username == "") {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Username is required!",
    });
    return false;
  }
  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Email is required!",
    });
    return false;
  }
  if (password == "") {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Password is required!",
    });
    return false;
  } else {
    var user = JSON.stringify({
      username: username,
      email: email,
      password: password,
    });

    fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        if (data.statusCode == 201) {
            userForms.classList.remove("bounceLeft");
            userForms.classList.add("bounceRight");
        //   swal({
        //     icon: "success",
        //     title: "Success!",
        //     text: "User Registered Successfully!",
        //     confirmButtonText: "Ok",
        //   })
        //     // remove Animation
        //     .then((result) => {
        //       if (result.isConfirmed) {
        //         userForms.classList.remove("bounceLeft");
        //         userForms.classList.add("bounceRight");
        //       }
        //     });
        }
      })
      .catch((error) => {
        swal({
          icon: "error",
          title: "Error!",
          text: error,
        });
        console.error("Error:", error);
      });

    console.log("User: ", user);
  }
}

function userLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log(username, password);

  if (username == "") {
    swal({
      icon: "error",
      title: "Error!",
      text: "Username is required!",
    });
    return false;
  }
  if (password == "") {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Password is required!",
    });
    return false;
  } else {
    var user = JSON.stringify({
      username: username,
      password: password,
    });

    fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login Data:", data);
          if (data.statusCode == 200) {
            window.location.href = "/shop.html";
          }
      })
      .catch((error) => {
        swal({
          icon: "error",
          title: "Error!",
          text: error,
        });
        console.error("Error:", error);
      });

    console.log("User: ", user);
  }
}
