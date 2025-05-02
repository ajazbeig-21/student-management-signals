import { Component, Signal } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentEditDialogComponent } from '../student-edit-dialog/student-edit-dialog.component';

@Component({
  selector: 'app-student-table',
  standalone: false,
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {
  studentsSignal: Signal<any[]>;  // Signal to hold student data
  displayedColumns: string[] = ['name', 'dob', 'gender', 'address', 'email', 'mobile', 'action'];  // Define columns to display

  constructor(private studentService: StudentService, public dialog: MatDialog) {
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


  // Open the edit dialog
  openEditDialog(student: any, index: number): void {
    const dialogRef = this.dialog.open(StudentEditDialogComponent, {
      width: '400px',
      data: { ...student }  // Pass the student data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateStudent(result, index);  // Update student if result is returned
      }
    });
  }

  updateStudent(updatedStudent: any, index: number) {
    this.studentService.updateStudent(updatedStudent, index);  // Update student in the service
  }
}
