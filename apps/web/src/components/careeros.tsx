'use client';

import { useState } from 'react';
import { Bell, BookOpen, BriefcaseBusiness, CheckCircle2, ChevronRight, ClipboardCheck, FolderKanban, LayoutDashboard, Menu, Plus, Search, Settings, Sparkles, Target, UserRound, X } from 'lucide-react';

const navigation = [
  ['Overview', LayoutDashboard], ['My profile', UserRound], ['Skills & assessments', Target],
  ['Projects', FolderKanban], ['Learning roadmap', BookOpen], ['Applications', BriefcaseBusiness],
] as const;

const opportunities = [
  ['Razorpay', 'Frontend Engineering Intern', 'Internship', '#185abc', 'R'],
  ['Microsoft', 'Software Engineer · New Grad', 'Full-time', '#2b8fca', 'M'],
  ['Deloitte', 'Technology Analyst', 'Full-time', '#86b93f', 'D'],
];

export function CareerOS() {
  const [active, setActive] = useState('Overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2400); };
  const select = (name: string) => { setActive(name); setMobileOpen(false); };

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="logo"><span className="logo-mark">C</span> CareerOS</div>
      <nav className="nav"><div className="nav-label">Workspace</div>{navigation.map(([label, Icon]) => <button key={label} className={`nav-button ${active === label ? 'active' : ''}`} onClick={() => select(label)}><Icon size={16}/>{label}</button>)}<div className="nav-label">Support</div><button className={`nav-button ${active === 'Settings' ? 'active' : ''}`} onClick={() => select('Settings')}><Settings size={16}/>Settings</button></nav>
      <div className="sidebar-footer"><div className="user-mini"><div className="avatar">AS</div><div><strong>Arjun Sharma</strong><span>Computer Science · Y3</span></div></div></div>
    </aside>
    <main className="main">
      <header className="topbar"><div className="heading"><button className="icon-button mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open navigation">{mobileOpen ? <X size={19}/> : <Menu size={19}/>}</button><div><h1>{active}</h1><p>Thursday, 24 October 2024</p></div></div><div className="actions"><button className="icon-button" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"><Search size={17}/></button><button className="icon-button" onClick={() => notify('You are all caught up')} aria-label="Notifications"><Bell size={17}/></button><div className="avatar">AS</div></div></header>
      {mobileOpen && <div className="mobile-nav">{navigation.map(([label, Icon]) => <button key={label} className="nav-button" onClick={() => select(label)}><Icon size={16}/>{label}</button>)}</div>}
      {searchOpen && <div className="search-popover"><input autoFocus placeholder="Search your workspace" onKeyDown={(event) => { if (event.key === 'Enter') notify(`Searching for “${event.currentTarget.value}”`); }}/></div>}
      <section className="content"><div className="greeting"><div><h2>Good morning, Arjun <span>✦</span></h2><p>Small steps today. Stronger opportunities tomorrow.</p></div><button className="primary" onClick={() => notify('New activity added to your roadmap')}><Plus size={14}/> Add activity</button></div>
        <div className="stats"><Stat label="Profile completion" value="72%" note="↑ 8% this month" icon={<CheckCircle2 size={15}/>}/><Stat label="Skills assessed" value="8 / 12" note="4 skills to explore" icon={<Target size={15}/>}/><Stat label="Active projects" value="4" note="2 featured on portfolio" icon={<FolderKanban size={15}/>}/><Stat label="Applications" value="6" note="2 interviews upcoming" icon={<BriefcaseBusiness size={15}/>}/></div>
        <div className="grid"><div className="column"><section className="card panel"><PanelHead title="Your placement readiness" subtitle="A reflection of your progress — not a prediction." action="View details" onClick={() => notify('Readiness details opened')}/><div className="progress-wrap"><div className="progress-ring"><b>72%</b></div><div><strong>You’re building great momentum</strong><p className="muted">Complete your profile and keep your roadmap moving to improve your evidence base.</p></div></div><div className="mini-progress"><Progress label="Profile & goals" value={88}/><Progress label="Skills evidence" value={64}/><Progress label="Projects & portfolio" value={76}/><Progress label="Interview preparation" value={48}/></div></section><section className="card panel"><PanelHead title="Your next steps" subtitle="Keep your momentum going this week" action="View roadmap" onClick={() => select('Learning roadmap')}/><div className="timeline"><Timeline done title="Complete React assessment" meta="Skills assessment · Due today" tag="15 min"/><Timeline title="Add your latest project case study" meta="Portfolio · Due tomorrow" tag="30 min"/><Timeline title="Practice behavioral interview questions" meta="Interview prep · Friday" tag="20 min"/></div></section></div><div className="column"><section className="card panel"><PanelHead title="Recommended for you" subtitle="Based on your goals and skills"/><Sparkles size={16} className="sparkle"/>{opportunities.map(([company, role, type, color, initials]) => <div className="opportunity" key={company}><div className="company"><div className="company-logo" style={{background: color}}>{initials}</div><div><strong>{company}</strong><span>{role}</span></div></div><span className="badge">{type}</span></div>)}<button className="text-button" onClick={() => notify('Showing all matched opportunities')}>See all opportunities <ChevronRight size={12}/></button></section><section className="card panel"><PanelHead title="Quick actions" subtitle="Make your profile work harder"/><div className="quick-grid"><Quick icon={<UserRound size={16}/>} title="Update profile" text="2 fields left" onClick={() => select('My profile')}/><Quick icon={<ClipboardCheck size={16}/>} title="Take assessment" text="Test your skills" onClick={() => select('Skills & assessments')}/><Quick icon={<Target size={16}/>} title="Log progress" text="Update a milestone" onClick={() => notify('Progress update opened')}/></div></section></div></div>
      </section>{toast && <div className="toast">{toast}</div>}
    </main>
  </div>;
}

function PanelHead({title, subtitle, action, onClick}:{title:string;subtitle:string;action?:string;onClick?:()=>void}) { return <div className="panel-head"><div><h3 className="panel-title">{title}</h3><p className="panel-subtitle">{subtitle}</p></div>{action && <button className="text-button" onClick={onClick}>{action} <ChevronRight size={12}/></button>}</div>; }
function Stat({icon,label,value,note}:{icon:React.ReactNode;label:string;value:string;note:string}) { return <div className="card stat-card"><div className="stat-top"><span>{label}</span><span className="stat-icon">{icon}</span></div><strong>{value}</strong><small>{note}</small></div>; }
function Progress({label,value}:{label:string;value:number}) { return <div className="mini-row"><span>{label}</span><div className="bar"><i style={{width: `${value}%`}}/></div><b>{value}%</b></div>; }
function Timeline({done,title,meta,tag}:{done?:boolean;title:string;meta:string;tag:string}) { return <div className={`timeline-item ${done ? 'done' : ''}`}><span className="dot"/><div className="timeline-copy"><strong>{title}</strong><span>{meta}</span><small>{tag}</small></div></div>; }
function Quick({icon,title,text,onClick}:{icon:React.ReactNode;title:string;text:string;onClick:()=>void}) { return <button className="quick" onClick={onClick}>{icon}<strong>{title}</strong><span>{text}</span></button>; }
