import React, { Dispatch, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
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
                <LoginForm />
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;

