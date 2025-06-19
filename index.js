function toggleTheme() {
      document.body.classList.toggle('dark-theme');
    }

    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      data.timestamp = new Date().toLocaleString();

      let responses = JSON.parse(localStorage.getItem('responses') || '[]');
      responses.push(data);
      localStorage.setItem('responses', JSON.stringify(responses));
      alert('Response saved!');
      e.target.reset();
    });

    function showAdmin(){
      document.getElementById('admin').style.display = "flex"
    }
    function loginAdmin() {
      const user = document.getElementById('adminUser').value;
      const pass = document.getElementById('adminPass').value;
      if (user === 'admin' && pass === 'admin123') {
        document.getElementById('loginForm').style.display = "none"
        document.getElementById('userResponses').classList.remove('hidden');
        showResponses();
      } else {
        alert('Invalid credentials!');
      }
    }

    function showResponses() {
      const responses = JSON.parse(localStorage.getItem('responses') || '[]');
      const container = document.getElementById('responsesContainer');
      container.innerHTML = '';
      responses.forEach((resp, index) => {
        const box = document.createElement('div');
        box.className = 'response-box';
        box.innerHTML = `<div>Name: <strong>${resp.name}</strong> <br> Email: (${resp.email})</div> <div>Message: <b>${resp.message}</b></div> <div> <em>${resp.timestamp}</em></div>`;
        container.appendChild(box);
      });
    }