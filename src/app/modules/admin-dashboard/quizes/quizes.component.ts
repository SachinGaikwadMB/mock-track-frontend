import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/services/quiz.service';
//

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss'],
})
export class QuizesComponent implements OnInit {
  
  quizesData : any = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getAllQuizes();

  }

  public getAllQuizes() {
    this.quizService.getAllQuizes().subscribe((resp) => {
      this.quizesData = resp['data'];
      console.log(this.quizesData);
    });
  }

}
