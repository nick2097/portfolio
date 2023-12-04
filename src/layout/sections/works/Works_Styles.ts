import styled from "styled-components";
import {Theme} from "../../../styles/theme";
import {Button} from "../../../components/Button";
import {Link} from "../../../components/Link";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {motion} from "framer-motion";


const Works=styled.section`
    ${FlexWrapper} {
      gap: 30px;
    }
  position: relative;
`

const Work=styled(motion.div)`
background-color: ${Theme.colors.secondaryBg};
/*max-width: 330px;
  flex-grow: 1;*/

${Link} {
padding: 10px 0;
  
  & + ${Link} {
    margin-left: 20px;
  }
}
  
  /*@media ${Theme.media.desktop} {
    max-width: 540px;
  }*/
`
const ImageWrapper = styled.div`
  position: relative;
  
    
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      backdrop-filter: blur(2px);
      opacity: 0;
      transition: ${Theme.animations.transition}
    }
    
  &:hover {
    &::before {
      opacity: 1;
    }
    
    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${Theme.animations.transition};
    
    &::before {
      width: 100%;
      height: 100%;
    }
  }  
 
  @media ${Theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    
    ${Button} {
      opacity: 1;
    }
  }
`

const Image=styled.img`
width: 100%;
height: 260px;
object-fit: cover;
`
const Description = styled.div`
  padding: 25px 20px;
`

const Title=styled.h3``
const Text=styled.p`
  margin: 14px 0 10px;
`

export const S = {
   Works,
   Work,
   ImageWrapper,
   Image,
   Description,
   Title,
    Text
}