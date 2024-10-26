package com.code.Test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import com.code.dao.UserRepository;
import com.code.pojos.Role;
import com.code.pojos.User;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
class TestUser {
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private UserRepository urepo;
	
	@Test
	void test() {
		assertNotNull(urepo);
	}
	@Test
	void userTest() {
		List<User> user =List.of(new User("Abhay", "Krishna", "abhay@gmail.com", encoder.encode("123"), "8765204921", Role.ADMIN),
				new User("Pratik", "Mohite", "pratik@gmail.com", encoder.encode("pratik123"), "888746486", Role.ADMIN),
				new User("Mayuresh", "Kholekar", "mayuresh@gmail.com", encoder.encode("mayuresh123"), "999753548", Role.ADMIN));
	
		urepo.saveAll(user);
	}

}
