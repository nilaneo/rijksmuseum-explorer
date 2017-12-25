import { Component, OnInit } from '@angular/core';
import { RijksmuseumService } from '../rijksmuseum.service';

@Component({
  selector: 'rm-rijksmuseum-explorer',
  templateUrl: './rijksmuseum-explorer.component.html',
  styleUrls: ['./rijksmuseum-explorer.component.css']
})
export class RijksmuseumExplorerComponent implements OnInit {
  artObjects;
  selectedArtObjectNumber;
  selectedArtObjectDetails;

  constructor(private rijksmuseumService: RijksmuseumService) {}

  ngOnInit() {
    this.rijksmuseumService.getArtObjects().subscribe((response: any) => {
      this.artObjects = response.artObjects;
    });
  }

  selectArtObject(objectNumber) {
    this.selectedArtObjectNumber = objectNumber;
    this.rijksmuseumService
      .getArtObjectDetails(this.selectedArtObjectNumber)
      .subscribe((response: any) => {
        this.selectedArtObjectDetails = response.artObject;
      });
  }

}
