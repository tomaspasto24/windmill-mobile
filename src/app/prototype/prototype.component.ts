import { Windmill } from './../WindmillInterfaces/Windmill';
import { Piece } from './../WindmillInterfaces/Piece';
import { ImageService } from './../image.service';
import { Component, Input, OnInit } from '@angular/core';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.component.html',
  styleUrls: ['./prototype.component.scss'],
})
export class PrototypeComponent implements OnInit {

  constructor(private imageservice: ImageService) { }

  @Input() windmill: Windmill | undefined;
  imageToShow: any;
  selectedFile: ImageSnippet | undefined = undefined;
  imgUrl: undefined | string = undefined;

  ngOnInit(): void {
    if (this.windmill === undefined) {
      throw new Error('Windmill es requerido como atributo de windmill card');
    }
    this.imageservice.getImage(this.windmill.base.photo).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
    this.imageservice.getImage(this.windmill.body.photo).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
    this.imageservice.getImage(this.windmill.blade.photo).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
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
