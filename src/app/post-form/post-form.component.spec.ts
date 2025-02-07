import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with title control', () => {
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Post title';
    title.dispatchEvent(new Event('input'));

    expect(component.form.controls.title.value).toBe('Post title')
  })

  it('should create a form with body control', () => {
    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Post body';
    body.dispatchEvent(new Event('input'));

    expect(component.form.controls.body.value).toBe('Post body')
  })

  it('should submit form correctly', () => {
    spyOn(component.submitForm, 'emit');

    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Post title';
    title.dispatchEvent(new Event('input'));

    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Post body';
    body.dispatchEvent(new Event('input'));

    // simula usuário clicando no botão submit
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Garate que o evento foi emitido corretamente
    expect(component.submitForm.emit).toHaveBeenCalledWith({
      title: 'Post title',
      body: 'Post body'
    });
  })
});
