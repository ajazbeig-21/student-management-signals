import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-edit-dialog',
  templateUrl: './student-edit-dialog.component.html',
  styleUrls: ['./student-edit-dialog.component.css'],
  standalone: false
})
export class StudentEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StudentEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  // This will hold the student data to edit
  ) {}

  onNoClick(): void {
    this.dialogRef.close(); // Close the dialog without saving changes
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data); // Close the dialog and return updated student data
  }
}
