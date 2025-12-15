export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    Overall: Number;
    Pace: Number;
    Shooting: Number;
    Passing: Number;
    Dribbling: Number;
    Defending: Number;
    Physical: Number;
  }
}

