import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-struggle-tracker',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './struggle-tracker.component.html',
  styleUrls: ['./struggle-tracker.component.css']
})
export class StruggleTrackerComponent {
  intervals: string[] = Array(17).fill(''); // Array of 17 intervals, each can hold a marker
  currentPosition: number = 8; // Start at the middle of the tracker
  momentumPlayer1: number = 0; // Player 1 momentum starts at position 0 (leftmost)
  momentumPlayer2: number = 16; // Player 2 momentum starts at position 16 (rightmost)

  constructor() {
    this.updateTracker();
  }

  increaseProgress(player: number) {
    if (player === 2 && this.currentPosition < 16) {
      this.currentPosition++;
      this.updateTracker();
    }
  }

  decreaseProgress(player: number) {
    if (player === 1 && this.currentPosition > 0) {
      this.currentPosition--;
      this.updateTracker();
    }
  }

  increaseMomentum(player: number) {
    if (player === 1 && this.momentumPlayer1 < 16) {
      this.momentumPlayer1++;
    } else if (player === 2 && this.momentumPlayer2 > 0) {
      this.momentumPlayer2--;
    }
    this.updateTracker();
  }

  decreaseMomentum(player: number){
    if (player === 1 && this.momentumPlayer1 !== 0) {
      this.momentumPlayer1--;
    } else if (player === 2 && this.momentumPlayer2 !== 16) {
      this.momentumPlayer2++;
    }
    this.updateTracker();
  }

  updateTracker() {
    this.intervals = Array(17).fill(''); // Reset intervals
    this.intervals[this.currentPosition] = 'C'; // Mark current struggle position
    this.intervals[this.momentumPlayer1] = 'M1'; // Mark Player 1 momentum
    this.intervals[this.momentumPlayer2] = 'M2'; // Mark Player 2 momentum

    if(this.currentPosition == this.momentumPlayer1){
      alert('Player 1 Wins')
      this.resetTracker();
    }

    if(this.currentPosition == this.momentumPlayer2){
      alert('Player 2 Wins')
      this.resetTracker()
    }
  }

  resetTracker(){
    this.currentPosition = 8;
    this.momentumPlayer1 = 0;
    this.momentumPlayer2 = 16; 

    this.updateTracker();
  }
}
