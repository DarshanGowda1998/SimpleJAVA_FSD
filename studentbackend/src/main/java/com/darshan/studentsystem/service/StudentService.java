package com.darshan.studentsystem.service;

import com.darshan.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();

}
