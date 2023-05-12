'use client';
import { FcHome, FcFaq, FcAbout, FcAddressBook } from 'react-icons/fc';
import { FaSlackHash } from 'react-icons/fa';

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
    icon: FcHome,
  },
  {
    title: 'แท็คทั้งหมด',
    link: '/tags',
    icon: FaSlackHash,
  },
  {
    title: 'FAQ',
    link: '/faq',
    icon: FcFaq,
  },
  {
    title: 'เกี่ยวกับเรา',
    link: '/about',
    icon: FcAbout,
  },
  // {
  //   title: 'คู่มือใช้งาน',
  //   link: '/guides',
  //   icon: FcAddressBook,
  // },
];

export const RelevantLinks = [
  {
    title: 'เกี่ยวข้อง',
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

export const TagsPopular = [
  {
    tag: 'develop',
  },
  {
    tag: 'react',
  },
  {
    tag: 'golang',
  },
  {
    tag: 'python',
  },
  {
    tag: 'กรมที่ดิน',
  },
  {
    tag: 'กรมชลประทาน',
  },
  {
    tag: 'การไฟฟ้า',
  },
  {
    tag: 'รับสมัครงาน',
  },
];

export const MockPots = [
  {
    post: {
      postId: '6411dfc7e6098905bda29c60',
      title:
        'กองบัญชาการกองทัพไทย เปิดรับสมัครสอบบรรจุเป็นพนักงานราชการ 23 อัตรา',
      slug: 'กองบัญชาการกองทัพไทย-เปิดรับสมัครสอบบรรจุเป็นพนักงานราชการ-23-อัตรา',
      countComment: 0,
      countLike: 0,
      countReaction: 0,
      countNote: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      group: 'news',
      tags: [
        {
          tag: 'develop',
        },
        {
          tag: 'react',
        },
        {
          tag: 'golang',
        },
      ],
    },
    user: {
      slug: 'michaeltharrington',
      name: 'Michael Tharrington',
      picture:
        'https://res.cloudinary.com/practicaldev/image/fetch/s---H7336Uk--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
    },
  },
  {
    post: {
      postId: '6411e00aab6fe83d46df3461',
      title: 'กรมที่ดิน เปิดรับสมัครสอบเป็นพนักงานราชการ 37 อัตรา ',
      slug: 'กรมที่ดิน-เปิดรับสมัครสอบเป็นพนักงานราชการ-37-อัตรา',
      countComment: 0,
      countLike: 0,
      countReaction: 0,
      countNote: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      group: 'news',
      tags: [
        {
          tag: 'python',
        },
        {
          tag: 'c-sharp',
        },
      ],
    },
    user: {
      slug: 'karolinenunes',
      name: 'Karoline Nunes',
      picture:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--0XRamYm8--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/983270/8a0585d2-e304-4c8a-b261-34ca09890588.jpeg',
    },
  },
  {
    post: {
      postId: '6411e00fdc7ce40b71c97dc7',
      title:
        'กรมชลประทาน(ส่วนกลางและภูมิภาค) เปิดรับสมัครสอบเป็นพนักงานราชการทั่วไป 80 อัตรา',
      slug: 'กรมชลประทานส่วนกลางและภูมิภาค-เปิดรับสมัครสอบเป็นพนักงานราชการทั่วไป-80-อัตรา',
      countComment: 0,
      countLike: 0,
      countReaction: 0,
      countNote: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      group: 'news',
      tags: [
        {
          tag: 'กรมชลประทาน',
        },
        {
          tag: 'รับสมัครงาน',
        },
      ],
    },
    user: {
      slug: 'thomasbnt',
      name: 'Thomas Bnt',
      picture:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--Iv24f4-g--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/18254/c3e65d32-bfe2-48ed-93b3-f2caf9c60dd7.png',
    },
  },
  {
    post: {
      postId: '6411e0152f19902332a6769c',
      title:
        'กองบัญชาการกองทัพไทย เปิดรับสมัครสอบบรรจุเป็นพนักงานราชการ 23 อัตรา',
      slug: 'กองบัญชาการกองทัพไทย-เปิดรับสมัครสอบบรรจุเป็นพนักงานราชการ-23-อัตรา',
      countComment: 0,
      countLike: 0,
      countReaction: 0,
      countNote: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      group: 'news',
      tags: [
        {
          tag: 'develop',
        },
        {
          tag: 'react',
        },
        {
          tag: 'golang',
        },
      ],
    },
    user: {
      slug: 'michaeltharrington',
      name: 'Michael Tharrington',
      picture:
        'https://res.cloudinary.com/practicaldev/image/fetch/s---H7336Uk--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
    },
  },
  {
    post: {
      postId: '6411e01a31c82579866e678a',
      title: 'กรมที่ดิน เปิดรับสมัครสอบเป็นพนักงานราชการ 37 อัตรา ',
      slug: 'กรมที่ดิน-เปิดรับสมัครสอบเป็นพนักงานราชการ-37-อัตรา',
      countComment: 0,
      countLike: 0,
      countReaction: 0,
      countNote: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      group: 'news',
      tags: [
        {
          tag: 'python',
        },
        {
          tag: 'c-sharp',
        },
      ],
    },
    user: {
      slug: 'karolinenunes',
      name: 'Karoline Nunes',
      picture:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--0XRamYm8--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/983270/8a0585d2-e304-4c8a-b261-34ca09890588.jpeg',
    },
  },
  {
    post: {
      postId: '6411e01f1ecc32a1b94324f7',
      title:
        'กรมชลประทาน(ส่วนกลางและภูมิภาค) เปิดรับสมัครสอบเป็นพนักงานราชการทั่วไป 80 อัตรา',
      slug: 'กรมชลประทานส่วนกลางและภูมิภาค-เปิดรับสมัครสอบเป็นพนักงานราชการทั่วไป-80-อัตรา',
      countComment: 0,
      countLike: 0,
      countReaction: 0,
      countNote: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      group: 'news',
      tags: [
        {
          tag: 'กรมชลประทาน',
        },
        {
          tag: 'รับสมัครงาน',
        },
      ],
    },
    user: {
      slug: 'thomasbnt',
      name: 'Thomas Bnt',
      picture:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--Iv24f4-g--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/18254/c3e65d32-bfe2-48ed-93b3-f2caf9c60dd7.png',
    },
  },
];

export const ProfileListItems = [
  {
    title: 'จัดการโพสต์',
    link: '/dashboard',
    icon: FaSlackHash,
  },
  {
    title: 'สร้างโพสต์ใหม่',
    link: '/new',
    icon: FcFaq,
  },
  {
    title: 'รายการที่ชื่นชอบ',
    link: '/favorites',
    icon: FcAbout,
  },
  {
    title: 'ตั้งค่า',
    link: '/settings',
    icon: FcAddressBook,
  },
];

export const Posts = [
  {
    id: '1',
    userAvatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
    userName: 'Michael Tharrington',
    userId: 'sdadas848qwdqwd',
    createdAt: '2019-07-04 22:00:00',
    comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
    totalLikeCount: 0,
    totalReplyCount: 3,
    subComments: [
      {
        id: '3',
        parentId: '1',
        userAvatar:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
        userName: 'Michael Tharrington',
        userId: 'sdadas848qwdqwd',
        createdAt: '2019-07-04 22:00:00',
        comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
        totalLikeCount: 0,
        totalReplyCount: 0,
      },
      {
        id: '3',
        parentId: '1',
        userAvatar:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
        userName: 'Michael Tharrington',
        userId: 'sdadas848qwdqwd',
        createdAt: '2019-07-04 22:00:00',
        comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
        totalLikeCount: 0,
        totalReplyCount: 0,
      },
      {
        id: '5',
        parentId: '1',
        userAvatar:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
        userName: 'Michael Tharrington',
        userId: 'sdadas848qwdqwd',
        createdAt: '2019-07-04 22:00:00',
        comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
        totalLikeCount: 0,
        totalReplyCount: 0,
      },
    ],
  },
  {
    id: '2',
    userAvatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
    userName: 'Michael Tharrington',
    userId: 'sdadas848qwdqwd',
    createdAt: '2023-04-19 22:00:00',
    comment: `<p>I was able to quit my job and create a new and successful company in 3 days :D</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
    totalLikeCount: 0,
    totalReplyCount: 1,
    subComments: [
      {
        id: '8',
        parentId: '1',
        userAvatar:
          'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
        userName: 'Michael Tharrington',
        userId: 'sdadas848qwdqwd',
        createdAt: '2019-07-04 22:00:00',
        comment: `<p>รีวิว โทรโข่ง แพนด้าแฟร์ ซาฟารีแอปเปิล เอ็นทรานซ์ซัมเมอร์เฟรช เด้อ มายาคติ เอาต์เบอร์รี บ๋อยไอซ์แอปเปิลโลโก้ ไชน่าโบว์ลิ่ง ออทิสติก ซ้อเพนกวิน เก๋ากี้สเตอริโอโฮสเตส ลาเต้ แอปพริคอทเป็นไงบาบูนอิกัวนาล้มเหลว เบญจมบพิตรช็อปปิ้ง</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
        totalLikeCount: 0,
        totalReplyCount: 0,
      },
    ],
  },
  {
    id: '6',
    userAvatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--f5MFL0Ey--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/c785dfe1-aaa2-48fe-89b9-1563db95c85c.jpg',
    userName: 'Michael Tharrington',
    userId: 'sdadas848qwdqwd',
    createdAt: '2023-04-19 22:00:00',
    comment: `<p>I was able to quit my job and create a new and successful company in 3 days :D</p><p>Thank you (insert preferred deity here) for Open Source ^_^</p>`,
    totalLikeCount: 0,
    totalReplyCount: 0,
    subComments: [],
  },
];

export const Comments = [
  {
    id: '3',
    parentId: '1',
    userAvatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--imZn60gZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/714379/ca80c2f5-411e-49b8-a8f9-c81b6d0f732d.jpeg',
    userName: 'MySubMent Chat',
    userId: 'sdadas848qwdqwd',
    createdAt: '2019-07-04 22:00:00',
    comment: `<p>Comments 1</p>`,
    totalLikeCount: 0,
    totalReplyCount: 0,
    subComments: [],
  },
  {
    id: '6',
    parentId: '1',
    userAvatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--imZn60gZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/714379/ca80c2f5-411e-49b8-a8f9-c81b6d0f732d.jpeg',
    userName: 'MySubMent Chat',
    userId: 'sdadas848qwdqwd',
    createdAt: '2019-07-04 22:00:00',
    comment: `<p>Comments 2</p>`,
    totalLikeCount: 0,
    totalReplyCount: 0,
    subComments: [],
  },
  {
    id: '7',
    parentId: '1',
    userAvatar:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--imZn60gZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/714379/ca80c2f5-411e-49b8-a8f9-c81b6d0f732d.jpeg',
    userName: 'MySubMent Chat',
    userId: 'sdadas848qwdqwd',
    createdAt: '2019-07-04 22:00:00',
    comment: `<p>Comments 3</p>`,
    totalLikeCount: 0,
    totalReplyCount: 0,
    subComments: [],
  }
];