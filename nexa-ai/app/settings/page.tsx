'use client';

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tighter mb-10">Settings</h1>

        <div className="space-y-6">
          <div className="card p-8">
            <h3 className="font-semibold text-xl mb-4">Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-[#94A3B8]">Full Name</label>
                <input className="input w-full mt-2" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-[#94A3B8]">Business Name</label>
                <input className="input w-full mt-2" placeholder="Your company" />
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="font-semibold text-xl mb-4">Preferences</h3>
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>Dark Mode</div>
              <div className="text-[#10B981]">Enabled</div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>AI Memory</div>
              <div className="text-[#10B981]">Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
