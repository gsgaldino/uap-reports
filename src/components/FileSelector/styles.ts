import styled, { css } from 'styled-components';

export const Container = styled.div<{ isDragging?: boolean }>`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='3' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  padding: var(--spacement-medium);
  display: flex;
  flex-direction: column;
  gap: var(--spacement-medium);
  align-items: center;
  ${(props) =>
    props.isDragging &&
    css`
      background-color: var(--primary-color)
    `}
`;

export const FilesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 80px;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: var(--spacement-medium);
  width: 100%;
`
