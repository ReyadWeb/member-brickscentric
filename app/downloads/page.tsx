'use client';import { useEffect,useState } from 'react';
const UPDATES = process.env.NEXT_PUBLIC_UPDATES_BASE;
export default function DownloadsPage(){const [info,setInfo]=useState<any>(null);const [err,setErr]=useState<string>('');
useEffect(()=>{(async()=>{try{const res=await fetch(`${UPDATES}/info.json?nocache=${Date.now()}`);if(!res.ok) throw new Error('Failed to fetch info.json');const js=await res.json();setInfo(js);}catch(e:any){setErr(e.message);}})();},[]);
return (<main className="card"><h2>Latest Release</h2>{err && <p style={{color:'var(--danger)'}}>{err}</p>}{!info && !err && <p className="small">Loading…</p>}{info && (<div><div className="kv"><div>Version</div><div><strong>{info.version}</strong></div><div>Zip (relative)</div><div><code>{info.zip}</code></div><div>Changelog</div><div><a href={info.changelog} target="_blank">View</a></div></div><hr /><p className="small">Download links are short‑lived signed URLs from the API.</p></div>)}</main>);}
