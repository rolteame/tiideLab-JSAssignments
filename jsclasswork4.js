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
if(us)

let displayCard = () => {
    let showUser = '';
        for(let i = 0; i < users.length; i++) {
            showUser += `
                <div>
                    <img src="${users[i].profilePics}" alt="">
                <div class="text">
                    <p>Full Name : ${users[i].fullName}</p>
                    <p>Email : ${users[i].email}</p>
                    <p>Phone Number : ${users[i].phone}</p>
                </div>
                    <div class="card-buttons">
                        <button id="deletebtn" class="deleteUser" onclick="deleteButton(${i})">Delete User</button>
                        <button class="editUser">Edit User</button>
                    </div> 
                </div> 
                <hr>
            `
        }
        document.getElementById('users').innerHTML = showUser;
}
displayCard();

let newUserInput = () => {
    let newProfilePics = prompt('Enter Photo String');
    let newFullName = prompt('Enter Full Name');
    let newEmail = prompt('Enter Email');
    let newPhoneNumber = prompt('Enter Phone Number');

    let newUser = {
        "profilePics" : newProfilePics,
        "fullName" : newFullName,
        "email" : newEmail,
        "phone" : newPhoneNumber
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

}



function deleteButton(id) {
    users.splice(id, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayCard();
    
}

function editButton(id) {
    
}

