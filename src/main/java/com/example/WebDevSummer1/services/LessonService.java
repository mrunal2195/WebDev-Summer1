package com.example.WebDevSummer1.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.WebDevSummer1.models.Course;
import com.example.WebDevSummer1.models.Lesson;
import com.example.WebDevSummer1.models.Module;
import com.example.WebDevSummer1.repositories.LessonRepository;
import com.example.WebDevSummer1.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class LessonService {
	
		@Autowired
		LessonRepository lessonRepository;
		@Autowired
		ModuleRepository moduleRepository;
		
		
		@GetMapping("/api/module/{moduleId}/lesson")
		public List<Lesson> findAllLessonsforModule(
				@PathVariable("moduleId") int moduleId) {
			Optional<Module> data = moduleRepository.findById(moduleId);
			if(data.isPresent()) {
				Module module = data.get();
				return module.getLessons();
			}
			return null;		
		}
		
		@PostMapping("/api/module/{moduleId}/lesson")
		public Lesson createLesson(
				@PathVariable("moduleId") int moduleId,
				@RequestBody Lesson newLesson) {
			Optional<Module> data = moduleRepository.findById(moduleId);
			if(data.isPresent()) {
				Module module = data.get();
				newLesson.setModule(module);
				return lessonRepository.save(newLesson);
			}
			return null;		
		}
}
