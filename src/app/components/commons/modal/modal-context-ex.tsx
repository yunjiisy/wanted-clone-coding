'use client'
import React, {
  createContext,
  useReducer,
  useContext,
  type ReactNode,
} from 'react'

// Type------------------
interface modalInfo {
  isVisible: boolean

  title: string
  content: string
  onConfirm?: (() => void) | null
  onCancel?: (() => void) | null

  useConfirm: boolean
  useCancel: boolean
}

interface ModalAction {
  type: string
  payload?: Partial<modalInfo>
}

// context------------------
const ModalContext = createContext<
  { modalInfo: modalInfo; dispatch: React.Dispatch<ModalAction> } | undefined
>(undefined)

// reducer-------------------
const reducer = (state: modalInfo, action: ModalAction): modalInfo => {
  switch (action.type) {
    case 'Visible':
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      return { ...state, isVisible: true, ...(action.payload ?? {}) }
    case 'Invisible':
      return { ...state, isVisible: false }
    default:
      return state
  }
}

interface ModalProviderProps {
  children: ReactNode
}
// provider-----------------

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalInfo, dispatch] = useReducer(reducer, {
    isVisible: false,
    title: '',
    content: '',

    onConfirm: null,
    // confirmCallback
    onCancel: null,
    // cancelCallback
    useConfirm: false,
    useCancel: false,
  })

  return (
    <ModalContext.Provider value={{ modalInfo, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context == null) {
    throw new Error('ModalProvider내에서만 사용가능~!~!')
  }
  return context
}
