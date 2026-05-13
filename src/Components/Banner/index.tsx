import { FaArrowRightLong } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

export default function Banner() {
    return (
        <section id="top" className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.05_220),oklch(0.13_0.02_240))]">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(oklch(0.82_0.16_195/0.06)_1px,transparent_1px),linear-gradient(90deg,oklch(0.82_0.16_195/0.06)_1px,transparent_1px)] [background-size:50px_50px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.13_0.02_240)_85%)]" />
            <div className="absolute top-1/3 -left-40 size-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-10 -right-40 size-[500px] rounded-full bg-secondary/20 blur-[120px]" />
            <div className="absolute top-10 right-1/3 size-[300px] rounded-full bg-primary/10 blur-[100px]" />

            <div className="w-[80%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <div>
                    <div className="bg-foreground-transparent w-[230px] flex justify-center items-center px-3 py-[6px] rounded-full border border-primary shadow-glow-cyan-soft">
                        <p className="font-mono text-white flex items-center gap-2.5 text-sm "><div className="w-2 h-2 bg-teal-400 animate-bg-blink rounded-full"></div> Disponível para projetos</p>
                    </div>

                    <h1 className="text-foreground text-[72px] font-bold leading-[100%] my-10">Olá, sou <br/><span className="text-shadow-cyan text-transparent bg-clip-text bg-gradient-text animate-gradient-text bg-[length:200%_auto]">Wendell</span></h1>

                    <p className="text-xl text-muted-foreground max-w-md">
                        <span className="text-foreground font-semibold">Desenvolvedor Full-stack </span>
                        apaixonado por criar experiências digitais elegantes, performáticas e intuitivas.
                    </p>

                    <div className="flex gap-5 my-10">
                        <button className="flex items-center gap-2 bg-gradient-primary px-6 py-3.5 rounded-lg font-semibold shadow-glow-cyan">Ver projetos <FaArrowRightLong className="text-lg"/></button>
                        <button className="flex items-center gap-2 rounded-lg px-6 py-3.5 font-semibold text-foreground"><GrDocumentText className="text-lg"/> Currículo</button>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </section>
    )
}