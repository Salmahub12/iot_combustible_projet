import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router} from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.css',
})
export class LoginComponent {
  public registerForm: FormGroup | undefined;
  router: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit():void {
    this.registerForm = this.fb.group(
      {
        firstname:['fatima',[Validators.required]],
        password:['passer123',[Validators.required]],
      }
    )
  }

  onSubmit(): void {
    console.log('Attempting to submit the form...');
   
    if (this.registerForm && this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
      
      this.router.navigate(['/tank']);  
    } else {
      console.log('Form is invalid');
      this.registerForm?.markAllAsTouched();
    }

  }

}
