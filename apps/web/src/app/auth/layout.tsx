export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      lang="en"
      className="mii-h-screen flex flex-col items-center justify-center px-4"
    >
      {children}
    </div>
  )
}
