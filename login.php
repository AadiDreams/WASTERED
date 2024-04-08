<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css">
    <title>Wastered</title>
</head>
<body>
<section class="sub-header">
        <nav>
            <a href="index.html"><img src="images/title.png" alt=""></a>
            <div class="nav-links" id="navLinks">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><a href="index.php">Login</a></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        </nav>
        <h1>Login</h1>
    </section>
    
    <section class="log-in">
      <div class="container1">
        <div class="title">Login</div>
        <div class="content">
        <form name = "form" action="login.php" onsubmit="return isvalid()" method="POST">
            <div class="user-details1">
              <div class="input-box1">
                  <span class="details">User Name</span>
                  <input type="text" id="user" placeholder="Enter user name" name="user" required >
              </div>
              
              <div class="input-box1">
                  <span class="details">Password</span>
                  <input type="password" id="pass" placeholder="Enter your password"  name="pass" required>
              </div>
              
              <div class="button1">
              <input type="submit" value="LOGIN" name = "submit">
              </div>
              <div class="button1">
                  <input type="button" onclick="location.href= 'signup.php' " value="SIGN UP" >
            </div>
        </form>
        </div>
      </div>
       <script>
            function isvalid(){
                var user = document.form.user.value;
                var pass = document.form.pass.value;
                if(user.length=="" && pass.length==""){
                    alert(" Username and password field is empty!!!");
                    return false;
                }
                else if(user.length==""){
                    alert(" Username field is empty!!!");
                    return false;
                }
                else if(pass.length==""){
                    alert(" Password field is empty!!!");
                    return false;
                }
                
            }
        </script>
  </section>

    <section class="footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit? Suscipit reprehenderit odit necessitatibus sint.</p>
        <div class="icons">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
        <p>Copyright &copy; 2024</p>
    </section>
</body>
</html>