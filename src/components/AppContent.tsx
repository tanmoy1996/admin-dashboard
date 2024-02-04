import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const AppContent: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  )
}

export default AppContent
