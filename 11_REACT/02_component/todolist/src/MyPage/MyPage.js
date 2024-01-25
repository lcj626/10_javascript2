import React, { useState } from 'react';
import './MyPage.css';
import './MyHobby.css';
import './MyPageNav.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const NavbarButton = () => {
    setNavbar(!navbar);
  };

  return (
    <div className='nav'>
      <button className="navbar-btn" onClick={NavbarButton}>네비바</button>
      {navbar ? (
        <nav>
          <ul>
            <li>Lee Chang Joo</li>
            <li>내 프로필</li>
            <li>나란 누구인가</li>
            <li>내 프로젝트</li>
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
    age: 32,
    address: '서울시 동작구',
    status: 'active'
  };


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
      <div className="user-info">
        <h2>개인 정보</h2>
        <hr/>
        <p><strong>이름:</strong> {profile.name}</p>
        <p><strong>나이:</strong> {profile.age}</p>
        <p><strong>사는 곳:</strong> {profile.address}</p>
        <p><strong>Status:</strong> {profile.status}</p>
      </div>
    </>
  );
};


const skills = [{
    id: 0,
    name: 'Java',
    text: '어릴때부터 농구를 좋아해서 학창시절때부터 자주 하였고 특히 미국농구 NBA 보는 것을 매우 좋아합니다',
    image: '/자바 아이콘.png'
},{
    id: 1,
    name: 'Spring',
    text: '옛날부터 영화 보는것을 좋아했고 지금도 웬만하면 일주일에 한번씩은 영화를 보러가려고 하는 편입니다. 옛날 고전영화를 많이 좋아합니다',
    image: '/스프링 로고.png'
},{
    id: 2,
    name: 'JavaScript',
    text: '어릴때부터 슬램덩크, 드래곤볼 같은 만화들을 좋아했고 지금도 종종 만화방 들러서 만화를 즐겨 봅니다.',
    image: '/자바 스크립트 로고.png'
},{
    id: 3,
    name: 'React',
    text: '어릴때부터 슬램덩크, 드래곤볼 같은 만화들을 좋아했고 지금도 종종 만화방 들러서 만화를 즐겨 봅니다.',
    image: '/React 로고.png'
},{
    id: 4,
    name: 'Html/CSS',
    text: '어릴때부터 슬램덩크, 드래곤볼 같은 만화들을 좋아했고 지금도 종종 만화방 들러서 만화를 즐겨 봅니다.',
    image: '/html css 로고.png'
}];


const ListSkills=()=>{
  const listMySkill = skills.map(skills =>
        <li key={skills.id}>
            <img src={skills.image}></img>
            <p>
                <b>{skills.name} : </b>
                {skills.text}
            </p>
        </li>
    );
    return(
      <article className="skills">
          <h1>나의 스킬</h1>
          <ul>{listMySkill}</ul>
      </article>
    )

}

const MyProject = () => {

  const projectStyle={
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '50rem',
      margin: '0 auto',
      padding: '1.25rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '0.625rem',
      boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.1)'
  }

  const imageButton={
      verticalAlign: 'baseline',
      marginTop: '8px',
      display: 'block'
  }

  const projectImgStyle={
    borderRadius: '15px',
    width: '452px',
    height: '500px',
    marginBottom: '55px'
  }

  return (
    <article style={projectStyle}>
      <div style={imageButton}>
        <h1>나의 프로젝트</h1>
        <img src="/토끼로고-1.jpg" alt="첫번째 프로젝트 이미지" style={projectImgStyle}/>
        <button type="button" onClick={() => window.location.href = 'https://github.com/yycBunnyRoom/SEMI_PROJECT-BUNNY_ROOM'}>
          프로젝트 보기
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
      <div className="github-link">
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
        <ListSkills />
        <MyProject />
        <GithubLink />
    </>
  );
};

export default MyPage; 