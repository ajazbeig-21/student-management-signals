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
  studentsSignal: Signal<any[]>;  
  displayedColumns: string[] = ['name', 'dob', 'gender', 'address', 'email', 'mobile', 'action']; 

  constructor(private studentService: StudentService, public dialog: MatDialog) {
    this.studentsSignal = studentService.getStudentsSignal();
  }

  get students() {
    return this.studentsSignal();
  }

  deleteStudent(index: number) {
    this.studentService.deleteStudent(index);  
  }


  openEditDialog(student: any, index: number): void {
    const dialogRef = this.dialog.open(StudentEditDialogComponent, {
      width: '400px',
      data: { ...student }  
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateStudent(result, index);  
      }
    });
  }

  updateStudent(updatedStudent: any, index: number) {
    this.studentService.updateStudent(updatedStudent, index);  
  }
}
