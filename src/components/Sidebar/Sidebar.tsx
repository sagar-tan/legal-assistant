import React from 'react';
import styled from 'styled-components';
import { FaUser, FaPlus, FaHistory, FaFileAlt, FaSearch, FaComments } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    border-left: 4px solid #3498db;
  }
`;

const MenuIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const MenuText = styled.div`
  font-size: 14px;
`;

const ProfileSection = styled.div`
  margin-top: auto;
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
`;

const ProfileAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ProfileInfo = styled.div`
  font-size: 14px;
`;

const ProfileName = styled.div`
  font-weight: bold;
`;

const ProfileRole = styled.div`
  font-size: 12px;
  opacity: 0.7;
`;

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  const menuItems = [
    { id: 'new-chat', icon: <FaPlus />, text: 'New Chat' },
    { id: 'history', icon: <FaHistory />, text: 'History' },
    { id: 'create-documents', icon: <FaFileAlt />, text: 'Create Documents' },
    { id: 'analyse-docs', icon: <FaSearch />, text: 'Analyse Docs' },
    { id: 'custom-query', icon: <FaComments />, text: 'Custom Query' },
  ];

  return (
    <SidebarContainer>
      <Logo>Legal Assistant</Logo>

      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          className={activeItem === item.id ? 'active' : ''}
          onClick={() => onItemClick(item.id)}
        >
          <MenuIcon>{item.icon}</MenuIcon>
          <MenuText>{item.text}</MenuText>
        </MenuItem>
      ))}

      <ProfileSection>
        <ProfileAvatar>
          <FaUser />
        </ProfileAvatar>
        <ProfileInfo>
          <ProfileName>User Name</ProfileName>
          <ProfileRole>Legal Client</ProfileRole>
        </ProfileInfo>
      </ProfileSection>
    </SidebarContainer>
  );
};

export default Sidebar; 