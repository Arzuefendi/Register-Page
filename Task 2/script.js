function login(e) {
    e.preventDefault();
  
    let password = document.forms["login-form"]["password"].value;
    let email = document.forms["login-form"]["email"].value;
  
    const passwordRegex = /^[0-6]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password === "" && email === "") {
      alert("Invalid username, password, e-mail");
    } else if (
      usernameRegex.test(username) &&
      password.length >= 6 &&
      passwordRegex.test(password) &&
      emailRegex.test(email)
    ) {
      const loginSection = document.getElementById("login-section");
      loginSection.style.display = "none";
      const para = document.getElementById("para");
      para.textContent = "Welcome, " + username;
      document.getElementById("username-section").style.display = "inline";
  
      const userData = {
        username: username,
        email: email,
        password: password,
      };
  
      localStorage.setItem("userData", JSON.stringify(userData));
  
      userData = JSON.parse(localStorage.getItem("userData"));
    } else {
      alert("Invalid username, password, e-mail");
    }
  }
  