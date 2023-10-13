export type CreatorType = {
  id: number,
  name: string,
  avatar: string,
  headline: string,
  content: string,
}

const fakeData: CreatorType[] = [
  {
    id: 1,
    name: "Justin Sullivan",
    avatar: "https://fastly.picsum.photos/id/852/300/300.jpg?hmac=C74OvReXr8eTOLi2bE_cdtGaZuHvJvt_755uon3BdAc",
    headline: "Ultricies morbi arcu",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 2,
    name: "Justin Mendoza",
    avatar: "https://fastly.picsum.photos/id/833/300/300.jpg?hmac=m33-N82Dblxw-Bzcfdv95OhsW2L00s_mLYjpSM6aR2k",
    headline: "Est interdum lobortis",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 3,
    name: "Justin Says",
    avatar: "https://fastly.picsum.photos/id/471/300/300.jpg?hmac=GapOIIKIYl5NAmfIEcp7XozICFR2bKyPAjLUed6Gwno",
    headline: "Amet velit",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 4,
    name: "Justin Sullivan",
    avatar: "https://fastly.picsum.photos/id/240/300/300.jpg?hmac=FFi20_ES_T3L7tR5mL-qzGD3z_4D2NIp3D-4fpqCjjg",
    headline: "Est interdum lobortis",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 5,
    name: "Justin Sullivan",
    avatar: "https://fastly.picsum.photos/id/507/300/300.jpg?hmac=R90MHRkeYhwugn6Ckh7i6BiZ_fe4manq4cj66fkpIIs",
    headline: "Ultricies morbi arcu",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 6,
    name: "Justin Sullivan",
    avatar: "https://fastly.picsum.photos/id/620/300/300.jpg?hmac=qUI9lsLgOmuK0qy4BUqNnt8AVyXHsTge8IDyFKwXpq8",
    headline: "Amet velit",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 7,
    name: "Justin Sullivan",
    avatar: "https://fastly.picsum.photos/id/852/300/300.jpg?hmac=C74OvReXr8eTOLi2bE_cdtGaZuHvJvt_755uon3BdAc",
    headline: "Est interdum lobortis",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 8,
    name: "Justin Sullivan",
    avatar: "https://fastly.picsum.photos/id/507/300/300.jpg?hmac=R90MHRkeYhwugn6Ckh7i6BiZ_fe4manq4cj66fkpIIs",
    headline: "Ultricies morbi arcu",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
  {
    id: 9,
    name: "Justin Sullivan",
    avatar: "https://fastly.picsum.photos/id/471/300/300.jpg?hmac=GapOIIKIYl5NAmfIEcp7XozICFR2bKyPAjLUed6Gwno",
    headline: "Amet velit",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit vel ex tempor ultrices. Mauris convallis euismod metus vel dignissim. Nunc auctor nunc a dolor commodo, non consectetur nulla ultricies. Proin auctor mauris ut risus gravida, nec tincidunt risus interdum. Mauris luctus, mauris et laoreet imperdiet, nisl sem ullamcorper velit, vel facilisis nisl enim non lorem. Maecenas id justo eget risus commodo convallis. Sed iaculis, elit ut feugiat porttitor, arcu nisi elementum lorem, a ultrices leo elit id mi. Mauris eleifend tortor eget elit suscipit, quis pretium elit faucibus. Vivamus cursus nunc a maximus pellentesque."
  },
];

export function fetchCreators() {
  return fakeData;
}

export function fetchDetail(id: number) {
  const creatorDetail = fakeData.find(creator => creator.id === id);

  return creatorDetail ? creatorDetail : null;
}
