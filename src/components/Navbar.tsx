import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
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
                            <Link href="/login" className="bg-red-600 text-white font-semibold rounded-3xl py-2 px-3">Log in</Link>
                            <Link href="/signup" className="bg-slate-200 font-semibold rounded-3xl py-2 px-3 ">Sign up</Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;
