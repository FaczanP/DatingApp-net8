import { Component, EventEmitter, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  private toastr = inject(ToastrService);
  // usersFromHomeComponent = input.required<any>();   @Input() usersFromHomeComponent: any; It works before Angular 17.1 it was changed with a newer version
  cancelRegister = output<boolean>();     // @Output() cancelRegister = new EventEmitter(); It works before Angular 17.1 it was changed with a newer version
  model: any = {}

  register(){
    // console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
        // console.log(error)
    })
  }

  cancel(){
    // console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}
