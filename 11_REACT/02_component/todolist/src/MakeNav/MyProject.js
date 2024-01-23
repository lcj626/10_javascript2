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
      boxShadow: '0 0 0.625rem rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
  }

  const imageButton={
      verticalAlign: 'baseline',
      marginTop: '8px',
      display: 'block'
  }

  const projectImgStyle={
    borderRadius: '15px',
    width: '30rem',
    height: '25rem',
    marginBottom: '3rem'
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

export default MyProject;