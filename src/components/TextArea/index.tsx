import React, {
  type DetailedHTMLProps,
  type TextareaHTMLAttributes,
  useState
} from 'react'
import { Editor, EditorState } from 'react-draft-wysiwyg'
import * as S from './styles'

interface ITextAreaProps extends
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export const TextArea = (props: ITextAreaProps) => {
  const [editorState, setEditorState] = useState<EditorState>()

  return (
    <S.EditorContainer>
      <Editor
        placeholder={props.placeholder}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
    </S.EditorContainer>
  )
} 
