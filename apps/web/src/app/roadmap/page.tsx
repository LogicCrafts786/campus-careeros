import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Learning Roadmap | CareerOS' };

export default function RoadmapPage() {
  const roadmap = [
    { title: 'Master React Hooks', status: 'IN_PROGRESS', progress: 70, dueDate: 'Dec 15' },
    { title: 'Complete Node.js Backend Course', status: 'IN_PROGRESS', progress: 45, dueDate: 'Jan 20' },
    { title: 'Build 3 Production Projects', status: 'NOT_STARTED', progress: 0, dueDate: 'Feb 28' },
    { title: 'Prepare System Design Concepts', status: 'NOT_STARTED', progress: 0, dueDate: 'Mar 15' },
  ];

  return (
    <div className="content">
      <div className="greeting"><h2>Learning Roadmap</h2><p>Your path to placement readiness</p></div>
      <div className="grid" style={{gridTemplateColumns: '1fr'}}>
        <div className="card" style={{padding: '0'}}>
          {roadmap.map((milestone, idx) => (
            <div key={idx} style={{padding: '20px', borderBottom: idx < roadmap.length - 1 ? '1px solid #e6ebf2' : 'none'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px'}}>
                <div><h4 style={{margin: '0 0 4px'}}>{milestone.title}</h4><span style={{fontSize: '11px', color: '#8a96a8'}}>{milestone.status} • Due {milestone.dueDate}</span></div>
                <span style={{fontSize: '12px', fontWeight: '700'}}>{milestone.progress}%</span>
              </div>
              <div className="bar"><i style={{width: `${milestone.progress}%`}}/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
