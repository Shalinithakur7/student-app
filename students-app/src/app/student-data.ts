import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentDataService {

  private students = [
    {
      name: 'Rahul Sharma',
      class: 'Class 9',
      gender: 'Male',
      hasHobby: true,
      hobby: 'Cricket',
      subject: 'Maths'
    },
    {
      name: 'Anita Verma',
      class: 'Class 6',
      gender: 'Female',
      hasHobby: false,
      hobby: '',
      subject: 'English'
    }
  ];

  getStudents() {
    return this.students;
  }

  addStudent(student: any) {
    this.students.push(student);
  }
}
