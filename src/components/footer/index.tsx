import React from "react";
import Link from 'next/link';
import { Container, Nav } from '@elements';

import styles from "./index.module.scss";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Nav className={styles.footerNavigation}>
                    <Link href="/">Home</Link>
                    <Link href="/terms-and-conditions">Terms and Conditions</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/colleciton-statement">Collection Statement</Link>
                    <Link href="/manage-account">Manage Account</Link>
                </Nav>
                <span className={styles.copyright}>
                    Copyright © 2016 DEMO Streaming. All Rights Reserved.
                </span>
            </Container>
            <Container className={styles.externalLinksContainer}>
                <Nav className={styles.socialApps}>
                    <a 
                        data-testid="facebook-link" 
                        href="https://www.facebook.com/"
                    >
                        <img src="/FacebookIcon.png" />
                    </a>
                    <a 
                        href="https://twitter.com/"
                        data-testid="twitter-link"
                    >
                        <img src="/TwitterIcon.png" />
                    </a>
                    <a 
                        href="https://www.instagram.com/"
                        data-testid="instagram-link"
                    >
                        <img src="/InstagramIcon.png" />
                    </a>
                </Nav>
                <Nav className={styles.appLinks}>
                    <a
                        href="https://www.apple.com/app-store/"
                        data-testid="appstore-link"
                    >
                        <img src="/AppStore.png" />
                    </a>
                    <a
                        href="https://play.google.com/"
                        data-testid="googleplay-link"
                    >
                        <img src="/GooglePlay.png" />
                    </a>
                    <a
                        href="https://www.microsoft.com/tr-tr/"
                        data-testid="microsoft-link"
                    >
                        <img src="/Microsoft.png" />
                    </a>
                </Nav>
            </Container>
        </footer>
    );
};
