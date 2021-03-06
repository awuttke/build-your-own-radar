require('./stylesheets/base.scss');
require('./images/logo.png');
require('./images/tech-radar-201611-landing-page-wide.png');
require('./images/tw-logo.png');
require('./images/favicon.ico');
require('./images/radar_legend.png');

const JsonRadar = require('./util/factory');

const project = "demo"
JsonRadar().build(require('./data/' + project +'.json'), project + " Technology Radar");