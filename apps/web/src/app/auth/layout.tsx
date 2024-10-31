export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      lang="en"
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="w-full max-w-xs">
        {children}
      </div>
    </div>
  )
}
