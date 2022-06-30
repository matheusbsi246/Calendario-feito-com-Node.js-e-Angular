import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
})
export class CalendarioComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Meditar', date: '2022-06-31' },
      { title: 'Meditar 3', date: '2019-04-02' },
    ],
  };

  handleDateClick(arg: { dateStr: string }) {
    alert('date click! ' + arg.dateStr);
  }

  constructor() {}

  ngOnInit(): void {}
}
