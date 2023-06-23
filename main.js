console.log("BOOKING APPOINTMENT APP");
document.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/e24f96989d9d408ca1883386a4d3bc4d/appointmentData')
    .then(response => {
        console.log(response);
        for(let i=0 ; i<response.data.length ; i++){
            displayUserOnScreen(response.data[i])
        }
    })
    .catch(err => {
        console.log(err);
    })
})

function addUser(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const userDetails = {
        name: name,
        email: email,
        phone: phone
    }
    axios.post('https://crudcrud.com/api/e24f96989d9d408ca1883386a4d3bc4d/appointmentData', userDetails)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}

function displayUserOnScreen(userObj){
    const parentElement = document.getElementById('data');

    const li = document.createElement('li');
    li.id = userObj._id;
    li.textContent = `${userObj.name} => ${userObj.email} , ${userObj.phone}`;

    const button = document.createElement('button');
    button.textContent = "DELETE";
    button.onclick = deleteUser;
    const button1 = document.createElement('button');
    button1.textContent = "EDIT";
    button1.onclick = () => editUser(userObj._id, userObj.name, userObj.email, userObj.phone);

    li.appendChild(button1);
    li.appendChild(button)

    parentElement.appendChild(li);
}

function deleteUser(event){
    let id = event.target.parentElement.id;
    console.log("ID OF THIS LI ", id);

    axios.delete(`https://crudcrud.com/api/e24f96989d9d408ca1883386a4d3bc4d/appointmentData/${id}`)
    .then(res => {
        console.log(res);
        location.reload();
    })
    .catch(err => {
        console.log("Error while deleting", err);
    })
}


function editUser(id, n, e, p) {

    const button = document.getElementById('submit');
    button.textContent = "UPDATE" ;
    button.onclick = updateUser
    // const li = event.target.parentElement;
    // const id = li.id;
    document.getElementById('name').value = n;
    document.getElementById('email').value = e;
    document.getElementById('phone').value = p;

    function updateUser(){
        const updatedName = document.getElementById('name').value;
        const updatedEmail = document.getElementById('email').value;
        const updatedPhone = document.getElementById('phone').value;

        const updatedUserDetails = {
            name: updatedName,
            email: updatedEmail,
            phone: updatedPhone
        }

        axios.put(`https://crudcrud.com/api/e24f96989d9d408ca1883386a4d3bc4d/appointmentData/${id}`, updatedUserDetails)
        .then(response => {
            console.log(response);
            location.reload();
        })
        .catch(err => {
            console.log("error in updation", err);
        })

    }

    

    
  }