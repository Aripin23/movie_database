import styles from "./AddMovieForm.module.css"

function AddMovieForm(){
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <img
                        className={styles.hero__image}
                        src="https://picsum.photos/536/354"
                        alt="placeholder"
                    />
                </div>
                <div className={styles.hero__right}>
                    <h2 className={styles.hero__title}>Add Movie</h2>
            
                    <form action="#" method="post" id="signup">
                        <div class="field">
                            <label for="name">Title</label>
                            <input type="text" id="title" name="title" placeholder="Enter Title" />
                            <small></small>
                        </div>
                        <div class="field">
                            <label for="email">Year</label>
                            <input type="text" id="year" name="year" placeholder="Enter Year" />
                            <small></small>
                        </div>
                        <div class="field">
                            <input type="submit" value="Save" />
                        </div>
                        
                    </form>
                </div>

            </section>
        </div>
    )
}

export default AddMovieForm