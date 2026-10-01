import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'View Students | CareerOS' };

export default function FacultyStudents() {
  const students = [
    { id: '1', name: 'Arjun Sharma', readiness: 72, status: 'On Track', activities: 5 },
    { id: '2', name: 'Priya Singh', readiness: 85, status: 'Excellent', activities: 7 },
    { id: '3', name: 'Rahul Patel', readiness: 58, status: 'Needs Support', activities: 2 },
    { id: '4', name: 'Neha Gupta', readiness: 91, status: 'Excellent', activities: 8 },
    { id: '5', name: 'Vikram Kumar', readiness: 45, status: 'Needs Support', activities: 1 },
  ];

  return (
    <div className="content">
      <div className="greeting">
        <h2>My Students</h2>
        <p>Track progress of all your assigned students</p>
      </div>

      <div className="card" style={{padding: '0'}}>
        <div style={{padding: '20px', borderBottom: '1px solid #e6ebf2', display: 'flex', justifyContent: 'space-between'}}>
          <h3 style={{margin: 0}}>Student List</h3>
          <div style={{display: 'flex', gap: '8px'}}>
            <input type="text" placeholder="Search students..." style={{border: '1px solid #e6ebf2', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', width: '200px'}}/>
          </div>
        </div>
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #e6ebf2'}}>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Name</th>
                <th style={{textAlign: 'center', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Readiness</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Status</th>
                <th style={{textAlign: 'center', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Activities</th>
                <th style={{textAlign: 'center', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} style={{borderBottom: '1px solid #e6ebf2'}}>
                  <td style={{padding: '16px 20px'}}><strong style={{fontSize: '12px'}}>{student.name}</strong></td>
                  <td style={{padding: '16px 20px', textAlign: 'center'}}><strong style={{fontSize: '12px'}}>{student.readiness}%</strong></td>
                  <td style={{padding: '16px 20px'}}><span style={{fontSize: '10px', background: student.readiness >= 70 ? '#eaf8f1' : '#fff3e0', color: student.readiness >= 70 ? '#279466' : '#f57c00', padding: '4px 8px', borderRadius: '4px', fontWeight: '700'}}>{student.status}</span></td>
                  <td style={{padding: '16px 20px', textAlign: 'center', fontSize: '12px', fontWeight: '700'}}>{student.activities}</td>
                  <td style={{padding: '16px 20px', textAlign: 'center'}}><button style={{background: 'none', border: 'none', color: '#2868f0', cursor: 'pointer', fontSize: '11px', fontWeight: '700'}}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
