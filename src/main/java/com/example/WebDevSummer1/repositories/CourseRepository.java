package com.example.WebDevSummer1.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.WebDevSummer1.models.Course;


public interface CourseRepository extends CrudRepository<Course, Integer> {
}
