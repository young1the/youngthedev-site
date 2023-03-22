export type Comment = {
  time: number;
  displayName: string;
  comment: string;
  uid: string;
};

export interface MemoizedComment extends Comment {
  id: string;
}

type UID = string;
type TrackTitle = string;

export interface Comments extends Record<UID, Comment> {}

export interface Track {
  comments: Comments;
}

export interface Tracks extends Record<TrackTitle, Track> {}
