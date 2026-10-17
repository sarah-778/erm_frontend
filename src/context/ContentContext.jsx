import React, { createContext, useContext, useState } from 'react';

// Default initial state
const initialData = {
  heroBanner: '/assets/hero.jpeg',
  leaders: [
    {
      id: '1',
      name: 'David Orishaba',
      role: 'Managing Director & Lead Risk Consultant',
      bio: 'Over 15 years directing enterprise risk programs...',
      avatarUrl: '', // URL or base64 data
      initials: 'DO',
      accent: 'emerald',
    },
    {
      id: '2',
      name: 'Sarah Nalubega',
      role: 'Head of Operations & Field Intelligence',
      bio: 'Former law enforcement intelligence analyst...',
      avatarUrl: '',
      initials: 'SN',
      accent: 'teal',
    },
  ],
};

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [content, setContent] = useState(initialData);

  // Update Hero Banner Image
  const updateHeroBanner = (newUrl) => {
    setContent((prev) => ({ ...prev, heroBanner: newUrl }));
  };

  // Update Leadership Profile Image
  const updateLeaderImage = (id, newUrl) => {
    setContent((prev) => ({
      ...prev,
      leaders: prev.leaders.map((leader) =>
        leader.id === id ? { ...leader, avatarUrl: newUrl } : leader
      ),
    }));
  };

  // Update Leadership Text Fields (Name, Role, Bio)
  const updateLeaderText = (id, field, value) => {
    setContent((prev) => ({
      ...prev,
      leaders: prev.leaders.map((leader) =>
        leader.id === id ? { ...leader, [field]: value } : leader
      ),
    }));
  };

  // Reset Content back to Defaults
  const resetContent = () => {
    setContent(initialData);
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateHeroBanner,
        updateLeaderImage,
        updateLeaderText,
        resetContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext);