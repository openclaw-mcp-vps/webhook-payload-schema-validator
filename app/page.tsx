export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Validate Webhook Payloads{' '}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Get unique webhook URLs, define JSON schemas, and receive instant alerts when payload structure changes unexpectedly. Never be caught off guard by a breaking API change again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Validating — $15/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🔗</div>
            <h3 className="text-white font-semibold mb-1">Unique Webhook URLs</h3>
            <p className="text-[#8b949e] text-sm">Each endpoint gets a dedicated URL. Point any service at it and start capturing payloads instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🧩</div>
            <h3 className="text-white font-semibold mb-1">JSON Schema Validation</h3>
            <p className="text-[#8b949e] text-sm">Define expected payload shapes with JSON Schema. Every incoming request is validated automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🔔</div>
            <h3 className="text-white font-semibold mb-1">Instant Alerts</h3>
            <p className="text-[#8b949e] text-sm">Get notified via email or Slack the moment a payload fails validation. Catch breaking changes before they cause outages.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited webhook endpoints',
              'JSON Schema validation on every request',
              'Email & Slack alerts on failures',
              'Full payload history & logs',
              'Dashboard with webhook health metrics',
              'Priority support',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does schema validation work?</h3>
            <p className="text-[#8b949e] text-sm">You define a JSON Schema for each webhook endpoint. When a payload arrives, it is validated against your schema. If it fails, you get an immediate alert with details about what changed.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which alert channels are supported?</h3>
            <p className="text-[#8b949e] text-sm">Currently email and Slack are supported. Configure your preferred channel in the dashboard and alerts are sent the moment a validation failure is detected.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How long are webhook logs retained?</h3>
            <p className="text-[#8b949e] text-sm">All payload logs and validation results are retained for 90 days so you can audit history, debug issues, and track when schema drift first occurred.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Webhook Schema Validator. All rights reserved.
      </footer>
    </main>
  )
}
