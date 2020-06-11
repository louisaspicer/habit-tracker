import { Color } from "../styled/theme";

export interface Habit {
  name: string;
  description: string;
  color: Color;
  dates: {
    day: string;
    isDone: boolean;
  }[];
}
