package com.example.WebDevSummer1.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import com.example.WebDevSummer1.models.User;


public interface UserRepository
	extends CrudRepository<User, Integer>{
	@Query("SELECT u FROM User u WHERE u.username=:username AND u.password=:password")
	List<User> findUserByCredentials(
		@Param("username") String username, 
		@Param("password") String password);
	
	 @Query(nativeQuery=true, value="SELECT * FROM User WHERE username=:username")
	 Optional<User> findUserByUsername(@Param("username") String username);
}
