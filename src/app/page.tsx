import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <section>
                <MaxWidthWrapper className="pb-24 pt-10">
                    <div className="relative mx-auto text-center flex flex-col items-center">
                        <h1 className="relative w-fit tracking-tight text-balance mt-36 font-medium text-5xl md:text-6xl lg:text-7xl">Get your next</h1>
                    </div>
                </MaxWidthWrapper>
            </section>
        </main>
    );
}
