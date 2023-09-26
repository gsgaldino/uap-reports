import styled from 'styled-components'

export const Miniature = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`

export const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
  background: tomato;
  display: grid;
  place-items: center;
  z-index: 1;
  border-radius: 50%;
  transition: filter 0.3s ease;
  cursor: pointer;
  &:hover {
    filter: brightness(80%)
  }
`
