// let users = [
//     {
//         "profilePics" : "1.jpg",
//         "fullName" : "Samuel Yusuf",
//         "email" : "samuel@tiidelab.com",
//         "phone" : "081323435465"
//     },
//     {
//         "profilePics" : "2.jpg",
//         "fullName" : "Akan Asanga",
//         "email" : "akan@tiidelab.com",
//         "phone" : "081323435465"
//     },
//     {
//         "profilePics" : "3.jpg",
//         "fullName" : "Sophia Daniels",
//         "email" : "sophia@tiidelab.com",
//         "phone" : "081323435465"
//     }
// ];
users = JSON.parse(localStorage.getItem('users'));
if(users == null) {
    users = [];
}
var userId;
let displayCard = () => {
    let showUser = '';
        for(let i = 0; i < users.length; i++) {
            
            showUser += `
                <div class="mx-auto">
                    <img class="rounded img-fluid border border-light d-block mx-auto" style="width: 400px;" src=" ${users[i].profilePics}" alt="">
                    <div class="text-light text-center">
                        <p>Full Name : ${users[i].fullName}</p>
                        <p>Email : ${users[i].email}</p>
                        <p>Phone Number : ${users[i].phone}</p>
                    </div>
                    <div class="d-block mx-auto">
                        <button id="deletebtn" class="btn btn-primary" onclick="deleteButton(${i})">Delete User</button>
                        <button class="btn btn-primary" data-toggle="modal" data-target="#addButton" onclick=editButton(${i})>Edit User</button>
                    </div> 
                </div> 
                <hr style="background-color: white">
            `
        }
        document.getElementById('users').innerHTML = showUser;
}
displayCard();

let newUserInput = () => {
    addProfilePics = document.getElementById('profilePics').value;

    let newProfilePics = addProfilePics.split('\\')[2];
    let newFullName = document.getElementById('fullName').value;
    let newEmail = document.getElementById('email').value;
    let newPhoneNumber = document.getElementById('phone').value;

    let newUser = {
        "profilePics" : newProfilePics,
        "fullName" : newFullName,
        "email" : newEmail,
        "phone" : newPhoneNumber
    }

    users.push(newUser);
    alert('You have added a New User');
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}



let deleteButton = (id) => {
    let confirmation = confirm('Are you sure you want to delete');
    if(confirmation = true) {
        users.splice(id, 1);
        localStorage.setItem('users', JSON.stringify(users));
        displayCard();
    }
}

let editButton = (id) => {
    let userDetails = users[id];
    userId = id;

    //document.getElementById('profilePics').value = userDetails.profilePics;
    document.getElementById('fullName').value = userDetails.fullName;
    document.getElementById('email').value = userDetails.email;
    document.getElementById('phone').value = userDetails.phone;   
}

let update = () => {

    addProfilePics = document.getElementById('profilePics').value;
    let editedProfilePics = addProfilePics.split('\\')[2];
    let editedFullName = document.getElementById('fullName').value;
    let editedEmail = document.getElementById('email').value;
    let editedPhoneNumber = document.getElementById('phone').value;

    let editedUser = {
        "profilePics" : editedProfilePics,
        "fullName" : editedFullName,
        "email" : editedEmail,
        "phone" : editedPhoneNumber
    }

    users[userId] = editedUser;
    confirm('Are you sure you want to update this user');
    localStorage.setItem('users',JSON.stringify(users));
    displayCard();
    location.reload();
}

let search = () => {
    
}
