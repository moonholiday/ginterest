import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import LoginForm from '../form/LoginForm';

const LoginModal = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen} >
            <DialogContent>
                <DialogTitle className="sr-only">Sign Up</DialogTitle>
                <DialogDescription className="sr-only">This is a signup modal</DialogDescription>
                <div className='flex flex-col items-center gap-10'>
                    <LoginForm />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;

