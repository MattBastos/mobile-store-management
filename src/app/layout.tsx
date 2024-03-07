import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>

      <body className="flex min-h-screen flex-col bg-background">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
