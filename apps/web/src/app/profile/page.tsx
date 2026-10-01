import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'My Profile | CareerOS' };

export default function ProfilePage() {
  return (
    <div className="content">
      <div className="greeting"><h2>My Profile</h2><p>Build a compelling career narrative</p></div>
      <div className="grid" style={{gridTemplateColumns: '1fr'}}>
        <div className="card" style={{padding: '32px'}}>
          <div className="profile-section"><h3>Personal Information</h3><div className="form-grid"><div><label>First Name</label><input type="text" defaultValue="Arjun" className="input"/></div><div><label>Last Name</label><input type="text" defaultValue="Sharma" className="input"/></div><div><label>Email</label><input type="email" defaultValue="arjun.sharma@university.edu" className="input"/></div><div><label>Phone</label><input type="tel" defaultValue="+91 98765 43210" className="input"/></div></div></div>
          <div className="profile-section"><h3>Academic Information</h3><div className="form-grid"><div><label>Institution</label><input type="text" defaultValue="IIT Delhi" className="input"/></div><div><label>Degree</label><input type="text" defaultValue="B.Tech" className="input"/></div><div><label>Branch</label><input type="text" defaultValue="Computer Science" className="input"/></div><div><label>Current Year</label><select className="input"><option>Third Year</option><option>Final Year</option></select></div><div><label>CGPA</label><input type="number" step="0.01" defaultValue="8.42" className="input"/></div></div></div>
          <div className="profile-section"><h3>Career Information</h3><div className="form-grid"><div style={{gridColumn: '1/-1'}}><label>Career Objective</label><textarea rows={3} defaultValue="Seeking opportunities in full-stack web development with focus on scalable systems." className="input"/></div><div><label>Preferred Roles</label><input type="text" placeholder="Software Engineer, Frontend Developer..." className="input"/></div><div><label>Preferred Locations</label><input type="text" placeholder="Bangalore, Mumbai, Remote" className="input"/></div></div></div>
          <div className="profile-section"><h3>Links & Portfolio</h3><div className="form-grid"><div><label>GitHub</label><input type="url" placeholder="https://github.com/..." className="input"/></div><div><label>LinkedIn</label><input type="url" placeholder="https://linkedin.com/in/..." className="input"/></div><div><label>Portfolio</label><input type="url" placeholder="https://yourportfolio.com" className="input"/></div><div><label>Resume</label><input type="url" placeholder="Link to resume" className="input"/></div></div></div>
          <button className="primary" style={{marginTop: '24px'}}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
