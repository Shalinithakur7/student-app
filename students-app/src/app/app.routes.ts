import { Routes } from '@angular/router';
import { StudentComponent } from './student';
import { AddStudentComponent } from './add-student/add-student';

export const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'add', component: AddStudentComponent }
];
