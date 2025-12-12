// src/app/add-student/add-student.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // For *ngIf
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup; 
  classes = [6, 7, 8, 9];
  subjects = ['Math', 'Science', 'History', 'English', 'Art', 'PE'];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: [null, [Validators.required]],
      gender: ['Male', [Validators.required]],
      hasHobby: [false], 
      hobby: [''],
      favoriteSubject: ['']
    });
  }

  // Getters for easy template access
  get name() { return this.studentForm.get('name'); }
  get studentClass() { return this.studentForm.get('class'); }
  get hasHobbyControl() { return this.studentForm.get('hasHobby'); }
  
  onSubmit(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;

      const newStudent: Student = {
        name: formValue.name,
        class: +formValue.class, 
        gender: formValue.gender,
        hasHobby: formValue.hasHobby,
        // If hasHobby is unchecked, explicitly save "No hobby"
        hobby: formValue.hasHobby ? formValue.hobby : 'No hobby', 
        favoriteSubject: formValue.favoriteSubject
      };

      this.studentService.addStudent(newStudent);
      this.router.navigate(['/']); // Redirect to home page
    } else {
      alert('Please fill out all required fields correctly.');
      this.studentForm.markAllAsTouched();
    }
  }
}