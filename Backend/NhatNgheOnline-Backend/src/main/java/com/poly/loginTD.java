package com.poly;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Cho phép frontend truy cập
public class loginTD {
    private static final List<UserRegister> users = new ArrayList<>();

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // Kiểm tra tài khoản/mật khẩu mẫu
        if (("admin".equals(request.getUsername()) && "123456".equals(request.getPassword())) ||
            ("a@gmail.com".equals(request.getUsername()) && "123456".equals(request.getPassword()))) {
            return ResponseEntity.ok("Đăng nhập thành công!");
        }
        // Kiểm tra trong danh sách đăng ký
        for (UserRegister u : users) {
            if ((u.getEmail().equals(request.getUsername()) || u.getPhone().equals(request.getUsername()))
                && u.getPassword().equals(request.getPassword())) {
                return ResponseEntity.ok("Đăng nhập thành công!");
            }
        }
        return ResponseEntity.status(401).body("Sai tài khoản hoặc mật khẩu!");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRegister req) {
        // Kiểm tra trùng email hoặc phone
        for (UserRegister u : users) {
            if (u.getEmail().equals(req.getEmail())) {
                return ResponseEntity.status(400).body("Email đã tồn tại!");
            }
            if (u.getPhone().equals(req.getPhone())) {
                return ResponseEntity.status(400).body("Số điện thoại đã tồn tại!");
            }
        }
        users.add(req);
        return ResponseEntity.ok("Đăng ký thành công!");
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

class UserRegister {
    private String name;
    private String email;
    private String phone;
    private String password;
    // Getter Setter
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
