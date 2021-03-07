import React, { FC, useState, useEffect, useRef } from "react";
import { BookDescription } from "./BookDescription";
import BookSearchItem from "./BookSearchItem";

type BookSearchDialogProps = {
  maxResults: number;
  onBookAdd: (book: BookDescription) => void;
};

const BookSearchDialog: FC<BookSearchDialogProps> = (props) => {
  const [books, setBooks] = useState([] as BookDescription[]);
  //   const [title, setTitle] = useState("");
  //   const [author, setAuthor] = useState("");
  const [isSearching, setisSearching] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearching) {
      const url = buildSearchUrl(
        titleRef.current!.value,
        authorRef.current!.value,
        props.maxResults
      );
      fetch(url);
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          return extractBooks(json);
        })
        .then((books) => {
          setBooks(books);
        })
        .then((err) => {
          console.log(err);
        });
    }
  });
  //   useEffect(() => {
  //     if (isSearching) {
  //       const url = buildSearchUrl(title, author, props.maxResults);
  //       fetch(url)
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((json) => {
  //           return extractBooks(json);
  //         })
  //         .then((books) => {
  //           setBooks(books);
  //         })
  //         .then((err) => {
  //           console.log(err);
  //         });
  //     }
  //     setisSearching(false);
  //   }, [isSearching, title, author, props.maxResults]);

  //   const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(e.target.value);
  //   };

  //   const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setAuthor(e.target.value);
  //   };

  const handleSearchonClick = () => {
    if (!titleRef.current!.value && !authorRef.current!.value) {
      alert("条件を入力してください");
      return;
    }
    // 検索実行処理を下記に追記
    setisSearching(true);
  };

  const handleBookAdd = (book: BookDescription) => {
    props.onBookAdd(book);
  };

  const bookItems = books.map((b, idx) => {
    return (
      <BookSearchItem
        description={b}
        onBookAdd={(b) => handleBookAdd(b)}
        key={idx}
      />
    );
  });

  return (
    <div className="dialog">
      <div className="operation">
        <div className="conditions">
          <input type="text" ref={titleRef} placeholder="タイトルで検索" />
          <input type="text" ref={authorRef} placeholder="著名者で検索" />
        </div>
        <div className="button-like" onClick={handleSearchonClick}>
          検索
        </div>
      </div>
      <div className="search-results">{bookItems}</div>
    </div>
  );
};

function buildSearchUrl(
  title: string,
  author: string,
  maxResults: number
): string {
  let url = "https://www.googleapis.com/books/v1/volumes?q=";
  const conditions: string[] = [];
  if (title) {
    conditions.push(`intitle:${title}`);
  }
  if (author) {
    conditions.push(`inauthor:${author}`);
  }
  console.log(url + conditions.join("+") + `&maxResults=${maxResults}`);

  return url + conditions.join("+") + `&maxResults=${maxResults}`;
}

function extractBooks(json: any): BookDescription[] {
  const items: any[] = json.items;
  return items.map((item: any) => {
    const volumeInfo: any = item.volumeInfo;

    return {
      title: volumeInfo.title,
      authors: volumeInfo.authors ? volumeInfo.authors.join(", ") : "",
      thumbnail: volumeInfo.imageLinks
        ? volumeInfo.imageLinks.smallThumbnail
        : "",
    };
  });
}

export default BookSearchDialog;
