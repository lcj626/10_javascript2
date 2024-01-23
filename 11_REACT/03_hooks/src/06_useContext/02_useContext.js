import { createContext, useContext, useState } from "react"
import { styles } from "./Style"


/*
    context는 react 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록 고안된 방법이다.
    트리 구조가 복잡해질 수록 하위 컴포넌트로 props를 전달하기 위해 drilling이 발생할 수 있게 되고,
    그러면 유지보수가 매우 힘들어지고 코드를 읽기도 힘들어지게 된다.
    하지만 context를 사용하면 중간 컴포넌트들에게 props를 넘겨주지 않아도 되고, 유지보수도 훨씬 수월해지게 된다.
    
    단, context를 사용하면 컴포넌트를 재사용하기 어려워지기 때문에 꼭 필요할 때만 써야한다.
    따라서 때에 따라서는 context보다 props drilling 이 더 간단한 해결책이 될 수 있다
*/

/*
    context 객체를 createContext를 통해 만들게 되고 defaultValue가 없는 경우에는 null로 설정할 수 있다.
    context 객체를 구독하고 있는 컴포넌트를 렌더링 할 때 react는 트리 상위에서 가장 가까이 있는
    Provider로 부터 현재 값을 읽어들인다. 이 때 적절한 provider를 찾지 못할 때 쓰이는 값이 defaultValue이다.
*/

const DarkModeContext = createContext(null);

const Header = ()=>{

    const context = useContext(DarkModeContext);
    const {isDark} = context;

    return (
        <header
            style={{
                ...styles.header,
                backgroundColor : isDark? 'black':'lightgray',
                color: isDark? 'white':"black"
            }}>
                <h1>Welcome to Greedy World!</h1>
            </header>
    )
}

const Content = ()=>{
    const context = useContext(DarkModeContext);

    const {isDark} = context;
    return (
        <div
            style={{
                ...styles.content,
                backgroundColor:isDark?"gray":"white",
                color:isDark?'white':'black'
            }}>
              <p>내용 입니다.</p>
            </div>
    )
}

const Footer = ()=>{
    const context =useContext(DarkModeContext);

    console.log("=======================");
    console.log(context);
    console.log("=======================");

    const {isDark, setIsDark} = context;
    const toggleHeadler = () => setIsDark(!isDark);
    return (
        <footer
            style={{
                ...styles.footer,
                backgroundColor : isDark? "black":"white",
                color: isDark? "white":"black"
            }}>
                <button onClick={toggleHeadler}>{isDark? "black":"white"}</button>
                useContext aPP
            </footer>
    )
}

const Page = ()=>{
    
    return(
        <div style={{
            ...styles.page
        }}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

const ContextContainer = () =>{
  const [isDark, setIsDark] = useState(false);

  return (
      <DarkModeContext.Provider value = {{isDark, setIsDark}}>
          <Page/>
      </DarkModeContext.Provider>
  )
}

export default ContextContainer;