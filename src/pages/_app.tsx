import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Head>
          <title>Marta Torre</title>
          <meta
            name="description"
            content="Discover what I can do for your project. I am a freelance fullstack developer specialized in WordPress and I will be able to help you in your business."
          ></meta>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}
