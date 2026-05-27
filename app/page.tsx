export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Invoice Autopilot
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-charge late fees on<br />
          <span className="text-[#58a6ff]">overdue invoices</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop chasing payments manually. Invoice Autopilot monitors due dates, applies configurable late fees, and sends escalating reminder emails — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⏰', title: 'Automatic Monitoring', desc: 'Watches every invoice due date so you never miss a late payment.' },
            { icon: '💸', title: 'Configurable Late Fees', desc: 'Set flat or percentage fees with custom grace periods per client.' },
            { icon: '📧', title: 'Escalating Reminders', desc: 'Sends polite, firm, then urgent emails as days overdue increase.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoices monitored',
              'Configurable late fee rules',
              'Escalating email reminders',
              'Webhook sync with invoicing tools',
              'Dashboard & audit log',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which invoicing platforms do you support?',
              a: 'Invoice Autopilot connects via webhooks and works with platforms like FreshBooks, Wave, and any tool that supports outbound webhooks. More native integrations are added regularly.'
            },
            {
              q: 'How are late fees calculated?',
              a: 'You configure the rules: choose a flat fee or a percentage of the invoice total, set a grace period (e.g. 5 days), and decide how often fees compound. Invoice Autopilot handles the math.'
            },
            {
              q: 'Can I customize the reminder emails?',
              a: 'Yes. You can edit the tone and content of each escalation tier — from a gentle nudge on day 1 to a firm notice on day 30 — so every message matches your brand voice.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Invoice Autopilot. All rights reserved.
      </footer>
    </main>
  )
}
