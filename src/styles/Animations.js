import { createGlobalStyle } from 'styled-components';


const Animations = createGlobalStyle`
  @keyframes bottomForTop {
    from {
      transform: translateY(100px)
    }to {
      transform: translateY(0px)
    }
  }
  @keyframes topForBottom {
    from {
      transform: translateY(-100px)
    }to {
      transform: translateY(0px)
    }
  }
  @keyframes rightForLeft {
    from{
      transform: translateX(300px)
    }to{
      transform: translate(0)
    }
  }
  @keyframes leftForRight {
    from{
      transform: translateX(-300px)
    }to{
      transform: translate(0)
    }
  }
  @keyframes quake {
    0%{
      transform: rotate(0)
    }25%{
      transform: rotate(9deg)
    }50%{
      transform: rotate(-9deg)
    }100%{
      transform: rotate(0)
    }
  }
`;

export default Animations;