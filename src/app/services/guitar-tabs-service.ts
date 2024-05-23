import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GuitarTab } from '../models/guitar-tab.model';

@Injectable({
  providedIn: 'root'
})
export class GuitarTabsService {
  private Tabs: GuitarTab[] = [
    {
      id: 1,
      songTitle: 'Song A',
      songAuthor: 'Author A',
      musicCategories: 'Category A',
      tabVersions: [
        {
          tab_id: 1,
          tabs: [[['A', 'B', 'C']]],
          tabAuthors: ['Author A'],
          difficulty: 3,
          rating: 4
        }
      ]
    },
    {
      id: 2,
      songTitle: 'Happy Nation',
      songAuthor: 'Ace of Base',
      musicCategories: 'Pop',
      tabVersions: [
        {
          tab_id: 1,
          tabs: [[['C', 'G', 'Am', 'F']]],
          tabAuthors: ['Author B'],
          difficulty: 2,
          rating: 5
        }
      ]
    },
    {
      id: 3,
      songTitle: 'Run Away',
      songAuthor: 'Bon Jovi',
      musicCategories: 'Rock',
      tabVersions: [
        {
          tab_id: 1,
          tabs: [[['E', 'A', 'B', 'C#m']]],
          tabAuthors: ['Author C'],
          difficulty: 4,
          rating: 4
        }
      ]
    },
    {
      id: 4,
      songTitle: 'Another Song',
      songAuthor: 'Another Author',
      musicCategories: 'Jazz',
      tabVersions: [
        {
          tab_id: 1,
          tabs: [[['F', 'G', 'Em', 'A']]],
          tabAuthors: ['Author D'],
          difficulty: 3,
          rating: 3
        }
      ]
    },
    {
      id: 5,
      songTitle: 'Imagine',
      songAuthor: 'John Lennon',
      musicCategories: 'Pop',
      tabVersions: [
        {
          tab_id: 1,
          tabs: [[['C', 'F', 'G', 'Am']]],
          tabAuthors: ['Author E'],
          difficulty: 2,
          rating: 5
        }
      ]
    }
  ];

  constructor() { }

  getAllSongs(): Observable<GuitarTab[]> {
    return of(this.Tabs);
  }

  getSongById(id: number): Observable<GuitarTab> {
    const song = this.Tabs.find(s => s.id === id);
    return of(song as GuitarTab);
  }
}
