

export interface FeedbackCreateData{
  type: string;
  comment:string;
  screenshot?: string; // ? que dizer que ela e opcional e nao obrigatorio como os demais 
}

export interface FeedbacksRepository{
  create: (data:FeedbackCreateData)=> Promise<void>;
}