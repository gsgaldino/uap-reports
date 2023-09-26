import styled from 'styled-components'

export const TextArea = styled.textarea`
  padding: var(--spacement-medium);
  border: 1px solid var(--absolute-white);
  color: var(--absolute-white);
  background-color: var(--absolute-black);
  font-family: inherit;
  caret-color: var(--primary-color);

  &::placeholder {
    opacity: 1;
    color: var(--absolute-white);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--absolute-white);
  }
`

export const EditorContainer = styled.div`
  & .toolbarClassName {
    background: transparent;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--absolute-white);
    }
  }

  & .wrapperClassName {
    border: 1px solid var(--absolute-white);
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--absolute-white);
    }
  }

  & .editorClassName {
    color: var(--absolute-white);
    max-height: 140px;
    padding-left: var(--spacement-medium);
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px var(--absolute-white);
    }

    & .public-DraftEditorPlaceholder-root {
      color: var(--absolute-white);
    }
  }
`
