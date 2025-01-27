let friends = [];

function addFriend() {
    let friendInput = document.getElementById('friend');
    let friendName = friendInput.value;
    isEmpty(friendName);
    friendInput.value = '';
}

function isEmpty(text) {
    if (text == '') {
        alert('The place is empty!');
    } else {
        friends.push(text);
        updateFriendList();

    }
}

function updateFriendList() {
    let friendList = document.getElementById('friendsList');
    friendList.innerHTML = '';
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        li.textContent = friends[i];
        friendList.appendChild(li); 
        
    }
}


function raffleFriend() {
    if (friends.length == 0) {
        assignText("The list of friends is empty", 'ul');
    } else {
        let randomFriendIndex = Math.floor(Math.random()*friends.length);
        let result = document.getElementById('result');
        result.innerHTML = `The secret friend drawn is: ${friends[randomFriendIndex]}`;
    }
}


function assignText(text, element){
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
}