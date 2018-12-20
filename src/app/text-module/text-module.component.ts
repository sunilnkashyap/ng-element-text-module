import { Component, OnInit, Output, EventEmitter, NgZone, Input } from '@angular/core';
import { FetchColorService } from '../fetch-color.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-text-module',
  templateUrl: './text-module.component.html',
  styleUrls: ['./text-module.component.scss']
})
export class TextModuleComponent implements OnInit {

  @Input() text: string;
  @Input() swatchesColors = [];

  @Output() txtUpdate = new EventEmitter<String>();
  @Output() colorUpdate = new EventEmitter<String>();

  constructor( public fColor: FetchColorService, private cd: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit() {
    this.fColor.getColors().subscribe((r) => {
      this.zone.run(() => {
        this.swatchesColors = r['colors'];
        this.cd.markForCheck();
      });
    });
  }

  btnAddTxt() {
    this.fColor.getColors().subscribe((r) => {
      console.log(r);
      this.swatchesColors = r['colors'];
      this.cd.markForCheck();
    });
    this.txtUpdate.emit(this.text);
    this.text = '';
  }

  updateColor(color) {
    this.colorUpdate.emit(color);
  }
}
