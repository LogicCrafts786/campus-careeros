import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Analytics | CareerOS' };

export default function Analytics() {
  return (
    <div className="content">
      <div className="greeting">
        <h2>Analytics & Reports</h2>
        <p>Platform insights and placement metrics</p>
      </div>

      <div className="stats" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <div className="card stat-card">
          <div className="stat-top"><span>Placement Rate</span></div>
          <strong>82%</strong>
          <small>↑ 5% vs last year</small>
        </div>
        <div className="card stat-card">
          <div className="stat-top"><span>Avg Package</span></div>
          <strong>₹8.5L</strong>
          <small>↑ ₹0.8L increase</small>
        </div>
        <div className="card stat-card">
          <div className="stat-top"><span>Top Recruiter</span></div>
          <strong>Google</strong>
          <small>14 offers in 2024</small>
        </div>
        <div className="card stat-card">
          <div className="stat-top"><span>Time to Place</span></div>
          <strong>3.2mo</strong>
          <small>↓ 0.5mo faster</small>
        </div>
      </div>

      <div className="grid" style={{gridTemplateColumns: '1fr'}}>
        <div className="card" style={{padding: '24px'}}>
          <h3 style={{margin: '0 0 24px'}}>Placement Pipeline</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px'}}>
            <div style={{textAlign: 'center', padding: '16px', background: '#f7f9fc', borderRadius: '8px'}}>
              <div style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>2847</div>
              <div style={{fontSize: '11px', color: '#8a96a8'}}>Total Registered</div>
            </div>
            <div style={{textAlign: 'center', padding: '16px', background: '#f7f9fc', borderRadius: '8px'}}>
              <div style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>2,340</div>
              <div style={{fontSize: '11px', color: '#8a96a8'}}>Profile Complete</div>
            </div>
            <div style={{textAlign: 'center', padding: '16px', background: '#f7f9fc', borderRadius: '8px'}}>
              <div style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>1,856</div>
              <div style={{fontSize: '11px', color: '#8a96a8'}}>Active Applicants</div>
            </div>
            <div style={{textAlign: 'center', padding: '16px', background: '#f7f9fc', borderRadius: '8px'}}>
              <div style={{fontSize: '20px', fontWeight: '700', marginBottom: '8px'}}>456</div>
              <div style={{fontSize: '11px', color: '#8a96a8'}}>In Interview</div>
            </div>
            <div style={{textAlign: 'center', padding: '16px', background: '#eaf8f1', borderRadius: '8px'}}>
              <div style={{fontSize: '20px', fontWeight: '700', color: '#279466', marginBottom: '8px'}}>234</div>
              <div style={{fontSize: '11px', color: '#279466'}}>Placed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
