'use client';import { useState } from 'react';
const API = process.env.NEXT_PUBLIC_API_BASE;
export default function LicensesPage(){const [license,setLicense]=useState('');const [domain,setDomain]=useState('example.com');
const [result,setResult]=useState<any>(null);const [error,setError]=useState<string>('');
async function check(){setError('');setResult(null);try{const res=await fetch(`${API}/wp-json/brxupdates/v1/check`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({license,domain})});const js=await res.json();if(!res.ok) throw new Error(js?.error||'Request failed');setResult(js);}catch(e:any){setError(e.message);}}
return (<main className="card"><h2>License Check</h2><div className="kv"><label>License Key</label><input className="input" value={license} onChange={e=>setLicense(e.target.value)} placeholder="XXXX-XXXX..." /><label>Domain</label><input className="input" value={domain} onChange={e=>setDomain(e.target.value)} placeholder="myclient.com" /></div>
<div style={{height:12}} /><button className="btn primary" onClick={check}>Check License</button><div style={{height:16}} />{error && <p style={{color:'var(--danger)'}}>{error}</p>}{result && (<div className="card" style={{marginTop:12}}><div className="badge">Response</div><pre>{JSON.stringify(result,null,2)}</pre></div>)}</main>);}
