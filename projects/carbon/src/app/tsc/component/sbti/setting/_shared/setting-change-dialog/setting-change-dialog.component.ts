import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

// tsc-library
import { DialogEnum, DialogResponseEnum } from '@library/tsc-common';
// /tsc-library

@Component({
  selector: 'app-setting-change-dialog',
  templateUrl: './setting-change-dialog.component.html',
  styles: [
  ]
})
export class SettingChangeDialog implements OnInit {

    DialogEnum = DialogEnum;
    DialogResponseEnum = DialogResponseEnum;

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [SettingChangeDialog],
  imports: [
      CommonModule,
      RouterModule,
      MatDialogModule,
  ],
})
export class SettingChangeDialogModule { }
