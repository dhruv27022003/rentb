import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Bike } from 'src/app/shared/models/Bike';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  bike: Bike = new Bike(); 
  selectedFile: File | null = null;
  uploadedFileId: string | null = null;
  errorMessage: string | null = null;
  photoUrl1: string | null = null;
  constructor(private http: HttpClient, private uploadService: UploadService) {
    this.uploadService.getCartObservable().subscribe(() => {
    })
   }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
    } else {
      this.errorMessage = 'Please select a valid image file';
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('photo', this.selectedFile);


    this.http.post<{ fileUrl: string }>('http://localhost:5000/api/upload/create', formData).subscribe({
      next: (response) => {
        this.uploadedFileId = response.fileUrl;
        this.photoUrl1 = `../../../../assets/${this.uploadedFileId}`; // Assign full URL to photoUrl
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = 'Upload failed. Please try again.';
      },
      
    });
    
  }


  submitBike() {
    if(this.photoUrl1){
      this.bike.photourl = this.photoUrl1
    }

    console.log('Submitting bike', this.bike);
    this.http.post<{ bike: Bike}>('http://localhost:5000/api/upload/addbike', this.bike).subscribe(
      (response) => {
        console.log('Bike submitted successfully', response);
      },
      (error) => {
        console.error('Error submitting bike', error);
      }
    );
  }

}

