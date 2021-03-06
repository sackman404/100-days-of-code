import { FC } from "react";

type Props = { text: string };

const Header: FC<Props> = (props) => {
  const { text } = props;

  return (
    <>
      <header className="App-header">
        <h2>{text}</h2>
      </header>
    </>
  );
};

export default Header;
