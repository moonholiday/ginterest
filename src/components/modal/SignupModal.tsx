import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import SignupForm from '../form/SignupForm';

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
                <DialogTitle className="sr-only">Sign Up</DialogTitle>
                <DialogDescription>This is a signup modal</DialogDescription>
                <div className='flex flex-col items-center gap-10'>
                    <SignupForm />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SignupModal;
