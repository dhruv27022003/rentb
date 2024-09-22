import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';
import { UploadService } from 'src/app/services/upload.service';
import { Bike } from 'src/app/shared/models/Bike';
@Component({
  selector: 'app-deletepage',
  templateUrl: './deletepage.component.html',
  styleUrls: ['./deletepage.component.css']
})
export class DeletepageComponent {
  bike: Bike = new Bike();
  Bikes: Bike[] = []; // This will contain the list of bikes
  filteredBikes: Bike[] = [];
  errorMessage: string | null | undefined;
  responseMessage: any;
  


  constructor(private Bikeservice: BikeService, 
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    ) {}

   async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
    try {
      
      this.Bikes = await this.Bikeservice.getall();
      console.log("Bikes", this.Bikes)
    } catch (error) {
      console.error("Error fetching data", error);
    }

  }
);
}

  
    submitBike() {
      // Filter the bikes based on the user input
      this.filteredBikes = this.Bikes.filter(bike =>
        bike.owner_name && (bike.owner_name?.toLowerCase() === this.bike.owner_name?.toLowerCase() )||
        bike.owner_address && (bike.owner_address?.toLowerCase() === this.bike.owner_address?.toLowerCase()) ||
        bike.owner_phone&&(bike.owner_phone === this.bike.owner_phone)
      );
    }

    deletebike(bike: Bike) {
      // Delete the bike
      console.log("delete", bike)
      // this.Bikeservice.deleteBike(bike);

      this.http.post<{ bike: Bike }>('http://localhost:5000/api/Bikes/delete', bike).subscribe({
        next: (response) => {// Assign full URL to photoUrl
          this.errorMessage = null;     
        },
        error: (err) => {
          this.errorMessage = 'Upload failed. Please try again.';
        },
        
        
      });
      this.responseMessage = "Bike deleted successfully"
      console.log("response", this.responseMessage)
      this.filteredBikes=[];
      this.submitBike();
    }


    
  }



