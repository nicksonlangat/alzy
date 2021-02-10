import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowremindersPage } from './showreminders.page';

describe('ShowremindersPage', () => {
  let component: ShowremindersPage;
  let fixture: ComponentFixture<ShowremindersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowremindersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowremindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
