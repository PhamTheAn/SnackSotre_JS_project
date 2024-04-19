
document.getElementById('myForm-Login').addEventListener('submit', function(event) {
    // Ngăn chặn form gửi đi, chúng ta sẽ xử lý nó bằng JavaScript
    event.preventDefault();

    // Lấy giá trị từ các trường nhập liệu
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hiển thị thông tin lấy được
    console.log('Name:', username);
    console.log('password:', password);

    // Gọi hàm xử lý submit khác nếu cần
    // submitForm(nameValue, passwordValue);


    const user = {
    
        userName: username,
        passWord: password,

        // ... other user information
    };

    // Validate

    if (username === '' || password === '') {
      alert('Vui lòng điền đầy đủ thông tin.')
    } else if (username !== 'phamtheanadmin' || password !== '12345') {
      // errorMessage.textContent = 'Thông tin đăng nhập không hợp lệ.';
      alert("Tài khoản mật khẩu không chính xác !!! ")
    } else {
       // Xóa thông báo lỗi nếu hợp lệ
      // Tại đây, bạn có thể thực hiện hành động đăng nhập hoặc chuyển hướng đến trang khác.
      location.href = "../Layout/index.html"

      alert('Đăng nhập thành công!');
    }


      
      // Convert user object to JSON string
      const userJson = JSON.stringify(user);
      
      // Save user information to localStorage
      localStorage.setItem('user', userJson);
      
      // Later, when you need to retrieve the user information
      const storedUserJson = localStorage.getItem('user');
      
      if (storedUserJson) {
        const storedUser = JSON.parse(storedUserJson);
        console.log(storedUser);
      } else {
    
    
        console.log('User information not found in localStorage');
    }
    // location.href = "../Layout/index.html"
    // fetch('http://localhost:3000/users')
    // .then(res => res.json())
    // .then(user =>{
    //   const roll = user.roll
    //   console.log((roll));

    // })
})
