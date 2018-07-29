package com.example.WebDevSummer1.models;

import java.util.List;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Course {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String title;
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date created;
	
	@UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	private Date modified;
	
	@OneToMany(mappedBy="course")
	@JsonIgnore
	private List<Module> modules;
	
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
	
	
	public Date getCreated(Date created) {
		return this.created;
	}
	

	public Date getModified() {
		return this.modified;
	}
	
	public void setModules(List<Module> modules) {
		this.modules = modules;
	}
	public List<Module> getModules(){
		return this.modules;
	}

}
