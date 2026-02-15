import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import Head from "next/head"; // Import Head to add custom tags

export const metadata = {
  title: "Gian Portfolio",
  description: "Welcome to Gian Lagahit's portfolio website",
};

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.png" /> {/* <-- Your logo/favicon */}
      </Head>

      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
