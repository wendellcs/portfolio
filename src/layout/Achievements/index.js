import './achievements.sass'

export default function Achievements() {
    return (
        <section id="achievements">
            <h2 className="achievements-title">Conquistas</h2>

            <h3>🏆 Hackathon Nacional Ctrl+Play 2025</h3>
            <p className='tema'><span className='span-highlight'>Tema:</span> Educação financeira</p>

            <h4>1º lugar · 30+ equipes</h4>
            <p>
                Atuei na orientação de equipes durante o Hackathon Ctrl+Play 2025. Uma das equipes que orientei chegou à final e conquistou o 1° lugar.
            </p>

            <div>
                <a href='https://wendellcs.github.io/hackathon-ctrlyoung/' target='_blank' rel="noreferrer noopener">Live site</a>
                <a href='https://github.com/wendellcs/hackathon-ctrlyoung' target='_blank' rel="noreferrer noopener">Github</a>
            </div>

            <h3>🏆 Hackathon Nacional Ctrl+Play 2026</h3>
            <p className='tema'><span className='span-highlight'>Tema:</span> Segurança digital e cidadania online</p>

            <h4>3º lugar · 80+ equipes</h4>
            <p>
                Atuei como mentor de uma equipe durante o Hackathon Ctrl+Play 2026. A equipe chegou à final e conquistou o 3º lugar entre mais de 80 equipes participantes.
            </p>

            <div>
                <a href='https://olvsophi.github.io/Hackathon/index.html' target='_blank' rel="noreferrer noopener">Live site</a>
                <a href='https://github.com/olvsophi/Hackathon' target='_blank' rel="noreferrer noopener">Github</a>
            </div>

        </section>
    )
}