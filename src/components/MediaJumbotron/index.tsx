import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Slide = {
    type: 'image' | 'video';
    src: string;
    poster?: string;
    title: string;
    description: string;
    cta: string;
    brand?: string;
    target?: string;
};



export default function MediaJumbotron(): JSX.Element {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrent((previous) => (previous + 1) % slides.length);
        }, 10000);

        return () => window.clearInterval(timer);
    }, []);

    const goToNext = () => {
        setCurrent((previous) => (previous + 1) % slides.length);
    };

    const goToPrevious = () => {
        setCurrent((previous) => (previous - 1 + slides.length) % slides.length);
    };

    const slide1Image = useBaseUrl('/img/T_background_runway.jpg');
    const slide2Image = useBaseUrl('/img/T_background_wall.jpg');
    const slide3Image = useBaseUrl('/img/T_background_bridge.jpg');

    const slides: Slide[] = [
        {
            type: 'image',
            src: slide1Image,
            title: 'Best Practices',
            description: "Explore the recommended strategies for resource management, such as efficient utilization of compute and storage resources. Gain insights into designing for high availability and fault tolerance to ensure robust system performance.",
            cta: "Let's go",
            target: useBaseUrl("/docs/best-practices")
        },
        {
            type: 'image',
            src: slide2Image,
            title: 'Blueprints',
            description: 'Discover tailored out-of-the-box solutions and practical implementations for a range of scenarios. Explore real-world examples demonstrating the versatility and optimal application and infrastructure design using T Cloud Public.',
            cta: "Let's go",
            target: useBaseUrl("/docs/blueprints")
        },
        {
            type: 'image',
            src: slide3Image,
            title: 'Templates',
            description: 'Use our turnkey solutions in Terraform and TOSCA to streamline both simple and complex infrastructure scenarios on T Cloud Public; whether with Cloud Create, Resource Formation Service, or directly using Terraform, OpenTofu or Crossplane.',
            cta: 'Discover them all',
            target: useBaseUrl("/templates")
        },
    ];

    return (
        <section className={styles.jumbotron} aria-label="Featured resources">
            <div className={styles.frame}>
                <div className={styles.mediaArea}>
                    {slides.map((slide, index) => {
                        const isActive = index === current;

                        return (
                            <article
                                key={`${slide.title}-${index}`}
                                className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
                                aria-hidden={!isActive}
                            >
                                {slide.type === 'image' ? (
                                    <img className={styles.media} src={slide.src} alt="" />
                                ) : (
                                    <video
                                        className={styles.media}
                                        src={slide.src}
                                        poster={slide.poster}
                                        autoPlay={isActive}
                                        muted
                                        loop
                                        playsInline
                                    />
                                )}

                                {/* <div className={styles.overlay} />
                                <div className={styles.brandLine} /> */}

                                {/* {slide.brand && <div className={styles.brand}>{slide.brand}</div>} */}

                                <div className={styles.contentCard}>
                                    <h1 className={styles.title}>{slide.title}</h1>
                                    <p className={styles.description}>{slide.description}</p>
                                    <a className={styles.button} href={slide.target}>
                                        {slide.cta}
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            <div className={styles.controls}>
                <button
                    className={styles.arrowButton}
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                >
                    ‹
                </button>

                <div className={styles.dots} aria-label="Select slide">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                            type="button"
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === current}
                        />
                    ))}
                </div>

                <button
                    className={styles.arrowButton}
                    type="button"
                    onClick={goToNext}
                    aria-label="Next slide"
                >
                    ›
                </button>
            </div>
        </section>
    );
}
