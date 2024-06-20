import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"

const SignupModal = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogContent>
                <DialogTitle>Signup</DialogTitle>
            </DialogContent>
        </Dialog>
    );
};

export default SignupModal;


