import { API_URL } from "../constants";
import { API_ENDPOINTS } from "../constants/endpoints";
import type { Book } from "../types/book.types";


export async function getBooks(): Promise<Book[]> {
  const response = await fetch(`${API_URL}${API_ENDPOINTS.BOOKS}`);

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  console.log(response)
  return response.json();
}

export async function getBookById(id: string): Promise<Book> {
  const response = await fetch(
    `${API_URL}${API_ENDPOINTS.BOOK_BY_ID(id)}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch book');
  }

  return response.json();
}