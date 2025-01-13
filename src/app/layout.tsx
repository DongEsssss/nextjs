export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-my-20 scroll-smooth" suppressHydrationWarning>
      <body className="font-pretendard flex min-h-screen flex-col">
        <div className="root-layout">
          {children}
        </div>
      </body>
    </html>
  );
}
