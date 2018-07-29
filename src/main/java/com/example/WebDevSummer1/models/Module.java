package com.example.WebDevSummer1.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Module {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String title;
	@ManyToOne
	@JsonIgnore
	private Course course;
	@OneToMany(mappedBy="module")
	@JsonIgnore
	private List<Lesson> lessons;
	
	public void setId(int id) {
		this.id = id;
	}
	public int getid() {
		return this.id;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTitle() {
		return this.title;
	}
	
	public void setCourse(Course course) {
		this.course = course;
	}
	public Course getCourse() {
		return this.course;
	}
	
	public void setLessons(List<Lesson> lessons) {
		this.lessons = lessons;
	}
	public List<Lesson> getLessons() {
		return this.lessons;
		
	}

}
