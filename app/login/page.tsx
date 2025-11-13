'use client';import { useState,useEffect } from 'react';
export default function LoginPage(){const [token,setToken]=useState('');useEffect(()=>{setToken(localStorage.getItem('bc_auth_token')||'')},[]);
function save(){localStorage.setItem('bc_auth_token',token);alert('Saved locally.');}
return (<main className="card"><h2>Login (Placeholder)</h2><p className="small">Stores a token in localStorage.</p>
<input className="input" placeholder="Paste token..." value={token} onChange={e=>setToken(e.target.value)} /><div style={{height:12}} />
<button className="btn primary" onClick={save}>Save</button></main>);}
