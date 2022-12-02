import {
  MdHomeFilled,
  MdTag,
  MdOutlineLightbulb,
  MdOutlineFeedback,
  MdOutlineMenuBook,
} from 'react-icons/md';

export const Device = {
  mobile: 'mobile',
};

export const Theme = {
  light: 'light',
  dark: 'dark',
};

export const AsideListItems = [
  {
    title: 'หน้าฟีด',
    link: '/',
    icon: MdHomeFilled,
  },
  {
    title: 'แท็คทั้งหมด',
    link: '/tags',
    icon: MdTag,
  },
  {
    title: 'FAQ',
    link: '/faq',
    icon: MdOutlineLightbulb,
  },
  {
    title: 'เกี่ยวกับเรา',
    link: '/about',
    icon: MdOutlineFeedback,
  },
  {
    title: 'คู่มือใช้งาน',
    link: '/guides',
    icon: MdOutlineMenuBook,
  },
];

export const RelevantLinks = [
  {
    title: 'ที่เกี่ยวข้อง',
    link: '/',
  },
  {
    title: 'ล่าสุด',
    link: '/latest',
  },
  {
    title: 'ยอดเข้าดู',
    link: '/top/week',
  },
];
