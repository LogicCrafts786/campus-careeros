import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Projects | CareerOS' };

export default function ProjectsPage() {
  const projects = [
    { title: 'E-Commerce Platform', desc: 'Full-stack marketplace with payment integration', status: 'COMPLETED', tech: ['React', 'Node.js', 'PostgreSQL'] },
    { title: 'AI Chat Application', desc: 'Real-time messaging with LLM integration', status: 'IN_PROGRESS', tech: ['Next.js', 'WebSocket', 'OpenAI'] },
    { title: 'Data Visualization Dashboard', desc: 'Analytics dashboard with real-time updates', status: 'COMPLETED', tech: ['React', 'D3.js', 'API'] },
  ];

  return (
    <div className="content">
      <div className="greeting"><h2>Projects</h2><p>Showcase your best work</p></div>
      <div className="grid" style={{gridTemplateColumns: '1fr'}}>
        {projects.map(project => (
          <div key={project.title} className="card" style={{padding: '24px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px'}}>
              <div><h3>{project.title}</h3><p style={{margin: '4px 0 0', fontSize: '12px', color: '#8a96a8'}}>{project.desc}</p></div>
              <span style={{background: project.status === 'COMPLETED' ? '#eaf8f1' : '#fff3e0', color: project.status === 'COMPLETED' ? '#279466' : '#f57c00', fontSize: '10px', padding: '5px 8px', borderRadius: '5px', fontWeight: '700'}}>{project.status}</span>
            </div>
            <div style={{display: 'flex', gap: '6px', marginBottom: '16px'}}>{project.tech.map(t => <span key={t} style={{background: '#eef4ff', color: '#2868f0', fontSize: '10px', padding: '4px 8px', borderRadius: '4px'}}>{t}</span>)}</div>
            <div style={{display: 'flex', gap: '8px'}}><button className="primary">Edit</button><button style={{border: '1px solid #e6ebf2', background: '#fff', color: '#2868f0', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer'}}>View</button></div>
          </div>
        ))}
        <div className="card" style={{padding: '24px', textAlign: 'center', color: '#8a96a8'}}><p style={{margin: 0}}>+ Add a new project</p></div>
      </div>
    </div>
  );
}
