import style from "./Footer.module.css"

function Footer () {
    return(
        <div className={style.container}>
            <footer className={style.footer}>
                <h2 className={style.footer__title}>Footer Movie App</h2>
                <p className={style.footer__author}>Creared By Aripin</p>
            </footer>
        </div>
    )
}

export default Footer