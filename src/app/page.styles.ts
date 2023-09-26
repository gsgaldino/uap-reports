import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacement-large);
  align-items: center;
  justify-content: center;
  min-height: 400px;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  margin-block: var(--spacement-large);
`

export const Background = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('starry_night_sky.jpg');
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--background-color);
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.95;
  }
`
