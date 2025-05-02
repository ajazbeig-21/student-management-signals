import { Component, Signal } from '@angular/core';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-student-table',
  standalone: false,
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
  studentsSignal: Signal<any[]>;  // Signal to hold student data

  constructor(private studentService: StudentService) {
    // Access the Signal from the StudentService
    this.studentsSignal = studentService.getStudentsSignal();
  }

  // Get the students directly from the Signal
  get students() {
    return this.studentsSignal();
  }

  deleteStudent(index: number) {
    this.studentService.deleteStudent(index);  // Call the delete method in the service
  }
}
