import React from 'react';


const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                
                <div style={styles.footerLogo}>
                    
                </div>
                <img src="logo1.png" alt="" class="sir"/>
                
                
                <div style={styles.footerSection}>
                    <h4 style={styles.heading}>ELECTROMOTION</h4>
                    <p style={styles.text}>
                        Support sustainability by reducing pollution, integrating
                        autorickshaw community as part of the solution and positively
                        enhancing their livelihood & standard of living.
                    </p>
                </div>
                
            
                <div style={styles.footerSection}>
                    <h4 style={styles.heading}>PRODUCTS</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>RetroKit®</li>
                        <li style={styles.listItem}>Diagnostix</li>
                        <li style={styles.listItem}>Instrument Cluster</li>
                        <li style={styles.listItem}>EV Lab Equipments</li>
                    </ul>
                </div>
                
                
                <div style={styles.footerSection}>
                    <h4 style={styles.heading}>CONTACT</h4>
                    <p style={styles.text}>📞 +91 9272091200</p>
                    <p style={styles.text}>✉️ info@evidyut.com</p>
                    <p style={styles.text}>
                        📍 Electronic Sadan - 3, MIDC, Bhosari, Pune, Maharashtra - 411026
                    </p>
                    <div style={styles.socialIcons}>
                        
                        <a href="#" style={styles.icon}><i className="fab fa-linkedin"></i></a>
                        <a href="#" style={styles.icon}><i className="fab fa-twitter"></i></a>
                        <a href="#" style={styles.icon}><i className="fab fa-facebook"></i></a>
                        <a href="#" style={styles.icon}><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="foo">© 2024 Electromotion.. All rights reserved</div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '20px',
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    footerLogo: {
        flex: 1,
    },
    logo: {
        maxWidth: '100px',
    },
    footerSection: {
        flex: 1,
        margin: '0 20px',
    },
    heading: {
        color: '#32CD32', 
        marginBottom: '10px',
    },
    text: {
        fontSize: '14px',
        lineHeight: '1.5',
    },
    list: {
        listStyle: 'none',
        padding: '0',
    },
    listItem: {
        margin: '5px 0',
    },
    socialIcons: {
        marginTop: '10px',
    },
    icon: {
        color: '#32CD32',
        marginRight: '10px',
        fontSize: '20px',
        textDecoration: 'none',
    },
};

export default Footer;
