import { PieceService } from './../piece.service';
import { Piece } from './../WindmillInterfaces/Piece';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  constructor(private piecesService: PieceService) {}
  
  pieces: Piece[] = [];

  ngOnInit(): void {
    this.getPieces();
  }
  
  getPieces() {
    this.piecesService.getPieces().subscribe(data => {
      this.pieces = data as Piece[];
    });
  }
  

}
