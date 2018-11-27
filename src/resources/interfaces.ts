export interface User {
  name: string;
  img: string;
}

export interface Message {
  content: string;
  date: Date;
}

export interface Session {
  id: number;
  user: User;
  messages: Message[];
}
