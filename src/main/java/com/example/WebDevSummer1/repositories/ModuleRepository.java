package com.example.WebDevSummer1.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import com.example.WebDevSummer1.models.Module;


public interface ModuleRepository extends CrudRepository<Module, Integer>{
}