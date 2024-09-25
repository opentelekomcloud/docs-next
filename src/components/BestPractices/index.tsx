import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function BestPractices(): JSX.Element {
    return (
        <div className='row'>
            <div className={clsx('col col--6')}>
                <scale-accordion dependent>
                    <scale-collapsible>
                        <span slot="heading">Application Services</span>
                        <p>
                            Freegan kinfolk
                            <scale-link href="/">farm-to-table humblebrag cred</scale-link>, hammock
                            bespoke small batch pabst. 90's tumblr whatever direct trade, organic
                            master cleanse copper mug schlitz palo santo bushwick ethical pop-up
                            chambray portland. Sartorial austin iceland street art, pug asymmetrical
                            marfa mustache mumblecore. Shoreditch raclette knausgaard, swag enamel pin
                            food truck everyday carry 3 wolf moon.
                        </p>
                    </scale-collapsible>
                    <scale-collapsible>
                        <span slot="heading">Big Data & Data Analysis</span>
                        <p>
                            Bespoke austin pork belly yuccie pop-up.
                            <scale-link href="/">Before they sold out</scale-link> YOLO kickstarter
                            scenester meggings echo park aesthetic. Thundercats post-ironic wayfarers
                            microdosing etsy hashtag seitan photo booth bitters.
                        </p>
                    </scale-collapsible>
                    <scale-collapsible>
                        <span slot="heading">Computing</span>
                        <p>
                            Bespoke austin pork belly yuccie pop-up.
                            <scale-link href="/">Before they sold out</scale-link> YOLO kickstarter
                            scenester meggings echo park aesthetic. Thundercats post-ironic wayfarers
                            microdosing etsy hashtag seitan photo booth bitters.
                        </p>
                    </scale-collapsible>
                    <scale-collapsible>
                        <span slot="heading">Containers</span>
                        <p>
                            Bespoke austin pork belly yuccie pop-up.
                            <scale-link href="/">Before they sold out</scale-link> YOLO kickstarter
                            scenester meggings echo park aesthetic. Thundercats post-ironic wayfarers
                            microdosing etsy hashtag seitan photo booth bitters.
                        </p>
                    </scale-collapsible>
                    <scale-collapsible>
                        <span slot="heading">Databases</span>
                        <ul>
                            <li>
                                <img style={{ maxWidth: '16px', maxHeight: '16px', margin: '64px 16px 0 0' }} src="https://docs.otc.t-systems.com/_static/images/services/light/dcs.svg" /><span style={{ margin: '-16px 0 0 0' }}>DCS</span>
                            </li>
                        </ul>
                        {/* <div style={{ maxWidth: '112px', maxHeight: '112px' }}>
                            <scale-card to="https://example.com" target="_blank">
                                <div style={{ margin: '0px' }}>
                                    <img style={{ margin: '0 0 0 10px', maxWidth: '32px' }} src="https://docs.otc.t-systems.com/_static/images/services/light/dcs.svg" />
                                    <span style={{ margin: '0 0 0 10px' }}>DCS</span>
                                </div>
                            </scale-card>
                            <scale-card to="https://example.com" target="_blank">
                                <div style={{ margin: '0px' }}>
                                    <img style={{ margin: '0 0 0 10px', maxWidth: '32px' }} src="https://docs.otc.t-systems.com/_static/images/services/light/dcs.svg" />
                                    <span style={{ margin: '0 0 0 10px' }}>DCS</span>
                                </div>
                            </scale-card>
                            <scale-card to="https://example.com" target="_blank">
                                <div style={{ margin: '0px' }}>
                                    <img style={{ margin: '0 0 0 10px', maxWidth: '32px' }} src="https://docs.otc.t-systems.com/_static/images/services/light/dcs.svg" />
                                    <span style={{ margin: '0 0 0 10px' }}>DCS</span>
                                </div>
                            </scale-card>
                        </div> */}
                    </scale-collapsible>
                </scale-accordion>
            </div>
            <div className={clsx('col col--6')}>
                <scale-accordion dependent>
                    <scale-collapsible>
                        <span slot="heading">Management & Deployment</span>
                        <p>
                            Freegan kinfolk
                            <scale-link href="/">farm-to-table humblebrag cred</scale-link>, hammock
                            bespoke small batch pabst. 90's tumblr whatever direct trade, organic
                            master cleanse copper mug schlitz palo santo bushwick ethical pop-up
                            chambray portland. Sartorial austin iceland street art, pug asymmetrical
                            marfa mustache mumblecore. Shoreditch raclette knausgaard, swag enamel pin
                            food truck everyday carry 3 wolf moon.
                        </p>
                    </scale-collapsible>
                    <scale-collapsible>
                        <span slot="heading">Networking</span>
                        <p>
                            Bespoke austin pork belly yuccie pop-up.
                            <scale-link href="/">Before they sold out</scale-link> YOLO kickstarter
                            scenester meggings echo park aesthetic. Thundercats post-ironic wayfarers
                            microdosing etsy hashtag seitan photo booth bitters.
                        </p>
                    </scale-collapsible>
                    <scale-collapsible>
                        <span slot="heading">Security Services</span>
                        <p>
                            Bespoke austin pork belly yuccie pop-up.
                            <scale-link href="/">Before they sold out</scale-link> YOLO kickstarter
                            scenester meggings echo park aesthetic. Thundercats post-ironic wayfarers
                            microdosing etsy hashtag seitan photo booth bitters.
                        </p>
                    </scale-collapsible>
                    <scale-collapsible>
                        <span slot="heading">Storage</span>
                        <p>
                            Bespoke austin pork belly yuccie pop-up.
                            <scale-link href="/">Before they sold out</scale-link> YOLO kickstarter
                            scenester meggings echo park aesthetic. Thundercats post-ironic wayfarers
                            microdosing etsy hashtag seitan photo booth bitters.
                        </p>
                    </scale-collapsible>
                </scale-accordion>
            </div>

            
        </div >
    );
}