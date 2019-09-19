/* eslint-disable no-unused-vars */
const DebugLog = (player = -1, message, severity = 0) => {
    let prefix = IsDuplicityVersion() ? `[${GetCurrentResourceName()}]` : '[TEAM-BASE]';
    switch (severity) {
        case 0:
            prefix += ' [INFO]';
            break;

        case 1:
            prefix += ' [WARN]';
            break;

        case 2:
            prefix += ' [ERROR]';
            break;

        default:
            prefix += ' [INFO]';
            break;
	}
};