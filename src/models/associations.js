import User from './User.js';
import Scan from './Scan.js';
import Audit from './Audit.js';

// User <-> Audit
User.hasMany(Audit, { foreignKey: 'userId' });
Audit.belongsTo(User, { foreignKey: 'userId' });

// Audit <-> Scan
Audit.belongsTo(Scan, { as: 'prevScan', foreignKey: 'prevScanId' });
Audit.belongsTo(Scan, { as: 'currentScan', foreignKey: 'currentScanId' });



export { User, Scan, Audit };
