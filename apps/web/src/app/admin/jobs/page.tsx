import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Job Postings | CareerOS' };

export default function JobPostings() {
  const jobs = [
    { id: '1', company: 'Razorpay', role: 'Frontend Engineer', type: 'INTERNSHIP', location: 'Bangalore', applications: 42, posted: '2024-10-15' },
    { id: '2', company: 'Microsoft', role: 'Software Engineer', type: 'FULL_TIME', location: 'Hyderabad', applications: 78, posted: '2024-10-10' },
    { id: '3', company: 'Google', role: 'Associate Engineer', type: 'FULL_TIME', location: 'Remote', applications: 156, posted: '2024-09-28' },
  ];

  return (
    <div className="content">
      <div className="greeting">
        <h2>Job Postings</h2>
        <p>Manage all job and internship opportunities</p>
      </div>

      <div className="card" style={{padding: '0'}}>
        <div style={{padding: '20px', borderBottom: '1px solid #e6ebf2', display: 'flex', justifyContent: 'space-between'}}>
          <h3 style={{margin: 0}}>Active Postings</h3>
          <button className="primary">Post New Job</button>
        </div>
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #e6ebf2'}}>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Company</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Role</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Type</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Location</th>
                <th style={{textAlign: 'center', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Applications</th>
                <th style={{textAlign: 'left', padding: '16px 20px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#8a96a8'}}>Posted</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} style={{borderBottom: '1px solid #e6ebf2'}}>
                  <td style={{padding: '16px 20px'}}><strong style={{fontSize: '12px'}}>{job.company}</strong></td>
                  <td style={{padding: '16px 20px', fontSize: '12px', color: '#8a96a8'}}>{job.role}</td>
                  <td style={{padding: '16px 20px'}}><span style={{fontSize: '10px', background: job.type === 'FULL_TIME' ? '#eef4ff' : '#eaf8f1', color: job.type === 'FULL_TIME' ? '#2868f0' : '#279466', padding: '4px 8px', borderRadius: '4px', fontWeight: '700'}}>{job.type}</span></td>
                  <td style={{padding: '16px 20px', fontSize: '12px', color: '#8a96a8'}}>{job.location}</td>
                  <td style={{padding: '16px 20px', textAlign: 'center'}}><strong>{job.applications}</strong></td>
                  <td style={{padding: '16px 20px', fontSize: '12px', color: '#8a96a8'}}>{job.posted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
