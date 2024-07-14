import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Note {
  title: string; 
  description: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})


export class NoteService {
private _notes = new BehaviorSubject<Note[]>([]);

get notes(){
return this._notes.asObservable();
}
  constructor() { }

  async addNote(data: Note) {
    try {
     const currentNotes = this._notes.value;
     let notes:Note[] = [{...data,id:(currentNotes.length + 1).toString()}];
     notes = notes.concat(currentNotes);
     this._notes.next(notes);
     return notes;
      
    } catch(e) {
      throw(e);
    }
  }

  async getnotes(){
    try {
      return [];
    } catch(e) {
      throw(e);
    }
  }

  async getNoteById(id: string) {
    try {
     
      }
     catch(e) {
      throw(e);
    }
  }

  async updateNote(id: string, data: Note) {
    try {
  let currentNotes = this._notes.value;
  const index = currentNotes.findIndex(x => x.id == id);
  currentNotes[index] = {id,...data};
  this._notes.next(currentNotes);
    } catch(e) {
      throw(e);
    }
  }

  async deleteNote(id: string) {
    try {
      
    } catch(e) {
      throw(e);
    }
  }
}
