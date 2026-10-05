import React from 'react';
import Container from '../ui/Container';
import './PricingCompare.css';
import icon1 from '../../assets/icons/Pricing SVG/1st.svg';
import icon2 from '../../assets/icons/Pricing SVG/2nd.svg';
import icon3 from '../../assets/icons/Pricing SVG/3rd.svg';
import icon5 from '../../assets/icons/Pricing SVG/5th.svg';
import icon6 from '../../assets/icons/Pricing SVG/6th.svg';

const compareData = [
  {
    id: 1,
    feature: 'Responsive Design',
    icon: icon1,
    basic: true,
    standard: true,
    premium: true,
  },
  {
    id: 2,
    feature: 'SEO Optimization',
    icon: icon2,
    basic: true,
    standard: true,
    premium: true,
  },
  {
    id: 3,
    feature: 'Speed Optimization',
    icon: icon3,
    basic: false,
    standard: true,
    premium: true,
  },
  {
    id: 4,
    feature: 'CMS Integration',
    icon: 'CMS',
    basic: false,
    standard: true,
    premium: true,
  },
  {
    id: 5,
    feature: 'Support & Maintenance',
    icon: icon5,
    basic: '1 Month',
    standard: '3 Months',
    premium: '6 Months',
  },
  {
    id: 6,
    feature: 'Priority Support',
    icon: icon6,
    basic: false,
    standard: true,
    premium: true,
  },
];

export default function PricingCompare() {
  return (
    <div className="pricing-compare-wrap">
      <Container>
        <div className="pricing-compare">
          <h2>Compare Plan Features</h2>
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>
                    Basic
                    <small>₹9,999</small>
                  </th>
                  <th className="col-highlight">
                    Standard
                    <small>₹19,999</small>
                  </th>
                  <th>
                    Premium
                    <small>₹34,999</small>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareData.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <div className="pricing-feat">
                        <span className="pricing-feat-icon">
                          {typeof row.icon === 'string' && row.icon === 'CMS' ? (
                            row.icon
                          ) : (
                            <img src={row.icon} alt={row.feature} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          )}
                        </span>
                        {row.feature}
                      </div>
                    </td>
                    <td className={typeof row.basic === 'boolean' ? (row.basic ? 'yes' : 'no') : ''}>
                      {typeof row.basic === 'boolean' ? (row.basic ? '✓' : '✗') : row.basic}
                    </td>
                    <td className={`col-highlight ${typeof row.standard === 'boolean' ? (row.standard ? 'yes' : 'no') : ''}`}>
                      {typeof row.standard === 'boolean' ? (row.standard ? '✓' : '✗') : row.standard}
                    </td>
                    <td className={typeof row.premium === 'boolean' ? (row.premium ? 'yes' : 'no') : ''}>
                      {typeof row.premium === 'boolean' ? (row.premium ? '✓' : '✗') : row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}
