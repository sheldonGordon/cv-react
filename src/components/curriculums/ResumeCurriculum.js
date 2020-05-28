import React from 'react';
import moment from 'moment/min/moment-with-locales'

import { Card } from 'antd'

const ResumeCurriculum = ({curriculum}) => {
    moment.locale('fr')

    return (            
        <Card title={curriculum.titre} size='default' hoverable >
            <p>
                Ajouter par {curriculum.nom} {curriculum.prenom}
            </p>
            <p>
                {moment(curriculum.dateCreation.toDate()).format('LL')}
            </p>
        </Card>
    );
};

export default ResumeCurriculum;