import type { NextPage } from "next";
import Head from "next/head";
import Button from "@mui/material/Button";
import Vercel from "!svg-react-loader!public/vercel.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Vercel />
        <Button variant="contained">Hello World</Button>
      </main>
    </div>
  );
};

export default Home;
