'use client'
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);

    const openLoginModal = () => setLoginModalOpen(true);
    const openSignupModal = () => setSignupModalOpen(true);
    return (
        <nav>
            <MaxWidthWrapper>
                <div className="flex items-center gap-8 pt-4 pl-4">
                    <div className="flex items-center gap-1">
                        <img src="/logo.png" className="max-h-8" />
                        <Link href='/' className="text-xl text-red-600 font-semibold tracking-tighter">Ginterest</Link>
                    </div>
                    <div className="flex items-center gap-8 justify-between w-full">
                        <div className="flex gap-8 font-medium">
                            <Link href="/watch">Watch</Link>
                            <Link href="/explore">Explore</Link>
                        </div>
                        <div className="flex items-center gap-8 font-medium ml-auto">
                            <Link href="/about">About</Link>
                            <Link href="/business">Business</Link>
                            <Link href="/blog">Blog</Link>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button onClick={openLoginModal} className=" bg-red-600 text-white font-semibold rounded-3xl py-2 px-3">
                                Log in
                            </button>
                            <LoginModal isOpen={isLoginModalOpen} setIsOpen={setLoginModalOpen} />
                            <button onClick={openSignupModal} className=" bg-gray-200 font-semibold rounded-3xl py-2 px-3">
                                Sign up
                            </button>
                            <SignupModal isOpen={isSignupModalOpen} setIsOpen={setSignupModalOpen} />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav >
    )
}

export default Navbar;
