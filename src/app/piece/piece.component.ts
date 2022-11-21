import { Piece } from './../WindmillInterfaces/Piece';
import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss'],
})

export class PieceComponent implements OnInit {

  constructor(private imageservice: ImageService) { }

  @Input() piece: Piece | undefined;
  imageToShow: any;
  selectedFile: ImageSnippet | undefined = undefined;
  imgUrl: undefined | string = undefined;

  ngOnInit() {
    if (this.piece !== undefined) {
      this.imageservice.getImage(this.piece.photo).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });
    }
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
