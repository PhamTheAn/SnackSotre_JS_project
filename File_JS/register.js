document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Lấy dữ liệu từ form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const roll = document.getElementById('roll-register').innerHTML;
  
    // Tạo đối tượng tài khoản
    const newAccount = {
      username: username,
      password: password,
      roll: roll,
    };
  
    // Thực hiện yêu cầu POST đến JSON Server
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAccount),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Thêm tài khoản thành công:', data);
        // Xử lý thành công, có thể chuyển hướng người dùng hoặc hiển thị thông báo
      })
      .catch(error => {
        console.error('Lỗi:', error);
        // Xử lý lỗi, có thể hiển thị thông báo cho người dùng
      });
    location.href = "login.html";
        


    
  });



  