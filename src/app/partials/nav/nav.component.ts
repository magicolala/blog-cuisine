import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() link: string;
  status = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSearchButtonPressed() {
    this.status = true;
  }

  onCloseSearch() {
    this.status = false;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.router.navigate(['/search', form.value.search]);
  }
}
