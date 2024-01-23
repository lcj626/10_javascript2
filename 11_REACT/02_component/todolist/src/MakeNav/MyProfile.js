

const ProfileInfo = () => {

  const profile = {
    name: '이창주',
    age: 32,
    address: '서울시 동작구',
    status: 'active'
  };


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

export default ProfileInfo;