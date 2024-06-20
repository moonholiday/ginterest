import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"
import { DialogOverlay } from '@radix-ui/react-dialog';

const LoginModal = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen} >
            <DialogOverlay className="bg-black bg-opacity-30" />
            <DialogContent>
                <DialogTitle>Login</DialogTitle>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;

