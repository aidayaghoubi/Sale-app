// import styledComponents from "styled-components";
// import styled from "styled-components"
// import { css } from "styled-components";
// import { keyframes, ThemeProvider , createGlobalStyle} from "styled-components";

// const GobalStyle = createGlobalStyle`
// body{
//     background-color: aqua;
// }

// `

// const alighnCenter = css`
// display: flex;
// align-items: center;
// justify-content: center;

// `
// const rotate = keyframes`
// from{
//     transform: rotate(0deg);
// }
// to {
//     transform: rotate(360deg);
// }
// `;

// const Wrapper = styledComponents.div`
// background:purple ;
// ${alighnCenter}
// `;
// const Button = styledComponents.button`
// &&{
//     color : ${({ theme : { theme } }) => theme1.main};
// }



// background-color:blue;
// color:black;

//   & ~ button {
//     background: black; 

//   }
//   & + button {
   
//     font-size: 75px;
//   }

 
//     ${Wrapper}:hover &{
//         background:black;   
//         font-size:85px;
//         animation:${rotate} 5s ;
//     }
  
// `;

// const NewOne = styledComponents.input.attrs((props) => ({
//   type: "number",
//   placeholder: "this is just test",
//   value: 45,
// }))`

// color:purple;

// `;

// const theme1 = {main :"#fff"}

// const Wrapp = styled(Testing)`

// `

// const position = ({ y = 1, x = 2, z= 5}) => css`
// 	position : absolute;
// 	left : ${x};
// 	top : ${y};
// 	z-index : ${z};
// `

// const SomeComponent = styled.div`
// 	${position({y: 250 , x : 100 , 5})}
// `

// const Testing = () => {
//   return (<div>
//       helow 
//   </div>
      
//     // <ThemeProvider theme={theme1}>
//     //     <GobalStyle />
//     //   <Wrapper>
//     //     <Button>helo</Button>
//     //     <NewOne></NewOne>
//     //   </Wrapper>
//     // </ThemeProvider>
    
//   );
// };

// export default Wrapp;
