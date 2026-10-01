import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Applications | CareerOS' };

export default function ApplicationsPage() {
  const applications = [
    { company: 'Razorpay', role: 'Frontend Engineer Intern', status: 'INTERVIEW_SCHEDULED', round: 2, date: 'Oct 28' },
    { company: 'Microsoft', role: 'Software Engineer', status: 'UNDER_REVIEW', round: 1, date: 'Pending' },
    { company: 'Google', role: 'Associate Engineer', status: 'APPLIED', round: 1, date: 'Pending' },
  ];

  const statusColors: Record<string, [string, string]> = {
    APPLIED: ['#f0f2f5', '#5a6b7a'],
    UNDER_REVIEW: ['#fffbea', '#b8860b'],
    INTERVIEW_SCHEDULED: ['#e8f5ff', '#0084d0'],
    OFFER_RECEIVED: ['#eaf8f1', '#279466'],
    REJECTED: ['#ffe8e8', '#d32f2f'],
  };

  return (
    <div className="content">
      <div className="greeting"><h2>Applications</h2><p>Track your job and internship journey</p></div>
      <div className="grid" style={{gridTemplateColumns: '1fr'}}>
        <div className="card" style={{padding: '0'}}>
          {applications.map((app, idx) => {
            const [bgColor, textColor] = statusColors[app.status] || ['#f0f2f5', '#5a6b7a'];
            return (
              <div key={idx} style={{padding: '20px', borderBottom: idx < applications.length - 1 ? '1px solid #e6ebf2' : 'none'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div><h4 style={{margin: '0 0 4px'}}>{app.company}</h4><span style={{fontSize: '11px', color: '#8a96a8'}}>{app.role} • Round {app.round}</span></div>
                  <div><span style={{background: bgColor, color: textColor, fontSize: '10px', padding: '6px 10px', borderRadius: '4px', fontWeight: '700', marginRight: '8px'}}>{app.status}</span><span style={{fontSize: '11px', color: '#8a96a8'}}>{app.date}</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
