import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit 
{

  onPaste(event:ClipboardEvent) {
  event.preventDefault();
}

  registerForm: FormGroup = new FormGroup({});
  errorMessage: string="";
  constructor(private fb: FormBuilder,private userservice:UserServiceService,private route:Router){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordValidator
    });
  }
  passwordValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {confirmPassword,...userdata}=this.registerForm.value;
      this.userservice.createUser(userdata).subscribe({
          next:(res)=>{
            alert('Registration successful! ✅');
            this.route.navigate(['login']);
          },error:(error)=>{
            this.errorMessage=error.error.message;
            alert(this.errorMessage);
          }
        });
      }
  }

}
