

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

export default ListSkills;