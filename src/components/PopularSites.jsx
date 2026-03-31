// src/components/PopularSites.jsx

import './PopularSites.css';

const sites = [
  {
    id: 1,
    emoji: '🔵',
    name: 'Facebook',
    component: 'PostCard',
    description: 'Every post on the feed — photo, video, or status — is the same PostCard component with different data.',
  },
  {
    id: 2,
    emoji: '📸',
    name: 'Instagram',
    component: 'GridTile',
    description: 'Every tile in the Explore grid is the same GridTile component — just a different image and like count.',
  },
  {
    id: 3,
    emoji: '💬',
    name: 'WhatsApp Web',
    component: 'ChatItem',
    description: 'Every row in the sidebar is the same ChatItem component — avatar, name, last message, and timestamp.',
  },
];

function PopularSites() {
  return (
    <section className="popular-sites">
      <h2 className="popular-sites-title">⚛️ Popular Websites Using React</h2>

      <div className="sites-list">
        {sites.map((site) => (
          <div key={site.id} className="site-row">

            <div className="site-left">
              <span className="site-emoji">{site.emoji}</span>
              <div className="site-info">
                <div className="site-top">
                  <span className="site-name">{site.name}</span>
                  <span className="site-arrow">→</span>
                  <span className="site-component">&lt;{site.component} /&gt;</span>
                </div>
                <p className="site-description">{site.description}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularSites;