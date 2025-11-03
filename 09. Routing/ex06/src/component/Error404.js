import React from 'react';
import * as styles from '../assets/scss/component/Erro404.scss';
import SiteLayout from '../layout/SiteLayout';

function Error404(props) {
    return (
        <SiteLayout>
            <div className={styles.Error404}>
                <h2>Error 404</h2>
            </div>
        </SiteLayout>
    );
}

export default Error404;