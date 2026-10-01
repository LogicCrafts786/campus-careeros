import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Skills & Assessments | CareerOS' };

export default function SkillsPage() {
  const skills = [
    ['React', 'ADVANCED', 3, 5],
    ['TypeScript', 'INTERMEDIATE', 2, 3],
    ['Node.js', 'INTERMEDIATE', 2, 3],
    ['PostgreSQL', 'BEGINNER', 1, 2],
  ];

  return (
    <div className="content">
      <div className="greeting"><h2>Skills & Assessments</h2><p>Track competencies and validate knowledge</p></div>
      <div className="grid" style={{gridTemplateColumns: '1fr'}}>
        <div className="card" style={{padding: '24px'}}>
          <div style={{marginBottom: '24px'}}><h3>Your Skills</h3><div className="skill-grid">{skills.map(([name, level]) => <div key={name} className="skill-card"><div><strong>{name}</strong><span className="skill-level">{level}</span></div><button className="icon-button">→</button></div>)}</div></div>
          <div style={{marginBottom: '24px'}}><h3>Available Assessments</h3><div className="assessment-grid"><Assessment name="React Fundamentals" questions={25} duration={30}/><Assessment name="Advanced TypeScript" questions={20} duration={25}/><Assessment name="System Design" questions={5} duration={60}/></div></div>
        </div>
      </div>
    </div>
  );
}

function Assessment({name, questions, duration}: {name: string; questions: number; duration: number}) {
  return <div className="card" style={{padding: '16px'}}><strong style={{display: 'block', marginBottom: '8px'}}>{name}</strong><span style={{fontSize: '12px', color: '#8a96a8'}}>{questions} questions • {duration}min</span><button className="primary" style={{marginTop: '12px', width: '100%'}}>Start Assessment</button></div>;
}
