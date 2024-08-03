import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  ngOnInit(): void {
    let bookList = localStorage.getItem('books');
    this.books = bookList ? JSON.parse(bookList) : [];
  }

  newBookTitle: string = '';
  newBookAuthor: string = '';
  books: Book[] = [];

  addBook() {
    if (this.newBookAuthor.trim() && this.newBookTitle.trim()) {
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      };

      this.books.push(newBook);
      localStorage.setItem('books', JSON.stringify(this.books));

      this.newBookTitle = '';
      this.newBookAuthor = '';
    }
  }

  deleteBook(id: number) {
    let newBooksList = this.books.filter((x) => x.id !== id);
    this.books = newBooksList;
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
