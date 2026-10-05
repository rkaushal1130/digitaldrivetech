// import React, { useEffect, useRef, useState } from 'react';
// import Container from '../ui/Container';
// import './InternshipStats.css';

// export default function InternshipStats() {
//   const [stats, setStats] = useState([
//     { icon: 'fas fa-user-graduate', number: 500, label: 'Students Trained', suffix: '+' },
//     { icon: 'fas fa-project-diagram', number: 50, label: 'Live Projects', suffix: '+' },
//     { icon: 'fas fa-chalkboard-teacher', number: 30, label: 'Expert Mentors', suffix: '+' },
//     { icon: 'fas fa-award', number: 100, label: 'Practical Exposure', suffix: '%' }
//   ]);

//   const [animated, setAnimated] = useState({});
//   const statsRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && !animated.done) {
//           animateNumbers();
//           setAnimated({ done: true });
//         }
//       });
//     }, { threshold: 0.3 });

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => observer.disconnect();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [animated]);

//   const animateNumbers = () => {
//     stats.forEach((stat, idx) => {
//       const increment = Math.ceil(stat.number / 40);
//       let current = 0;
//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= stat.number) {
//           current = stat.number;
//           clearInterval(timer);
//         }
//         setStats((prevStats) => {
//           const updated = [...prevStats];
//           updated[idx].displayNumber = current;
//           return updated;
//         });
//       }, 30);
//     });
//   };

//   return (
//     <section className="stats" ref={statsRef}>
//       <Container>
//         <div className="stats-grid">
//           {stats.map((stat, idx) => (
//             <div key={idx} className="stat-item">
//               <div className="stat-icon">
//                 <i className={stat.icon}></i>
//               </div>
//               <div>
//                 <div className="stat-number">
//                   {stat.displayNumber !== undefined ? stat.displayNumber : stat.number}{stat.suffix}
//                 </div>
//                 <div className="stat-label">{stat.label}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
import React from 'react';
import Container from '../ui/Container';
import { internshipStats as stats } from '../../data/stats';
import './InternshipStats.css';

export default function InternshipStats() {

  return (
    <section className="stats">
      <Container>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>

              <div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}