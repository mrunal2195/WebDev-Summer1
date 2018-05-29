package com.example.WebDevSummer1.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.assertj.core.internal.Iterables;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.WebDevSummer1.models.User;
import com.example.WebDevSummer1.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository repository;
	
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		repository.deleteById(id);
	}
	
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user);
	}
	
	@PostMapping("/api/register")
	public User registerUser(@RequestBody User user, HttpSession session) {
		session.setAttribute("currentUser", user);
		return repository.save(user);
	}
	@PostMapping("/api/login")
	public List<User> findUserbyCrendentials(@RequestBody User user, HttpSession session) {
		List<User> dbUsers = repository.findUserByCredentials(user.getUsername(), user.getPassword());
		if(!dbUsers.isEmpty())
			session.setAttribute("currentUser", dbUsers.get(0));
		return dbUsers;
	}
	
	@GetMapping("/api/user/findUserByUsername/{username}")
	public User findUserByUsername(@PathVariable("username") String username){
		Optional<User> data = repository.findUserByUsername(username);
		if(data.isPresent()){
			return data.get();
		}
		return null;
	}
	
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) repository.findAll();
	}
	
	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int id){
		Optional<User> data = repository.findById(id);
		if(data.isPresent()){
			return data.get();
		}
		return null;
	}
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> data = repository.findById(userId);
		if(data.isPresent()){
			User user =  data.get();
			user.setUsername(newUser.getUsername());
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			user.setRole(newUser.getRole());
			repository.save(user);
			return user;
		}
	return null;	
	}
	
	@PutMapping("/api/profile/updateProfile")
	public User updateUser(@RequestBody User newUser) {
		String username = newUser.getUsername();
		Optional<User> data = repository.findUserByUsername(username);
		if(data.isPresent()){
			User user =  data.get();
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			user.setEmail(newUser.getEmail());
			user.setRole(newUser.getRole());
			user.setDateOfBirth(newUser.getDateOfBirth());
			user.setPassword(newUser.getPassword());
			repository.save(user);
			return user;
		}
	return null;	
	}
	
	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
		User currentUser = (User) session.getAttribute("currentUser");	
		return currentUser;
	}

}
