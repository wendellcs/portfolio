
export const About = () => {
    return (
        <section className="max-w-3xl mx-auto text-center animate-fade-up mt-40">
            <h3 className="text-primary mb-5">// sobre mim</h3>

            <h2 className="font-bold text-white text-5xl">
                Wendell de <span className="text-transparent bg-clip-text bg-gradient-text animate-gradient-text bg-size[200%_auto]">Carvalho Silva</span>
            </h2>

            <p className="text-muted-foreground text-lg mt-10">Busco sempre aperfeiçoar minhas habilidades, com o objetivo de elevar o nível e a qualidade dos meus projetos.</p>

            <p className="text-muted-foreground text-lg mt-8">
                <span className="text-primary">Desenvolvedor fullstack com foco em web</span>. Atualmente curso <span className="text-primary">Ciência da Computação</span> e
                desenvolvo projetos para aprimorar minhas habilidades e criar aplicações eficientes e intuitivas.
            </p>

            <div className="flex gap-5 mt-15 w-min mx-auto">
                <div className="border border-secondary shadow-glow-cyan-soft rounded-2xl w-35 py-5 mr-5 hover:-translate-y-2.5 transition duration-300">
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-text animate-gradient-text bg-size[200%_auto]">4+</p>
                    <p className="text-muted-foreground text-sm">Anos codando</p>
                </div>
                <div className="border border-secondary shadow-glow-cyan-soft rounded-2xl w-35 py-5 hover:-translate-y-2.5 transition duration-300">
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-text animate-gradient-text bg-size[200%_auto]">B2</p>
                    <p className="text-muted-foreground text-sm">Inglês</p>
                </div>
            </div>
        </section>
    )
}