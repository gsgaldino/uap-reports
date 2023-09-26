'use client'
import React, {
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react'

interface IModalContext {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const initialState: IModalContext = {
  isOpen: false,
  close: () => {},
  open: () => {},
  toggle: () => {}
}

const ModalContext = createContext<IModalContext>(initialState)

export default function ModalContextProvider(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const value = useMemo(() => ({
    isOpen: isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((old) => !old)
  }), [isOpen])

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
