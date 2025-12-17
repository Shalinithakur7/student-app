import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataService } from './student-data';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.html'
})
export class StudentComponent {

  students: any[] = [];

  constructor(private service: StudentDataService) {
    this.students = this.service.getStudents();
  }
}
