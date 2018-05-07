import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HashGeneratorService } from '../hash-generator.service';
import { debug } from 'util';


@Component({
  selector: 'app-hash-form',
  templateUrl: './hash-form.component.html',
  styleUrls: ['./hash-form.component.css'],
  providers: [
    HashGeneratorService
  ]
})
export class HashFormComponent implements OnInit {

  hashType: string;
  originalStr: string = '';
  obtainedHash: string = '';
  obtainedError: Error = null;

  constructor(
    private activeRoute : ActivatedRoute,
    private hashGenerator : HashGeneratorService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.hashType = params.hashType;
      this.obtainedHash = '';
      this.obtainedError = null;
    });
  }

  submitHash() {
    this.hashGenerator.getHash(
      this.originalStr,
      this.hashType
    ).then(
      (hash) => {
        this.obtainedHash = hash;
      }
    ).catch(
      (err) => {
        this.obtainedError = err;
      }
    )
  }

}
