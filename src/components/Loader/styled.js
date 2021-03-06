import styled from '@emotion/styled'

export const StyledWrapper = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background: rgba(255, 255, 255, 0.3);
`

export const StyledLoader = styled.div`
   display: inline-block;
   position: relative;
   width: 80px;
   height: 80px;
   > div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #95d3f3;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
   }
   div:nth-of-type(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
   }
   div:nth-of-type(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
   }
   div:nth-of-type(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
   }
   div:nth-of-type(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
   }
   @keyframes lds-ellipsis1 {
      0% {
         transform: scale(0);
      }
      100% {
         transform: scale(1);
      }
   }
   @keyframes lds-ellipsis3 {
      0% {
         transform: scale(1);
      }
      100% {
         transform: scale(0);
      }
   }
   @keyframes lds-ellipsis2 {
      0% {
         transform: translate(0, 0);
      }
      100% {
         transform: translate(24px, 0);
      }
   }
`
