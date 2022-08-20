import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = props => {
  return (
    <ContentLoader
      speed={1.3}
      width={540}
      height={195}
      viewBox="0 0 540 195"
      backgroundColor="var(--background-section)"
      foregroundColor="var(--background-card-box)"
      {...props}
    >
      <circle cx="20" cy="40" r="20" />
      <rect x="493" y="25" rx="4" ry="4" width="47" height="30" />
      <rect x="436" y="25" rx="4" ry="4" width="47" height="30" />
      <rect x="50" y="25" rx="4" ry="4" width="376" height="30" />

      <circle cx="20" cy="85" r="20" />
      <rect x="493" y="70" rx="4" ry="4" width="47" height="30" />
      <rect x="436" y="70" rx="4" ry="4" width="47" height="30" />
      <rect x="50" y="70" rx="4" ry="4" width="376" height="30" />

      <circle cx="20" cy="130" r="20" />
      <rect x="493" y="115" rx="4" ry="4" width="47" height="30" />
      <rect x="436" y="115" rx="4" ry="4" width="47" height="30" />
      <rect x="50" y="115" rx="4" ry="4" width="376" height="30" />

      <circle cx="20" cy="175" r="20" />
      <rect x="493" y="160" rx="4" ry="4" width="47" height="30" />
      <rect x="436" y="160" rx="4" ry="4" width="47" height="30" />
      <rect x="50" y="160" rx="4" ry="4" width="376" height="30" />
    </ContentLoader>
  );
};

export default Skeleton;
