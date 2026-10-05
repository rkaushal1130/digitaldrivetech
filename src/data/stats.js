// --- Company Stats (used on Home, About, Portfolio pages) ---
const companyStats = [
  { id: 1, icon: 'Briefcase', value: '30', label: 'Projects Completed' },
  { id: 2, icon: 'Users', value: '28', label: 'Happy Clients' },
  { id: 3, icon: 'Lightbulb', value: '4', label: 'Years Experience' },
  { id: 4, icon: 'UserCheck', value: '10-15', label: 'Expert Team Members' },
];

// --- Internship / Training Stats ---
const internshipStats = [
  { icon: 'fas fa-user-graduate', number: '10+', label: 'Students Trained' },
  { icon: 'fas fa-project-diagram', number: '8+', label: 'Live Projects' },
  { icon: 'fas fa-chart-line', number: '100%', label: 'Student Satisfaction' },
  { icon: 'fas fa-chalkboard-teacher', number: '10+', label: 'Industry Mentors' },

];

// Export both — components can pick the group they need
export { companyStats, internshipStats };

// Default export keeps existing home/Portfolio.jsx working without changes
const stats = companyStats;
export default stats;
