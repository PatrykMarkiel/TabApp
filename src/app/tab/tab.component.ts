import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { GuitarTabsService } from '../services/guitar-tabs-service';
import { FormsModule } from '@angular/forms';
import { GuitarTab } from '../models/guitar-tab.model';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  title = 'TabApp';
  GuitarTabs: GuitarTab[] = [];
  selectedCategory: string | null = null;
  selectedAuthor: string | null = null;
  selectedSongs: GuitarTab[] = [];
  searchQuery: string = '';
  suggestions: string[] = [];
  filteredSongs: GuitarTab[] = [];
  showGenresList: boolean = false;
  showAuthorsList: boolean = false;
  constructor(private guitarTabsService: GuitarTabsService, private router: Router) { }
  ngOnInit(): void {
    this.guitarTabsService.getAllSongs().subscribe(tabs => {
      this.GuitarTabs = tabs;
      this.filteredSongs = tabs;
    });
  }
  toggleGenresList(): void {
    this.showGenresList = !this.showGenresList;
  }
  toggleAuthorsList(): void {
    this.showAuthorsList = !this.showAuthorsList;
  }

  selectCategory(category: string | null): void {
    this.searchQuery = '';
    this.selectedAuthor = null;

    if (category) {
      this.selectedCategory = category;
      this.selectedSongs = this.GuitarTabs.filter(tab => tab.musicCategories.includes(category));
    } else {
      this.selectedCategory = null;
      this.selectedSongs = this.GuitarTabs.map(tab => tab);
    }
  }


  getAllCategories(): string[] {
    const allCategoriesSet = new Set<string>();

    const allCategories = this.GuitarTabs.flatMap(tab => tab.musicCategories);

    allCategories.forEach(category => allCategoriesSet.add(category));

    return Array.from(allCategoriesSet);
}
  getAllAuthors(): string[] {
  const allAuthorsSet = new Set<string>();

  const allAuthors = this.GuitarTabs.flatMap(tab => tab.songAuthor);

  allAuthors.forEach(Author => allAuthorsSet.add(Author));

  return Array.from(allAuthorsSet);
}
selectAuthor(author: string | null): void {
  this.searchQuery = '';
  this.selectedCategory = null;

  if (author) {
    this.selectedAuthor = author;
    this.selectedSongs = this.GuitarTabs.filter(tab => tab.songAuthor === author);
  } else {
    this.selectedAuthor = null;
    this.selectedSongs = this.GuitarTabs.map(tab => tab);
  }
}

suggest(): void {
  const searchQueryLowerCase = this.searchQuery.toLowerCase();

  this.selectedCategory = null;
  this.selectedAuthor = null;

  const filterTabs = (tabs: GuitarTab[]): GuitarTab[] => {
    return tabs.filter((tab: GuitarTab) => {
      const matchesQuery = !this.searchQuery ||
        this.hasTwoConsecutiveLetters(tab.songTitle.toLowerCase(), searchQueryLowerCase) ||
        this.hasTwoConsecutiveLetters(tab.songAuthor.toLowerCase(), searchQueryLowerCase);

      return matchesQuery;
    });
  };

  const filteredTabs = filterTabs(this.GuitarTabs);

  this.suggestions = filteredTabs
    .map(tab => `${tab.songTitle} - ${tab.songAuthor}`);

  this.filteredSongs = filteredTabs;
}

selectSuggestion(suggestion: string): void {
  this.searchQuery = suggestion;
  this.search();
}

search(): void {
  const searchQueryLowerCase = this.searchQuery.toLowerCase();

  this.selectedCategory = null;
  this.selectedAuthor = null;

  this.filteredSongs = this.GuitarTabs.filter((song: GuitarTab) =>
    this.hasTwoConsecutiveLetters(song.songTitle.toLowerCase(), searchQueryLowerCase) ||
    this.hasTwoConsecutiveLetters(song.songAuthor.toLowerCase(), searchQueryLowerCase)
  );
}

getFilteredSongs(): GuitarTab[] {
  const filterTabs = (tabs: GuitarTab[]): GuitarTab[] => {
    return tabs.filter((tab: GuitarTab) => {
      const matchesCategory = !this.selectedCategory || tab.musicCategories.includes(this.selectedCategory);
      const matchesAuthor = !this.selectedAuthor || tab.songAuthor === this.selectedAuthor;
      return matchesCategory && matchesAuthor;
    });
  };

  if (this.selectedCategory || this.selectedAuthor) {
    return filterTabs(this.GuitarTabs);
  } else {
    return this.GuitarTabs;
  }
}

hasTwoConsecutiveLetters(text: string, query: string): boolean {
  for (let i = 0; i < query.length - 1; i++) {
    if (text.includes(query.substring(i, i + 2))) {
      return true;
    }
  }
  return false;
}
}
