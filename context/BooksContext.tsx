import React, { createContext, useState } from "react";
import { Book, BooksContextType } from "../@types/types";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "6954e5b1002bd1d784dc"
const COLLECTION_ID = "books"

export const BooksContext = createContext<BooksContextType | null>(null);

export function BooksProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>([]);
  
  const {user} = useUser()

  async function fetchBooks() {
    try {

    } catch (error) {
      throw Error(error.message);
    }
  }

  async function fetchBookById(id: string): Promise<Book | null> {
    try {

      return {} as Book;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function createBook(data: Omit<Book, "id">) {
    try {
        const newBook = await databases.createDocument(
          DATABASE_ID,
          COLLECTION_ID,
          ID.unique(),
          {...data, userId: user.$id},
          [
            Permission.read(Role.user(user.$id)),
            Permission.update(Role.user(user.$id)),
            Permission.delete(Role.user(user.$id)),
          ]
        );
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function deleteBook(id: string) {
    try {

    } catch (error) {
      throw Error(error.message);
    }
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
