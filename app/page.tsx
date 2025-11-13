import Link from "next/link";
export default function Page(){
  return (<main className="grid">
    <section className="card"><h2>Licenses</h2><p className="small">Check a license key status.</p><Link className="btn primary" href="/licenses">Open Licenses</Link></section>
    <section className="card"><h2>Downloads</h2><p className="small">See the latest release info.</p><Link className="btn primary" href="/downloads">View Downloads</Link></section>
    <section className="card"><h2>Account</h2><p className="small">Save a token locally (demo).</p><Link className="btn" href="/login">Go to Login</Link></section>
  </main>);
}
