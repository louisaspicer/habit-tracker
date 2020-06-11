export interface Habit {
  name: string;
  description: string;
  color: string;
  dates: {
    day: string;
    isDone: boolean;
  }[];
}
