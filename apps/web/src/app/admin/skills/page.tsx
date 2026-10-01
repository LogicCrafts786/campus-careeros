import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Manage Skills | CareerOS' };

export default function ManageSkills() {
  const skillCategories = [
    { category: 'PROGRAMMING', count: 24, skills: ['Python', 'JavaScript', 'Java', 'C++', 'Go', 'Rust'] },
    { category: 'WEB_DEVELOPMENT', count: 18, skills: ['React', 'Vue.js', 'Angular', 'Next.js', 'Express.js', 'Django'] },
    { category: 'DATA_SCIENCE', count: 12, skills: ['Machine Learning', 'Data Analysis', 'TensorFlow', 'Pandas', 'Statistics'] },
    { category: 'CLOUD_COMPUTING', count: 10, skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'] },
  ];

  return (
    <div className="content">
      <div className="greeting">
        <h2>Manage Skills</h2>
        <p>Manage the skill catalog and assessments</p>
      </div>

      <div className="grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {skillCategories.map(cat => (
          <div key={cat.category} className="card" style={{padding: '24px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
              <h3 style={{margin: 0}}>{cat.category.replace(/_/g, ' ')}</h3>
              <span style={{background: '#eef4ff', color: '#2868f0', padding: '4px 10px', borderRadius: '4px', fontWeight: '700', fontSize: '12px'}}>{cat.count} skills</span>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px'}}>
              {cat.skills.map(skill => (
                <span key={skill} style={{background: '#f0f2f5', color: '#65748a', padding: '5px 8px', borderRadius: '4px', fontSize: '11px'}}>{skill}</span>
              ))}
            </div>
            <button style={{border: '1px solid #e6ebf2', background: '#fff', color: '#2868f0', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', width: '100%'}}>Add Skill</button>
          </div>
        ))}
      </div>
    </div>
  );
}
