import { Channel } from "./channel";
import { User } from "./user";

export interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  comment: string;
  author: User;
  post: string;
  createdAt: string;
  updatedAt: string;
}

export interface Thread {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}