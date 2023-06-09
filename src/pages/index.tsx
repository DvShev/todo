import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/layout";
import { Todo } from "@/components/todo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Todo />
    </Layout>
  );
}
