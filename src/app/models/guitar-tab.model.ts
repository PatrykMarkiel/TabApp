export interface GuitarTab {
  id: number;
  songTitle: string;
  songAuthor: string;
  musicCategories: string;
  tabVersions: {
    tab_id: number;
    tabs: {
      section: string;
      tab: string[][];
    }[];
    tabAuthors: string[];
  }[];
}
