import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadlistPage } from './uploadlist.page';

describe('UploadlistPage', () => {
  let component: UploadlistPage;
  let fixture: ComponentFixture<UploadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
