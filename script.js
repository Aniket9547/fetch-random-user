function getUser() {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        const user = data.results[0];
        document.getElementById('avatar').src = user.picture.large;
        document.getElementById('name').innerText = `${user.name.first} ${user.name.last}`;
        document.getElementById('email').innerText = user.email;
        document.getElementById('ph').innerText = user.phone;
        document.getElementById('userCard').style.display = 'block';
      })
      .catch(err => {
        console.error("Kuch toh error hua bhai:", err);
      });
  }