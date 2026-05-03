export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100 px-6">
      <div className="max-w-xl w-full text-center space-y-6">
        
        {/* Brand / Title */}
        <h1 className="text-3xl md:text-4xl font-light tracking-wide">
          Abdullah Abdul Mateen
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          Something refined is on the way. A carefully crafted experience is being built with attention to detail and performance.
        </p>

        {/* Divider */}
        <div className="h-px w-16 bg-neutral-800 mx-auto" />

        {/* Status */}
        <div className="text-xs tracking-[0.2em] uppercase text-neutral-500">
          Coming Soon
        </div>

        {/* Email / CTA */}
        <div className="pt-4">
          <p className="text-xs text-neutral-500 mb-3">
            Get notified when we launch
          </p>

          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs bg-transparent border border-neutral-800 px-4 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-600 transition"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-[11px] text-neutral-700 pt-8">
          © {new Date().getFullYear()} Abdullah Abdul Mateen. All rights reserved.
        </p>
      </div>
    </div>
  );
}