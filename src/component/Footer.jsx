function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
            <footer>
                © {year} All rights reserved.
            </footer>
        </>
    )
}

export default Footer;