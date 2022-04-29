import { Subreddit } from "./subreddit/Subreddit"

export interface TrendingItem {
    img_src: string;
    title: string;
    description: string;
    subreddit: Subreddit;

}

