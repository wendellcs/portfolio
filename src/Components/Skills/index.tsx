export const Skills = () => {
    return (
        <section className="max-w-3xl mx-auto text-center animate-fade-up mt-40">
            <h3 className="text-primary mb-5">// stack</h3>
            <h2 className="font-bold text-white text-5xl">
                Minhas <span className="text-transparent bg-clip-text bg-gradient-text animate-gradient-text bg-size[200%_auto]">skills</span>
            </h2>

            <div className="text-white flex gap-20 text-left">
                <div className="w-full max-w-75 p-5 bg-muted rounded-2xl border border-secondary shadow-glow-cyan-soft">
                    <h3 className="text-primary text-2xl font-bold">/frontend</h3>
                    <ul className="text-md mt-5 flex flex-col gap-2">
                        <li>ReactJS</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>SASS/SCSS</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="w-full max-w-75 p-5 bg-muted rounded-2xl border border-secondary shadow-glow-cyan-soft">
                    <h3 className="text-primary text-2xl font-bold">/backend</h3>
                    <ul className="text-md mt-5 flex flex-col gap-2">
                        <li>Python</li>
                        <li>FastAPI</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="w-full max-w-75 p-5 bg-muted rounded-2xl border border-secondary shadow-glow-cyan-soft">
                    <h3 className="text-primary text-2xl font-bold">/workflow</h3>
                    <ul className="text-md mt-5 flex flex-col gap-2">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}