// Importing the styles for the NotFoundPage component
import style from "../Nopage/NoPage.module.scss";

// NotFoundPage functional component
export function NotFoundPage() {
    // Return statement for rendering the component
    return (
        <>
            {/* Section for displaying the error body */}
            <section className={style['error-body']}>
                {/* Video element for the background */}
                <video preload="auto" className={style.background} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/err.mp4" autoPlay muted loop></video>
                
                {/* Container for the error message */}
                <div className={style.message}>
                    {/* Heading for the error code (404) */}
                    <h1 t="404">404</h1>

                    {/* Bottom section of the error message */}
                    <div className={style.bottom}>
                        {/* Text indicating that the user has lost their way */}
                        <p>You have lost your way</p>
                        
                        {/* Link to return home (Placeholder "#" used) */}
                        <a href="#">return home</a>
                    </div>
                </div>
            </section>
        </>
    );
}
