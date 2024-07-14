
export const metadata = {
  title: 'SRC-切符プレイグラウンド',
  description: '芝浦-切符プレイグラウンド',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
