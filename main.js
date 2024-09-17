const btn = document.getElementById('btn');
const limit = document.getElementById('limit-inp');
const age = document.getElementById('age-inp');
const allUsers = document.getElementById('all-users');
const filterUsers = document.getElementById('filter-users');
const ageText = document.getElementById('age-text');
const limitText = document.getElementById('limit-text');

btn.addEventListener('click', () => {
    if (age.value > 0 && limit.value > 0) {
        
        allUsers.innerHTML = '';
        filterUsers.innerHTML = '';

        fetch(`https://dummyjson.com/users?limit=${limit.value}&skip=0`)
            .then(res => res.json())
            .then(json => userChizish(json.users));
    } else {
        alert('0 dan katta son kiriting!!');
    }
});

function userChizish(userlar) {
    ageText.textContent = age.value + ' yoshdan katta userlar:';
    limitText.textContent = 'User limiti: ' + limit.value;

    userlar.forEach(user => {
        const div = document.createElement('div');
        const ism = document.createElement('h2');
        const mail = document.createElement('h3');
        const manzil = document.createElement('p');
        const yosh = document.createElement('h2');
        const tel = document.createElement('p');
        const sana = document.createElement('p');

        ism.textContent = user.firstName + ' ' + user.lastName;
        mail.textContent = 'Email: ' + user.email;
        manzil.textContent = 'Manzil: ' + user.address.address;
        yosh.textContent = 'Yoshi: ' + user.age;
        tel.textContent = 'Telefoni: ' + user.phone;
        sana.textContent = 'Tugilgan sana: ' + user.birthDate;

        div.classList.add('user');
        div.appendChild(ism);
        div.appendChild(mail);
        div.appendChild(manzil);
        div.appendChild(yosh);
        div.appendChild(tel);
        div.appendChild(sana);

        
        allUsers.appendChild(div);

        
        if (user.age >= age.value) {
            const filterDiv = div.cloneNode(true);
            filterUsers.appendChild(filterDiv);
        }
    });
}