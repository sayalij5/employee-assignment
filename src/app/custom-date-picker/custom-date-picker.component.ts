import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrl: './custom-date-picker.component.css',
})
export class CustomDatePickerComponent {
  @Output() dateChange = new EventEmitter<string>();

  currentDate = new Date();
  selectedDate?: Date;

  getDaysInMonth(): number[] {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }

  selectDate(day: number) {
    this.setDate(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day));
  }

  setDate(date: Date) {
    this.selectedDate = date;
    const formatted = date.toISOString().split('T')[0];
    this.dateChange.emit(formatted);
  }

  // --- Quick Select Methods ---
  selectToday() {
    this.setDate(new Date());
  }

  selectNextMonday() {
    this.setDate(this.getNextDayOfWeek(1)); // Monday
  }

  selectNextTuesday() {
    this.setDate(this.getNextDayOfWeek(2)); // Tuesday
  }

  selectAfterOneWeek() {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    this.setDate(date);
  }

  private getNextDayOfWeek(dayOfWeek: number): Date {
    const date = new Date();
    const resultDate = new Date(date);
    resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7 || 7));
    return resultDate;
  }
}
