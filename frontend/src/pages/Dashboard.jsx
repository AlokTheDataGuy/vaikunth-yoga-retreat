import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaCalendarAlt,
  FaBookmark,
  FaCog,
  FaSignOutAlt,
  FaEdit,
  FaEye,
  FaTrash,
  FaDollarSign,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { LoadingSpinner } from '../components/ui/FormComponents';

// Context
import { AuthContext } from '../context/AuthContext';

// Utils
import { getImageUrl } from '../utils/imageUtils';

const Dashboard = () => {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated]);

  const fetchDashboardData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('token');

      const response = await fetch(`${apiUrl}/api/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDashboardData(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaUser },
    { id: 'bookings', label: 'My Bookings', icon: FaCalendarAlt },
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'settings', label: 'Settings', icon: FaCog },
  ];

  // Add admin tabs if user is admin
  if (user?.role === 'admin') {
    tabs.splice(1, 0,
      { id: 'manage-bookings', label: 'Manage Bookings', icon: FaBookmark },
      { id: 'manage-programs', label: 'Manage Programs', icon: FaCalendarAlt },
      { id: 'manage-users', label: 'Manage Users', icon: FaUser }
    );
  }

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner size="lg" />
        <LoadingText>Loading dashboard...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <DashboardContainer>
      {/* Hero Section with Background Image */}
      <DashboardHero backgroundImage={getImageUrl('/assets/images/dashboard.jpg', 1920, 800)}>
        <DashboardHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          </motion.div>
        </DashboardHeroContent>
      </DashboardHero>

      {/* Main Dashboard Layout */}
      <DashboardLayout>
        {/* Vertical Navigation Container */}
        <NavigationContainer>
          <NavigationHeader>
            <UserInfo>
              <UserAvatar>
                <FaUser />
              </UserAvatar>
              <UserDetails>
                <UserName>{user?.name || user?.firstName || 'Guest'}</UserName>
                <UserRole>{user?.role || 'User'}</UserRole>
              </UserDetails>
            </UserInfo>
          </NavigationHeader>

          <NavigationLinks>
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <NavLink
                  key={tab.id}
                  $active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon />
                  <span>{tab.label}</span>
                </NavLink>
              );
            })}
          </NavigationLinks>

          <NavigationFooter>
            <LogoutButton onClick={handleLogout}>
              <FaSignOutAlt />
              <span>Logout</span>
            </LogoutButton>
          </NavigationFooter>
        </NavigationContainer>

        {/* Main Content */}
        <MainContent>
          {activeTab === 'overview' && <OverviewTab data={dashboardData} />}
          {activeTab === 'bookings' && <BookingsTab data={dashboardData?.bookings} />}
          {activeTab === 'profile' && <ProfileTab user={user} />}
          {activeTab === 'settings' && <SettingsTab />}
          {activeTab === 'manage-bookings' && <ManageBookingsTab />}
          {activeTab === 'manage-programs' && <ManageProgramsTab />}
          {activeTab === 'manage-users' && <ManageUsersTab />}
        </MainContent>
      </DashboardLayout>
    </DashboardContainer>
  );
};

// Overview Tab Component
const OverviewTab = ({ data }) => (
  <ContentWrapper>
    <SectionHeading
      title="Dashboard Overview"
      subtitle="Your wellness journey at a glance"
    />

    <StatsGrid>
      <StatCard>
        <StatIcon>
          <FaCalendarAlt />
        </StatIcon>
        <StatContent>
          <StatNumber>{data?.bookings?.total || 0}</StatNumber>
          <StatLabel>Total Bookings</StatLabel>
        </StatContent>
      </StatCard>
      <StatCard>
        <StatIcon>
          <FaClock />
        </StatIcon>
        <StatContent>
          <StatNumber>{data?.bookings?.upcoming?.length || 0}</StatNumber>
          <StatLabel>Upcoming Programs</StatLabel>
        </StatContent>
      </StatCard>
      <StatCard>
        <StatIcon>
          <FaCheckCircle />
        </StatIcon>
        <StatContent>
          <StatNumber>{data?.bookings?.completed || 0}</StatNumber>
          <StatLabel>Completed Programs</StatLabel>
        </StatContent>
      </StatCard>
      <StatCard>
        <StatIcon>
          <FaDollarSign />
        </StatIcon>
        <StatContent>
          <StatNumber>${data?.financials?.totalSpent || 0}</StatNumber>
          <StatLabel>Total Spent</StatLabel>
        </StatContent>
      </StatCard>
    </StatsGrid>

    {data?.bookings?.upcoming?.length > 0 && (
      <UpcomingSection>
        <SectionHeading
          title="Upcoming Programs"
          subtitle="Your next wellness experiences"
          align="left"
          withDivider={false}
        />
        <BookingsList>
          {data.bookings.upcoming.slice(0, 3).map(booking => (
            <BookingCard key={booking._id}>
              <BookingInfo>
                <BookingTitle>{booking.program?.title}</BookingTitle>
                <BookingDate>
                  {new Date(booking.startDate).toLocaleDateString()} -
                  {new Date(booking.endDate).toLocaleDateString()}
                </BookingDate>
                <BookingStatus $status={booking.status}>
                  {booking.status}
                </BookingStatus>
              </BookingInfo>
              <BookingActions>
                <Button variant="outline" size="small">
                  View Details
                </Button>
              </BookingActions>
            </BookingCard>
          ))}
        </BookingsList>
      </UpcomingSection>
    )}
  </ContentWrapper>
);

// Bookings Tab Component
const BookingsTab = ({ data }) => (
  <ContentWrapper>
    <SectionHeading
      title="My Bookings"
      subtitle="Manage your retreat bookings"
      align="left"
      withDivider={false}
    />

    <BookingFilters>
      <FilterButton $active>All</FilterButton>
      <FilterButton>Upcoming</FilterButton>
      <FilterButton>Completed</FilterButton>
      <FilterButton>Cancelled</FilterButton>
    </BookingFilters>

    <BookingsList>
      {data?.upcoming?.map(booking => (
        <BookingCard key={booking._id}>
          <BookingInfo>
            <BookingTitle>{booking.program?.title}</BookingTitle>
            <BookingDate>
              {new Date(booking.startDate).toLocaleDateString()} -
              {new Date(booking.endDate).toLocaleDateString()}
            </BookingDate>
            <BookingStatus $status={booking.status}>
              {booking.status}
            </BookingStatus>
          </BookingInfo>
          <BookingActions>
            <Button variant="outline" size="small">
              <FaEye /> View
            </Button>
            <Button variant="outline" size="small">
              <FaEdit /> Modify
            </Button>
            {booking.status === 'confirmed' && (
              <Button variant="danger" size="small">
                <FaTrash /> Cancel
              </Button>
            )}
          </BookingActions>
        </BookingCard>
      ))}
    </BookingsList>
  </ContentWrapper>
);

// Profile Tab Component
const ProfileTab = ({ user }) => (
  <ContentWrapper>
    <SectionHeading
      title="My Profile"
      subtitle="Manage your personal information"
      align="left"
      withDivider={false}
    />

    <ProfileForm>
      <ProfileSection>
        <ProfileSectionTitle>Personal Information</ProfileSectionTitle>
        <ProfileGrid>
          <ProfileField>
            <ProfileLabel>Full Name</ProfileLabel>
            <ProfileValue>{user?.name || 'Not provided'}</ProfileValue>
          </ProfileField>
          <ProfileField>
            <ProfileLabel>Email</ProfileLabel>
            <ProfileValue>{user?.email || 'Not provided'}</ProfileValue>
          </ProfileField>
          <ProfileField>
            <ProfileLabel>Phone</ProfileLabel>
            <ProfileValue>{user?.phone || 'Not provided'}</ProfileValue>
          </ProfileField>
          <ProfileField>
            <ProfileLabel>Date of Birth</ProfileLabel>
            <ProfileValue>
              {user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'Not provided'}
            </ProfileValue>
          </ProfileField>
        </ProfileGrid>
      </ProfileSection>

      <ProfileSection>
        <ProfileSectionTitle>Yoga Experience</ProfileSectionTitle>
        <ProfileField>
          <ProfileLabel>Experience Level</ProfileLabel>
          <ProfileValue>{user?.yogaExperience || 'Not specified'}</ProfileValue>
        </ProfileField>
      </ProfileSection>

      <ProfileActions>
        <Button variant="accent">
          <FaEdit /> Edit Profile
        </Button>
      </ProfileActions>
    </ProfileForm>
  </ContentWrapper>
);

// Settings Tab Component
const SettingsTab = () => (
  <ContentWrapper>
    <SectionHeading
      title="Account Settings"
      subtitle="Manage your account preferences"
      align="left"
      withDivider={false}
    />

    <SettingsSection>
      <SettingItem>
        <SettingInfo>
          <SettingTitle>Email Notifications</SettingTitle>
          <SettingDescription>Receive updates about your bookings and new programs</SettingDescription>
        </SettingInfo>
        <SettingControl>
          <input type="checkbox" defaultChecked />
        </SettingControl>
      </SettingItem>

      <SettingItem>
        <SettingInfo>
          <SettingTitle>Newsletter Subscription</SettingTitle>
          <SettingDescription>Get our monthly newsletter with wellness tips and special offers</SettingDescription>
        </SettingInfo>
        <SettingControl>
          <input type="checkbox" defaultChecked />
        </SettingControl>
      </SettingItem>

      <SettingItem>
        <SettingInfo>
          <SettingTitle>SMS Notifications</SettingTitle>
          <SettingDescription>Receive important updates via text message</SettingDescription>
        </SettingInfo>
        <SettingControl>
          <input type="checkbox" />
        </SettingControl>
      </SettingItem>
    </SettingsSection>

    <DangerZone>
      <DangerTitle>Danger Zone</DangerTitle>
      <DangerActions>
        <Button variant="outline">Change Password</Button>
        <Button variant="danger">Delete Account</Button>
      </DangerActions>
    </DangerZone>
  </ContentWrapper>
);

// Admin Components (simplified for now)
const ManageBookingsTab = () => (
  <ContentWrapper>
    <SectionHeading
      title="Manage Bookings"
      subtitle="View and manage all customer bookings"
      align="left"
      withDivider={false}
    />
    <AdminPlaceholder>Admin booking management interface coming soon...</AdminPlaceholder>
  </ContentWrapper>
);

const ManageProgramsTab = () => (
  <ContentWrapper>
    <SectionHeading
      title="Manage Programs"
      subtitle="Create and edit retreat programs"
      align="left"
      withDivider={false}
    />
    <AdminPlaceholder>Admin program management interface coming soon...</AdminPlaceholder>
  </ContentWrapper>
);

const ManageUsersTab = () => (
  <ContentWrapper>
    <SectionHeading
      title="Manage Users"
      subtitle="View and manage user accounts"
      align="left"
      withDivider={false}
    />
    <AdminPlaceholder>Admin user management interface coming soon...</AdminPlaceholder>
  </ContentWrapper>
);

// Styled Components
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f8f7f3;
`;

// Hero Section Styled Components
const DashboardHero = styled.div`
  height: 15vh;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #f8f7f3;

  ${({ backgroundImage }) => backgroundImage && `
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`;

const DashboardHeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing[6]};
`;

const WelcomeMessage = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

// Dashboard Layout
const DashboardLayout = styled.div`
  display: flex;
  min-height: calc(100vh - 40vh);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

// Vertical Navigation Container
const NavigationContainer = styled.div`
  width: 280px;
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: 10px;
  margin-top: 10px;
  margin-left: 15px;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: calc(100vh - 40vh);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    height: auto;
    position: static;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  }
`;

const NavigationHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.primary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  flex-shrink: 0;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const UserRole = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-transform: capitalize;
`;

const NavigationLinks = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[4]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: ${({ theme }) => theme.spacing[2]};
    padding: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

const NavLink = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  border: none;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent + '15' : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  border-left: 3px solid ${({ $active, theme }) =>
    $active ? theme.colors.accent : 'transparent'};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent + '20' : theme.colors.gray[100]};
    color: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.gray[900]};
    border-left-color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing[3]};
    text-align: center;
    border-left: none;
    border-bottom: 3px solid ${({ $active, theme }) =>
      $active ? theme.colors.accent : 'transparent'};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    gap: ${({ theme }) => theme.spacing[2]};

    &:hover {
      border-left: none;
      border-bottom-color: ${({ theme }) => theme.colors.accent};
    }

    span {
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
    }
  }
`;

const NavigationFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.red[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.red[50]};
    border-color: ${({ theme }) => theme.colors.red[400]};
  }

  svg {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

// Main Content
const MainContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.primary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  flex-shrink: 0;
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const UpcomingSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing[8]};
`;

const BookingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const BookingCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const BookingInfo = styled.div`
  flex: 1;
`;

const BookingTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const BookingDate = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const BookingStatus = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
  background: ${({ $status, theme }) => {
    switch ($status) {
      case 'confirmed': return theme.colors.green[100];
      case 'pending': return theme.colors.yellow[100];
      case 'cancelled': return theme.colors.red[100];
      default: return theme.colors.gray[100];
    }
  }};
  color: ${({ $status, theme }) => {
    switch ($status) {
      case 'confirmed': return theme.colors.green[800];
      case 'pending': return theme.colors.yellow[800];
      case 'cancelled': return theme.colors.red[800];
      default: return theme.colors.gray[800];
    }
  }};
`;

const BookingActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
`;

const BookingFilters = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.white};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.accent + '10'};
  }
`;

const ProfileForm = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
`;

const ProfileSection = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  &:last-child {
    border-bottom: none;
  }
`;

const ProfileSectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ProfileField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ProfileLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const ProfileValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray[900]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
`;

const ProfileActions = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.colors.gray[50]};
  display: flex;
  justify-content: flex-end;
`;

const SettingsSection = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  &:last-child {
    border-bottom: none;
  }
`;

const SettingInfo = styled.div`
  flex: 1;
`;

const SettingTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const SettingDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const SettingControl = styled.div`
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: ${({ theme }) => theme.colors.accent};
  }
`;

const DangerZone = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.red[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
`;

const DangerTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.red[600]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const DangerActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
`;

const AdminPlaceholder = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

// Mobile Navigation Components
const MobileNavigation = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const MobileUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const MobileUserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MobileUserName = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

const MobileUserRole = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-transform: capitalize;
`;

const MobileTabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
`;

const MobileTabButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.white};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.gray[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  span {
    text-align: center;
    line-height: 1.2;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.accent + '10'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.fontSize['2xs']};

    svg {
      font-size: ${({ theme }) => theme.typography.fontSize.md};
    }
  }
`;

export default Dashboard;
