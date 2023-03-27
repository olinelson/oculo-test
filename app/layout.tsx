import "@picocss/pico/css/pico.min.css"
import "./globals.css"

export const metadata = {
  title: "Oculo",
  description: "Group images by modality",
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
