import { OverrideToken } from 'antd/es/theme/interface';

// theme
import { TypographyTheme } from './Typograpy';
import { InputTheme } from './Input';
import { ButtonTheme } from './Button';
import { MenuTheme } from './Menu';
import { BreadcrumbTheme } from './Breadcrumb';
import { CardTheme } from './Card';
import { TableTheme } from './Table';
import { StepsTheme } from './Steps';
import { CheckboxTheme } from './Checkbox';
import { SelectTheme } from './Select';
import { ModalTheme } from './Modal';
import { RadioTheme } from './Radio';
import { COLORS } from '../../color';

const componentsTheme: OverrideToken = {
  Typography: TypographyTheme,
  Input: InputTheme,
  Select: SelectTheme,
  Button: ButtonTheme,
  Menu: MenuTheme,
  Breadcrumb: BreadcrumbTheme,
  Card: CardTheme,
  Table: TableTheme,
  Steps: StepsTheme,
  Checkbox: CheckboxTheme,
  Modal: ModalTheme,
  Radio: RadioTheme,
  Tabs: {
    colorPrimary: '#9557AD',
  },
  Dropdown: {
    controlItemBgActive: 'rgba(76, 78, 100, 0.05)',
    controlItemBgActiveHover: 'rgba(76, 78, 100, 0.1)',
    colorText: 'rgba(76, 78, 100, 0.87)',
    colorPrimary: 'rgba(76, 78, 100, 0.87)',
    paddingXXS: 0,
    controlPaddingHorizontal: 16,
    controlHeight: 36,
  },
  DatePicker: {
    borderRadius: 8,
    controlHeight: 60,
    colorBorder: '#E5E5F0',
    colorBgContainer: 'transparent',
    colorTextPlaceholder: '#BABABA',
    colorPrimaryHover: 'rgba(149, 87, 173, 1)',
    colorBgContainerDisabled: '#F8F8F8',
    controlOutline: 'transparent',
    colorPrimary: COLORS.PRIMARY,
    colorLink: COLORS.PRIMARY,
    colorLinkHover: COLORS.PRIMARY,
  },
  Spin: {
    colorPrimary: COLORS.PRIMARY,
  },
};

export default componentsTheme;
