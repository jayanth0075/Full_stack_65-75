import React from 'react';

function Home(){
    return (
      <div style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        {/* Hero */}
        <div style={{animation: 'fadeInUp 0.7s ease-out'}}>
          <div style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 50%, #7c3aed 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite',
            marginBottom: '16px'
          }}>
            TaskFlow
          </div>
          <p style={{fontSize: '1.3rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '40px'}}>
            Organize your projects, collaborate with your team, and get things done — all in one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '900px',
          animation: 'fadeInUp 1s ease-out'
        }}>
          {[
            { icon: '\uD83D\uDCCB', title: 'Workspaces', desc: 'Create and manage team workspaces with ease' },
            { icon: '\uD83D\uDCC5', title: 'Boards & Tasks', desc: 'Track tasks across multiple boards with deadlines' },
            { icon: '\uD83D\uDC65', title: 'Collaboration', desc: 'Invite members and assign tasks seamlessly' },
            { icon: '\uD83D\uDD0D', title: 'Smart Filters', desc: 'Search and filter tasks by name or date' },
          ].map((item, i) => (
            <div key={i} style={{
              flex: '1 1 200px',
              maxWidth: '200px',
              padding: '32px 20px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s ease',
              cursor: 'default',
              animation: `fadeInUp ${0.8 + i * 0.15}s ease-out`
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{fontSize: '2.2rem', marginBottom: '12px'}}>{item.icon}</div>
              <div style={{fontWeight: 600, color: '#e0e0e0', marginBottom: '8px'}}>{item.title}</div>
              <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5}}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Authors */}
        <div style={{
          marginTop: '60px',
          animation: 'fadeIn 1.5s ease-out',
          color: 'rgba(255,255,255,0.35)',
          fontSize: '0.85rem'
        }}>
          Built by <strong style={{color: 'rgba(255,255,255,0.55)'}}>A. Jayanth</strong> &amp; <strong style={{color: 'rgba(255,255,255,0.55)'}}>Kumbhar Kiran</strong>
        </div>
      </div>
    );
}
export default Home;
  
  