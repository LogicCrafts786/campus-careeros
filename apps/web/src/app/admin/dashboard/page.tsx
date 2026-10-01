import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Admin Dashboard | CareerOS' };

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '2,847', change: '+142 this month' },
    { label: 'Active Sessions', value: '456', change: '+23% today' },
    { label: 'Job Postings', value: '89', change: '12 new this week' },
    { label: 'Placements', value: '234', change: '+18% vs last month' },
  ];

  const recentActivities = [
    { type: 'User Registered', description: 'New student registered', time: '2 hours ago' },
    { type: 'Job Posted', description: 'Microsoft - Software Engineer', time: '4 hours ago' },
    { type: 'Offer Accepted', description: 'Student accepted offer from Google', time: '1 day ago' },
  ];

  return (
    <div className="content">
      <div className="greeting">
        <h2>Admin Dashboard</h2>
        <p>Manage platform operations and analytics</p>
      </div>

      <div className="stats">
        {stats.map(stat => (
          <div key={stat.label} className="card stat-card">
            <div className="stat-top"><span>{stat.label}</span></div>
            <strong>{stat.value}</strong>
            <small>{stat.change}</small>
          </div>
        ))}
      </div>

      <div className="grid" style={{gridTemplateColumns: '1.5fr 1fr'}}>
        <div className="card" style={{padding: '24px'}}>
          <h3 style={{margin: '0 0 20px'}}>Recent Activities</h3>
          <div style={{display: 'grid', gap: '12px'}}>
            {recentActivities.map((activity, idx) => (
              <div key={idx} style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: idx < recentActivities.length - 1 ? '1px solid #e6ebf2' : 'none'}}>
                <div>
                  <strong style={{display: 'block', fontSize: '12px', marginBottom: '4px'}}>{activity.type}</strong>
                  <span style={{fontSize: '11px', color: '#8a96a8'}}>{activity.description}</span>
                </div>
                <span style={{fontSize: '10px', color: '#b1bac8'}}>{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{padding: '24px'}}>
          <h3 style={{margin: '0 0 20px'}}>Quick Actions</h3>
          <div style={{display: 'grid', gap: '10px'}}>
            <button className="primary" style={{width: '100%'}}>Manage Users</button>
            <button className="primary" style={{width: '100%'}}>Add Job Posting</button>
            <button className="primary" style={{width: '100%'}}>View Reports</button>
            <button style={{border: '1px solid #e6ebf2', background: '#fff', color: '#2868f0', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', width: '100%'}}>Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
