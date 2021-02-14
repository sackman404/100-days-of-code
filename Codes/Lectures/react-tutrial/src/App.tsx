import React from 'react';

interface AppProps{
  message: string;
}

const App: React.FunctionComponent<AppProps> = ({message}: AppProps) => {
  // {message} 分割取得
  // const { message } = props;

  // return <div>React Starter Kit in TypeScript</div>;
  return <div>{message}</div>
};

export default App;
