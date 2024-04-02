'use client';
import { AddIcon, AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Box, Button, ButtonGroup, ButtonIcon, ButtonText, Center, CloseIcon, HStack, Heading, Icon, Text } from "@gluestack-ui/themed";

import Image from "next/image";
import React from "react";


const ExampleButton = () => {
    const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  return (
    <Center h={300}>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Deactivate </ButtonText>
      </Button>
      <AlertDialog
        isOpen={showAlertDialog}
        onClose={() => {
        setShowAlertDialog(false);
        }}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size='lg'>Deactivate account</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size='sm'>
              Are you sure you want to deactivate your account? Your data will be permanently removed and cannot be undone.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
           <ButtonGroup space="lg">
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              bg='$error600'
              action="negative"
              onPress={() => {
                setShowAlertDialog(false);
              }}
            >
              <ButtonText>Deactivate</ButtonText>
            </Button>
             </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Center>
  );
}

export default ExampleButton
