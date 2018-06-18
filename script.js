var myObj, myJSON, text, obj;

//Storing data:
myObj = { "number1":"", "number2":""};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("look").innerHTML = ' <div class="form-group"><label for="number1">Taper 1</label><input type="number1" class="form-control" id="number" aria-describedby="number" placeholder="1"><small id="number" class="form-text text-muted">Nous allons calculer 1 et 2 enssemble, en cliquant sur addition</small></div> ' + obj.number1 + '' +  '<div class="form-group"><label for="nombre2">Taper 2</label><input type="" class="form-control" id="number" placeholder="2"></div> <a href="index2.html" <button type="submit" id="click"  class="btn btn-primary">Addition</button></a>' + obj.number2 + '';

var num1 = 1,
    num2 = 2;

function numbers() {
  return num1 + num2; 
}


console.log(numbers()); // 5
/**$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3200/liste',
        type: 'GET',

        success: function (addition) { // success est toujours en place, bien sûr !
            var i;
            for (i = 0; i < addition.length; i++) {

                var lala = "";
                if (addition.id === 1) {
                    lala = email + password;
                    console.log(addition);
                    
                }
                $('#look').append('<div class="form-group"><label  for="exampleInputEmail1">' + addition[i].email + '</label><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"><small id="emailHelp" class="form-text text-muted">Well never share your email with anyone else.</small></div>' + '<div class="form-group"><label  for="exampleInputPassword1">' + addition[i].password + '</label><input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></div><button type="submit" class="btn btn-primary">Addition</button>');
            };
        },

     


        error: function (resultat, statut, erreur) {
            alert('ERROR IDRISS');
        }

    });
});

**/


