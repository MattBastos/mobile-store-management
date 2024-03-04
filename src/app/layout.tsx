import "./globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="flex min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}
