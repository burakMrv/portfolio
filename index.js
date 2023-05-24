function aboutMeClick(){
    return location.replace("aboutme.html")
};

function sendMail(){
 let fname=document.getElementById("fname").value;
 let sname = document.getElementById("sname").value;
 let email = document.getElementById("email").value;
 let number = document.getElementById("number").value;
 let message=document.getElementById("message").value;

let body = "Name:" + fname + "<br/> Surname:" + sname + "<br/> Email:" + email
+ "<br/> Phone Number:" + number + "<br/> Subject:" + message;


    Email.send({
        SecureToken :   "d7a7fe06-d6a2-42ea-9a87-4ad68b1582cd",
        To : 'burakk.aayar88@gmail.com',
        From : "burakk.aayar88@gmail.com",
        Subject : "Message from Contact Form",
        Body : body
    }).then(
      message => alert(message)
    );


}

