import React, {
  type DragEvent,
  useState,
} from 'react'
import { Button } from '../Button'
import { Typography } from '../Typography'
import { FileMiniature } from './components'
import * as S from './styles'

interface FileData {
  id: number
  name: string
  size: number
  type: string
  imageUrl: string | ArrayBuffer | null
}

export const FileSelector = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<FileData[]>([])

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)
  
  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  
    const filesData = Array.from(e.dataTransfer.files)
  
    const promises = filesData.map((file, index) => new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => {
        if (file.type.startsWith('image/')) {
          const imageUrl = reader.result
          resolve({
            id: index,
            name: file.name,
            size: file.size,
            type: file.type,
            imageUrl: imageUrl,
          })
        } else {
          alert('Please drop an image file.')
        }
      }
  
      reader.readAsDataURL(file)
    }))

    const files = await Promise.all(promises) as FileData[]

    setFiles((old) => [
      ...old,
      ...files
    ])
  }

  const removeFile = (id: number) => {
    setFiles((old) => old.filter((file) => file.id !== id))
  }

  return (
    <S.Container
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => {
        e.preventDefault()
        e.stopPropagation()
      }}
      onDrop={handleDrop}
      isDragging={isDragging}
    >
      {files.length ? (
        <S.FilesContainer>
          {files.map((file) => (
            <FileMiniature
              key={file.id}
              imageUrl={file.imageUrl}
              onClose={() => removeFile(file.id)}
            />
          ))}
        </S.FilesContainer>
      ) : (
        <>
          <Typography>Seleciona ou arraste anexos</Typography>
          <Button.Container variant="link">Selecionar mídia</Button.Container>
        </>
      )}
    </S.Container>
  )
}
