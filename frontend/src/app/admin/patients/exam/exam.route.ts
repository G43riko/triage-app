import { Route } from '@angular/router';

import { ExamComponent } from './exam.component';

export const EXAM_ROUTE: Route = {
  path: 'admin/exam',
  component: ExamComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome'
  }
};
