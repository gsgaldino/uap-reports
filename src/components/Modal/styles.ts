import styled from 'styled-components'

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  z-index: ${({ isOpen }) => isOpen ? 1 : -2};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-height: ${({ isOpen }) => isOpen ? '2000px' : '0px'};
  max-width: 600px;
  height: inherit;
  max-height: 600px;
  transition: opacity 0.3s ease, max-height 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, .1);
  background: rgba(0, 0, 0, .9);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, .3);
  backdrop-filter: blur(20px);
  border-radius: 10px;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacement-medium);
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: var(--spacement-medium);
  padding-top: 0;
  gap: var(--spacement-medium);
  align-items: center;
`
