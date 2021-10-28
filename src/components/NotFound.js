import React from 'react';
import { Card, CardHeader, H6, Subtitle2 } from 'ui-neumorphism';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className='wrapper not-found'>
        <Card flat>
            <CardHeader
                title={<H6>404</H6>}
                subtitle={<Subtitle2 secondary>Page Not Found</Subtitle2>}
            />
            Go <Link to='/'>Home</Link>
        </Card>
    </div>
);

export default NotFound;
