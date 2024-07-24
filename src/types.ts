export interface News {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  date: Date;
  timeAgo: string;
}

export interface FullNews extends News {
  url?: string;
}

export interface Comment {
  id: number;
  user: string | null;
  content: string;
  comments: Comment[];
  comments_count: number;
}

export interface Comments {
  commentsCount: number;
  comments: Comment[];
}

export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface Item {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[];
  level: number;
  comments_count: number;
}
