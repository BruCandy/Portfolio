// アプリケーション全体の設定を管理
import {
  Links,
  Outlet,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import Header from "./routes/header";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import theme from "./styles/theme";
import Header from "./routes/header";
// import Sidebar from "./routes/side";

export function meta() {
  return [{ title: "Portfolio" }, { description: "My Portfolio" }];
}

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <Links />
        <Meta />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Header />
          <Outlet />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
