import { FC, useState, useEffect } from "react";
import "./App.css";
import Modal from "react-modal";
import { BookToRead } from "./BookToRead";
import BookRow from "./components/BookRow";
import BookSearchDialog from "./components/BookSearchDialog";
import { BookDescription } from "./BookDescription";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { blue } from "@material-ui/core/colors";

Modal.setAppElement("#root");

const customStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: 0,
    transform: "translate(-50%, -50%)",
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 2,
      color: "#388e3c",
      backgroundColor: "#81c784",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
      textAlign: "center",
    },
  })
);

const APP_KEY = "react-hooks-tutorial";

// const dummyBooks: BookToRead[] = [
//   {
//     id: 1,
//     title: "はじめてのReact",
//     authors: "ダミー",
//     memo: "",
//   },
//   {
//     id: 2,
//     title: "React Hooks入門",
//     authors: "ダミー",
//     memo: "",
//   },
//   {
//     id: 3,
//     title: "実践Reactアプリケーション開発",
//     authors: "ダミー",
//     memo: "",
//   },
// ];

const App = () => {
  // Hooksによる状態管理を行う変数を設定
  const [books, setBooks] = useState([] as BookToRead[]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const classes = useStyles();

  // ローカルのエリアに保存しているほんのデータを取得している。
  // 第二引数がからの配列のため、マウント時に１回だけ実行される
  useEffect(() => {
    const storeBooks = localStorage.getItem(APP_KEY);
    if (storeBooks) {
      setBooks(JSON.parse(storeBooks));
    }
  }, []);

  // ローカルエリアに格納されているデータを取得
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(books));
  }, [books]);

  // 本の一覧を表示するコンポーネントを登録している
  const bookRows = books.map((b) => {
    return (
      <BookRow
        book={b}
        key={b.id}
        onMemoChange={(id, memo) => {
          handleBookMemoChange(id, memo);
        }}
        onDelete={(id) => {
          handleDeleteClick(id);
        }}
      />
    );
  });

  // 削除ボタンが押された時にロジックを実装
  const handleDeleteClick = (id: number) => {
    const newBooks = books.filter((b) => b.id !== id);
    setBooks(newBooks);
  };

  // メモ欄が書き換えられた時に、内容が変更される
  const handleBookMemoChange = (id: number, memo: string) => {
    const newBooks = books.map((b) => {
      return b.id === id ? { ...b, memo: memo } : b;
    });
    setBooks(newBooks);
  };

  //本を追加を押した時にmodalをのstateを変更する
  const handleAddClick = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  const handleBookAdd = (book: BookDescription) => {
    const newBook: BookToRead = { ...book, id: Date.now(), memo: "" };
    const newBooks = [...books, newBook];
    setBooks(newBooks);
    setModalIsOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <section className="nav"> */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            読みたい本リスト
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddClick}>
            本を追加
          </Button>
        </Toolbar>
      </AppBar>
      {/* <h1>読みたい本リスト</h1> */}
      {/* <div className="button-like" onClick={handleAddClick}>
          本を追加
        </div> */}
      {/* </section> */}
      <section className="main">{bookRows}</section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        style={customStyle}
      >
        <BookSearchDialog
          maxResults={40}
          onBookAdd={(b) => {
            handleBookAdd(b);
          }}
        />
      </Modal>
    </div>
  );
};

export default App;
