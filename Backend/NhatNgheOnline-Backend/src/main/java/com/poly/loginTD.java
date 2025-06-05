package com.poly;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Cho phép frontend truy cập
public class loginTD {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // Kiểm tra tài khoản/mật khẩu mẫu
        if (("admin".equals(request.getUsername()) && "123456".equals(request.getPassword())) ||
            ("a@gmail.com".equals(request.getUsername()) && "123456".equals(request.getPassword()))) {
            return ResponseEntity.ok("Đăng nhập thành công!");
        } else {
            return ResponseEntity.status(401).body("Sai tài khoản hoặc mật khẩu!");
        }
    }
}

// Class này có thể đặt trong file riêng hoặc ngay dưới class loginTD
class LoginRequest {
    private String username;
    private String password;

    // Getter và Setter
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
