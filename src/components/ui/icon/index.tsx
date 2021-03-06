import React, { ReactElement, SVGProps } from 'react';
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

// import * as Icons from '../../../icons';

interface IconsProps extends SVGProps<SVGSVGElement> {
  iconName: string;
  className: string;
}

const IconMappping: { [key: string]: any } = {
  Bell: Bell,
  Clients: Clients,
  Billing: Billing,
  Dashboard: Dashboard,
  Download: Download,
  List: List,
  ListView: ListView,
  Primary: Printer,
  Search: Search,
  Settings: Settings,
  SideArrow: SideArrow,
  Square: Square,
};

function Icon({ iconName, className, ...rest }: IconsProps) {
  if (!IconMappping[iconName]) return null;

  const IconComponent = IconMappping[iconName];

  return (
    <div className={className}>
      <IconComponent className="fill-current" {...rest} />
    </div>
  );
}

export default Icon;
