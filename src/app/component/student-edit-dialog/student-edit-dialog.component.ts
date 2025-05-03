import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-student-edit-dialog',
  templateUrl: './student-edit-dialog.component.html',
  styleUrls: ['./student-edit-dialog.component.css'],
  standalone: false
})
export class StudentEditDialogComponent {

  mobilePattern = '^[0-9]{10}$';

  constructor(
    public dialogRef: MatDialogRef<StudentEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  
  ) {}

  onNoClick(): void {
    this.dialogRef.close(); 
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data); 
  }

  get formattedDob(): string {
    return this.data.dob ? this.data.dob.split('T')[0] : '';  
  }

  set formattedDob(value: string) {
    this.data.dob = value ? new Date(value).toISOString() : '';  
  }
}
