import styled from "styled-components";
import { fontBold } from "../../mixins";

const StyledWrapper = styled.div`
    position: relative;
  display: flex;
  flex-direction: column;

  header,
  footer {
    flex-shrink: 0;
  }

  main {
    flex-grow: 1;
  }
`

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.colorBackground};
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

const Loader = styled.div`
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

export {StyledWrapper, Loader, LoaderContainer, LoaderInner, LoaderText};