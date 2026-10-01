import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Faculty Dashboard | CareerOS' };

export default function FacultyDashboard() {
  const students = [
    { id: '1', name: 'Arjun Sharma', email: 'arjun@uni.edu', readiness: 72, status: 'On Track' },
    { id: '2', name: 'Priya Singh', email: 'priya@uni.edu', readiness: 85, status: 'Excellent' },
    { id: '3', name: 'Rahul Patel', email: 'rahul@uni.edu', readiness: 58, status: 'Needs Support' },
  ];

  const activities = [
    { id: '1', title: 'Data Structures Assignment', dueDate: '2024-10-28', submissions: 42 },
    { id: '2', title: 'System Design Workshop', dueDate: '2024-11-05', submissions: 0 },
  ];

  return (
    <div className="content">
      <div className="greeting">
        <h2>Faculty Dashboard</h2>
        <p>Monitor student progress and guide their career journey</p>
      </div>

      <div className="stats" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        <div className="card stat-card">
          <div className="stat-top"><span>Total Students</span></div>
          <strong>142</strong>
          <small>↑ 12 this semester</small>
        </div>
        <div className="card stat-card">
          <div className="stat-top"><span>Avg Readiness</span></div>
          <strong>71%</strong>
          <small>↑ 5% vs last month</small>
        </div>
        <div className="card stat-card">
          <div className="stat-top"><span>Active Placements</span></div>
          <strong>28</strong>
          <small>8 offers received</small>
        </div>
      </div>

      <div className="grid" style={{gridTemplateColumns: '1.5fr 1fr'}}>
        <div className="card" style={{padding: '24px'}}>
          <h3 style={{margin: '0 0 20px'}}>Student Progress Overview</h3>
          <div style={{display: 'grid', gap: '16px'}}>
            {students.map(student => (
              <div key={student.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #e6ebf2'}}>
                <div>
                  <strong style={{display: 'block', fontSize: '13px'}}>{student.name}</strong>
                  <span style={{fontSize: '11px', color: '#8a96a8'}}>{student.email}</span>
                </div>
                <div style={{textAlign: 'right'}}>
                  <div style={{fontSize: '12px', fontWeight: '700', marginBottom: '4px'}}>{student.readiness}%</div>
                  <span style={{fontSize: '10px', background: student.readiness >= 70 ? '#eaf8f1' : '#fff3e0', color: student.readiness >= 70 ? '#279466' : '#f57c00', padding: '3px 6px', borderRadius: '3px', fontWeight: '700'}}>{student.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{padding: '24px'}}>
          <h3 style={{margin: '0 0 20px'}}>Active Activities</h3>
          <div style={{display: 'grid', gap: '12px'}}>
            {activities.map(activity => (
              <div key={activity.id} style={{padding: '12px', background: '#f7f9fc', borderRadius: '8px'}}>
                <strong style={{fontSize: '12px', display: 'block', marginBottom: '4px'}}>{activity.title}</strong>
                <span style={{fontSize: '10px', color: '#8a96a8'}}>Due {activity.dueDate} • {activity.submissions} submitted</span>
              </div>
            ))}
            <button className="primary" style={{marginTop: '8px', width: '100%'}}>Create Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
}
