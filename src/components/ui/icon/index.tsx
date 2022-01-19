import React from 'react';
import {
  Bell,
  Billing,
  Clients,
  Dashboard,
  Download,
  List,
  ListView,
  Printer,
  Search,
  Settings,
  SideArrow,
  Square,
} from '../../../icons';

function Icon(iconName: string): React.ReactElement {
  switch (iconName) {
    case 'Bell':
      return <Bell className="fill-current" />;
    case 'Clients':
      return <Clients className="fill-current" />;
    case 'Billing':
      return <Billing className="fill-current" />;
    case 'Dashboard':
      return <Dashboard className="fill-current" />;
    case 'Download':
      return <Download className="fill-current" />;
    case 'List':
      return <List className="fill-current" />;
    case 'ListView':
      return <ListView className="fill-current" />;
    case 'Primary':
      return <Printer className="fill-current" />;
    case 'Search':
      return <Search className="fill-current" />;
    case 'Settings':
      return <Settings className="fill-current" />;
    case 'SideArrow':
      return <SideArrow className="fill-current" />;
    case 'Square':
      return <Square className="fill-current" />;
    default:
      return <></>;
  }
}

export default Icon;
