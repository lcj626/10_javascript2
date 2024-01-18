import React, { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const NavbarButton = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <button onClick={NavbarButton}>네비바</button>
      {navbar ? (
        <nav>
          <ul>
            <li>Lee Chang Joo</li>
            <li>내 프로필</li>
            <li>나란 누구인가</li>
            <li><a href={'MyProject'}>내 프로젝트</a></li>
            <li>마무리</li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};


const Introduction = () => {
  const headerStyle = {
    backgroundColor: 'orange',
    color: 'white',
    cursor: 'pointer',
    textAlign: 'center',
    padding: 20
  };


  return (
    <>
      <h1 style={headerStyle}>안녕하세요, 이창주입니다.</h1>
      <Navbar/>
    </>
  );
};

const ProfileInfo = () => {

  const profile = {
    name: '이창주',
    phone: '010-2323-2323',
    age: 32,
    status: 'active'
  };

  const myCareer = [
      '2004-평촌초등학교 졸업',
      '2008-범계중학교 졸업',
      '2011-평촌고등학교 졸업',
      '2011-숭실대학교 경영학부 입학',
      '2015-공군 병장 전역'
    ];

  const interest = {
    hobby : '농구 시청',
    favorite : '고양이',
    dislike : '계란후라이',
  }

  const skills = [
      'Java',
      'Javascript',
      'HTML',
      'CSS'
  ]


  const userStyle = {
    margin: '20px',
    padding: '10px',
    border: '1px solid',
    borderRadius: '5px'
  };

  return (
    <>
      <div style={userStyle}>
        <h2>개인 정보</h2>
        <hr/>
        <p><strong>이름:</strong> {profile.name}</p>
        <p><strong>전화번호:</strong> {profile.phone}</p>
        <p><strong>나이:</strong> {profile.age}</p>
        <p><strong>Status:</strong> {profile.status}</p>
      </div>
      <div style={userStyle}>
        <h2>약력</h2>
        <hr/>
        {myCareer.map((career, index) => (<p key={index}>{career}</p>))}
      </div>
      <div style={userStyle}>
        <h2>취미</h2>
        <hr/>
        <p><strong>취미:</strong> {interest.hobby}</p>
        <p><strong>좋아하는 것:</strong> {interest.favorite}</p>
        <p><strong>싫어하는 것:</strong> {interest.dislike}</p>
      </div>
      <div style={userStyle}>
        <h2>스킬</h2>
        <hr/>
        {skills.map((skill, index) => (<p key={index}>{skill}</p>))}
      </div>
    </>
  );
};

const MyProject = () => {
  return (
    <article>
      <div>
        <img src="/토끼로고-1.jpg" alt="첫번째 프로젝트 이미지"/>
        <button type="button" onClick={() => window.location.href = 'https://github.com/yycBunnyRoom/SEMI_PROJECT-BUNNY_ROOM'}>
          자세히 보기
        </button>
      </div>
      <div>
        <h1>Bunny Room</h1>
        <div>
          <h1>기간</h1>
          <h3>2023.12~2024.01</h3>
          <h1>설명</h1>
          <h3>공간 대여 서비스를 지원해 주는 사이트입니다.</h3>
          <h1>사용 기술</h1>
          <h3>Spring,Javascript</h3>
        </div>
      </div>
    </article>
  );
};



const GithubLink = () => {
  const buttonStyle = {
    textAlign: 'center'
  };

  return (
    <>
      <div style={buttonStyle}>
        <h2>깃허브 페이지</h2>
        <button onClick={() => window.location.href = "https://github.com/lcj626"}>바로가기</button>
      </div>
    </>
  );
};

const MyPage = () => {
  return (
    <>
      <Introduction />
      <ProfileInfo />
      <GithubLink />
      <MyProject/>
    </>
  );
};

export default MyPage; 