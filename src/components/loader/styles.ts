import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
    opacity: 1;
  background-color: ${(props) => props.theme.colorBackground};
    animation: appear 0.1s linear;
    
    @keyframes appear {
        0% {
            opacity: 0;
        }
        
        99% {
            opacity: 0;
        }
        
        100% {
            opacity: 1;
        }
    }
`

const LoaderInner = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
`

const LoaderText = styled.p`
  font-size: 2.2rem;
  margin-bottom: 40px;
`

const LoaderIcon = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% { 
      transform: rotate(0deg) scaleX(1);
      width: 50px;
    }

    50% {
      transform: rotate(90deg) scaleX(-1);
      width: 150px;
    }

    100% { 
      transform: rotate(360deg) scaleX(1);
      width: 50px;
    }
  }
`

export {LoaderIcon, LoaderContainer, LoaderInner, LoaderText};