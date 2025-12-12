
export interface Student {
  name: string;
  class: number; 
  gender: 'Male' | 'Female';
  hasHobby: boolean;
  hobby: string;
  favoriteSubject?: string;
}