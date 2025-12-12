
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      name: 'Alice Johnson',
      class: 9,
      gender: 'Female',
      hasHobby: true,
      hobby: 'Reading novels',
      favoriteSubject: 'Science'
    },
    {
      name: 'Bob Smith',
      class: 6,
      gender: 'Male',
      hasHobby: false,
      hobby: 'No hobby',
      favoriteSubject: 'Math'
    }
  ];

  constructor() { }

  getAllStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    // 3. Add Students to a List: Add the new student
    this.students.push(student);
  }
}
