import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Autopilot — Auto-charge Late Fees on Overdue Invoices',
  description: 'Automatically adds late fees to overdue invoices and sends escalating payment reminders. Built for freelancers, consultants, and small service businesses.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b083d416-a517-40ab-a16a-d1cbde471eca"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
