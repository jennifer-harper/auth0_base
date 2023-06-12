//upload images to db
export interface BasicData {
    category:string;
    notes:string
  }
  
  export interface BasicId extends BasicData{
    id:number;
  }
  