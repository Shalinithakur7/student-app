
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
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
      // 1. Class – Dropdown [Required: Yes]
      class: [null, [Validators.required]],
      // 1. Gender – Radio Buttons [Required: Yes]
      gender: ['Male', [Validators.required]],
      // 1. Has hobby – Checkbox (Yes/No), Default: No
      hasHobby: [false],
      // 1. Hobby – Text Input (Initial value, validators added conditionally in template)
      hobby: [''],
      // 1. Favourite Subject – Dropdown [Required: No]
      favoriteSubject: ['']
    });
  }

  // Helper getters for easy access in the template
  get name() { return this.studentForm.get('name'); }
  get studentClass() { return this.studentForm.get('class'); }
  get hasHobbyControl() { return this.studentForm.get('hasHobby'); }
  get hobbyControl() { return this.studentForm.get('hobby'); }

  // 3. Add Students to a List: Save logic
  onSubmit(): void {
    if (this.studentForm.valid) {
      // 1. Hobby: Ensure hobby is not saved if hasHobby is false
      const formValue = this.studentForm.value;

      const newStudent: Student = {
        name: formValue.name,
        class: +formValue.class, // Convert string from form to number
        gender: formValue.gender,
        hasHobby: formValue.hasHobby,
        hobby: formValue.hasHobby ? formValue.hobby : 'No hobby',
        favoriteSubject: formValue.favoriteSubject
      };

      // Add student via service
      this.studentService.addStudent(newStudent);

      // 3. And user is redirected home page showing all the students.
      this.router.navigate(['/']);
    } else {
      alert('Please fill out all required fields correctly before saving.');
      // Optional: Mark all fields as touched to show validation errors immediately
      this.studentForm.markAllAsTouched();
    }
  }
}