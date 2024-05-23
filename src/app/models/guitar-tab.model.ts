export interface GuitarTab {
  id: number;
  songTitle: string;
  songAuthor: string;
  musicCategories: string;
  tabVersions: {
    tab_id: number;
    tabs: string[][][];
    tabAuthors: string[];
    difficulty: number;
    rating: number;
  }[];
}
