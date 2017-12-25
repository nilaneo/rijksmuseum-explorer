import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { RijksmuseumExplorerComponent } from './rijksmuseum-explorer/rijksmuseum-explorer.component';
import { RijksmuseumService } from './rijksmuseum.service';


@NgModule({
  declarations: [
    RijksmuseumExplorerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RijksmuseumService],
  bootstrap: [RijksmuseumExplorerComponent]
})
export class AppModule { }
