import React from 'react';
import { Badge, TabBar } from 'antd-mobile'
import {
    AppOutline,
    UserOutline,
} from 'antd-mobile-icons'
import {
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
function TabBars() {
  const tabs = [
      {
        key: '/home' || '/',
        title: '首页',
        icon: <AppOutline />,
        badge: Badge.dot,
      },
      {
        key: '/personalcenter',
        title: '个人中心',
        icon: <UserOutline />,
      },
  ]
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value: string) => {
    navigate(value);
  }
  return (
    <>
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
}

export default TabBars;
