import { useEffect, useState } from "react"
import './App.css';

export function App () {
    
    const [text, setText] = useState();
    const [imageUrl, setImageUrl] = useState();

    
    const ENDPOINT_RANDOM_FACT = `https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`;
    const DOG_ENDPOINT_IMAGE_URL = `https://api.thedogapi.com/v1/images/search`;
    
    useEffect(() => {
        fetch(ENDPOINT_RANDOM_FACT)
            .then(response => response.json())
            .then(data => {
                const { text } = data
                setText(text)
            })
    }, [])

    useEffect(() => {           
        fetch(DOG_ENDPOINT_IMAGE_URL)
        .then(response => response.json())
        .then(res => {
            setImageUrl(res[0].url);
        })
    }, [])

    return (
        <>
            <main>
                <div className="header">
                    <h4>Fetching App</h4>
                    <h1>
                        Dogs barks random facts...
                    </h1>
                </div>
            </main>
            <section>
                {text && <p>{text}</p>}
                <hr/>
                {imageUrl && <img src={imageUrl} alt='A random image of dogs.' />}
            </section>
        </>
    )
}