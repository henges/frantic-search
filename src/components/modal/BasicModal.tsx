import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, } from "@chakra-ui/react"

export type BasicModalProps = {

  isOpen: boolean,
  reset?: {text: string, action: () => void},
  onSave?: () => void,
  onClose: () => void,
  title: string,
  children: React.ReactElement | React.ReactElement[]
}

export const BasicModal: React.FC<BasicModalProps> = ({ isOpen, reset, onSave, onClose, title, children }) => {
    return (
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader pb="1">{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
                {reset &&
                <Button colorScheme='whiteAlpha' mr={"auto"} onClick={reset.action}>
                  {reset.text}
                </Button>}
                <Button colorScheme='blue' mr={3} onClick={onSave || onClose}>
                  Save
                </Button>
                <Button variant='ghost' onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
    )
  }