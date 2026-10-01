import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Manage Users | CareerOS' };

export default function ManageUsers() {
  const users = [
    { id: '1', name: 'Arjun Sharma', email: 'arjun@uni.edu', role: 'STUDENT', joinDate: '2024-08-15', status: 'active' },
    { id: '2', name: 'Dr. Meera Singh', email: 'meera@uni.edu', role: 'FACULTY', joinDate: '2024-01-10', status: 'active' },
    { id: '3', name: 'Priya Patel', email: 'priya@uni.edu', role: 'COORDINATOR', joinDate: '2024-06-20', status: 'active' },
    { id: '4', name: 'Raj Kumar', email: 'raj@uni.edu', role: 'STUDENT', joinDate: '2024-09-01', status: 'inactive' },
  ];

  return (
    <div className="content">
      <div className="greeting">
        <h2>Manage Users</h2>
        <p>View and manage all platform users</p>
      </div>

      <div className="card" style={{padding: '0'}}>
        <div style={{padding: '20px', borderBottom: '1px solid #e6ebf2', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{margin: 0}}>User Directory</h3>
          <button className="primary">Add User</button>
        </div>
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #e6ebf2'}}>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Name</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Email</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Role</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Joined</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Status</th>
                <th style={{textAlign: 'center', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{borderBottom: '1px solid #e6ebf2'}}>
                  <td style={{padding: '16px 20px'}}><strong style={{fontSize: '12px'}}>{user.name}</strong></td>
                  <td style={{padding: '16px 20px', fontSize: '12px', color: '#8a96a8'}}>{user.email}</td>
                  <td style={{padding: '16px 20px'}}><span style={{fontSize: '10px', background: '#eef4ff', color: '#2868f0', padding: '4px 8px', borderRadius: '4px', fontWeight: '700'}}>{user.role}</span></td>
                  <td style={{padding: '16px 20px', fontSize: '12px', color: '#8a96a8'}}>{user.joinDate}</td>
                  <td style={{padding: '16px 20px'}}><span style={{fontSize: '10px', background: user.status === 'active' ? '#eaf8f1' : '#f0f2f5', color: user.status === 'active' ? '#279466' : '#5a6b7a', padding: '4px 8px', borderRadius: '4px', fontWeight: '700'}}>{user.status}</span></td>
                  <td style={{padding: '16px 20px', textAlign: 'center'}}><button style={{background: 'none', border: 'none', color: '#2868f0', cursor: 'pointer', fontSize: '11px', fontWeight: '700'}}>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
