import localFont from 'next/font/local'
export const metadata = {
  title: 'SRC-切符プレイグラウンド',
  description: '芝浦-切符プレイグラウンド',
}
const myFont = localFont({
  src: 'JF-Dot-Ayu20.ttf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
