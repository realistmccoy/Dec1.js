'use strict'

//CRUD
var friends = ['kenny','stan','kyle','eric']
//Create
function addFriend() {
    var toFriend = document.getElementById('addFriend').value;
    friends.push(toFriend);
    display();
}
//Read
function display() {
    var h = '';
    h += '<ul>';
    for (var i = 0; i < friends.length; i++) {
        h += '<li>' + friends[i] + '</li>';
    }
    h += '</li>';
    document.getElementById("display").innerHTML=h;
}
//Delete
function popFriend() {
    friends.pop();
    display();
}

//runner
display();
