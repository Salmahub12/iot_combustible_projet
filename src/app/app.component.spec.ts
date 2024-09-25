import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> 3d6922ecd39047e98669bf97e6bc380fc3378cb8
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
=======
      imports: [AppComponent],
>>>>>>> 3d6922ecd39047e98669bf97e6bc380fc3378cb8
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'IotCombustibleProjet'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('IotCombustibleProjet');
=======
  it(`should have the 'iot_combustible_projet' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('iot_combustible_projet');
>>>>>>> 3d6922ecd39047e98669bf97e6bc380fc3378cb8
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, IotCombustibleProjet');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, iot_combustible_projet');
>>>>>>> 3d6922ecd39047e98669bf97e6bc380fc3378cb8
  });
});
