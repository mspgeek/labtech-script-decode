const {Functions} = require('./constants');

/**
 *
 * @param {ScriptStep} step
 * @returns {string}
 */
function getFunctionLineDescription(step) {
  if (!functionTemplates[step.FunctionId]) {
    const {FunctionType, Name: FunctionName} = step.FunctionObject;
    return `${FunctionType} ${FunctionName}`;
  }

  return functionTemplates[step.FunctionId](step.Param1, step.Param2, step.Param3, step.Param4, step.Param5, step.Sort);
}

function negationCheck(param) {
  let negated = false;
  let trimmed = param;
  if (('' + param).startsWith('!') || ('' + param).endsWith('!')) {
    negated = true;
    trimmed = ('' + param).replace('!', '');
    trimmed = !Number.isNaN(parseInt(trimmed)) ? parseInt(trimmed) : trimmed;
  }
  return {negated, trimmed};
}

const functionTemplates = {};

functionTemplates[2] = (_, p2) => `LTCommand: ${p2}`;
functionTemplates[12] = (p1) => `Terminate Process: ${p1}`;
functionTemplates[13] = (p1) => `DELETE: ${p1}`;
functionTemplates[14] = (p1) => `DELETE: [REGISTRY ${p1}]`;
functionTemplates[15] = (p1, p2, p3) => p3 === 0
  ? `EXECUTE: ${p1} ${p2} and wait until finish, store the result in %executeresult%`
  : `EXECUTE: ${p1} ${p2} and return immediately.`;
functionTemplates[125] = (p1, p2, p3) => p3 === 0
  ? `EXECUTE as Admin: ${p1} ${p2} and wait until finish, store the result in %executeresult%`
  : `EXECUTE as Admin: ${p1} ${p2} and return immediately.`;
functionTemplates[127] = (p1, p2, p3, p4) => p3 === 0
  ? `EXECUTE as ${p4}: ${p1} ${p2} and wait until finish, store the result in %executeresult%`
  : `EXECUTE as ${p4}: ${p1} ${p2} and return immediately.`;
functionTemplates[16] = (p1, p2) => `SHELL: ${p1} and store the result in %shellresult%`;
functionTemplates[126] = (p1, p2) => `SHELL as Admin: ${p1} and store the result in %shellresult%`;
functionTemplates[128] = (p1, p2) => `SHELL as ${p2}: ${p1} and store the result in %shellresult%`;
functionTemplates[18] = (p1) => `UPLOAD: ${p1} to LTSHARE\\Uploads\\, store the result in %uploadedfile%`;
functionTemplates[17] = (p1, p2) => {
  let p1Trim = p1;
  if (('' + p1).indexOf(':') > -1) {
    p1Trim = p1.replace(':', '');
  }
  let p2Trim = p2;
  if (('' + p2).length < 1 || !p2) {
    p2Trim = 0;
  }
  return (p2Trim === 0) ? `Run Script: ${p1Trim}` : `Run Script: ${p1Trim} in Minutes: ${p2Trim}`;
};
functionTemplates[19] = (p1, p2, p3) => {
  let temp = 'DOWNLOAD';
  if (('' + p2).startsWith('!')) {
    temp += '(nocache)';
  }
  if (('' + p1).startsWith('*')) {
    temp += '(alt)';
  }
  if (p3 === 0) {
    return `${temp}: ${('' + p1).replace('*', '').replace('\\', '/')} saved to ${('' + p2).replace('!', '')} and wait until finish.`;
  }
  return `${temp}: ${('' + p1).replace('*', '').replace('\\', '/')} saved to ${('' + p2).replace('!', '')} and return immediately.`;
};
functionTemplates[20] = (p1, p2, p3) => {
  switch (p1) {
    case 0:
      return `SET: @${p3}@ = REGISTRY[${p2}]`;
    case 1:
      return `SET: @${p3}@ = ${p2}`;
    case 2:
      return `SET: @${p3}@ = %computerid%`;
    case 3:
      return `SET: @${p3}@ = %clientid%`;
    case 4:
      return `SET: @${p3}@ = %locationid%`;
    case 5:
      return `SET: @${p3}@ = %consolenumber%`;
    case 6:
      return `SET: @${p3}@ = [Temporary Directory]`;
    case 7:
      return `SET: @${p3}@ = FILECONTENTS[${p2}]`;
    case 8:
      return `SET: @${p3}@ = FILEWRITEDATE[${p2}]`;
    case 9:
      return `SET: @${p3}@ = FILEVERSION[${p2}]`;
    case 10:
      return `SET: @${p3}@ = FILESIZE[${p2}]`;
    case 11:
      return `SET: @${p3}@ = SQLRESULT[${p2}]`;
    case 12:
      return `SET: @${p3}@ = [ALL LOCAL VARIABLES]`;
    case 13:
      return `SET: @${p3}@ = PROPERTY[${p2}]`;
    case 14:
      return `SET: [RELOAD INTERNAL VARIABLES]`;
    case 15:
      return `SET: Variables from Splitting ${p2}`;
    case 16:
      return `SET: Virus Scanner Variables for scanner #${p2}`;
    case 17:
      return `SET: @${p3}@ = AgentExpand[${p2}]`;
    case 18:
      return `SET: @${p3}@ = MD5[${p2}]`;
    default:
      return 'SET: ';
  }
};
functionTemplates[21] = (p1) => `Sleep ${p1} seconds`;
functionTemplates[22] = () => `Reboot Computer`;
functionTemplates[23] = (p1, p2) => `Rename ${p1} to ${p2}`;
functionTemplates[24] = (p1, p2) => `Send Email To: ${p1} Subject: ${p2}`;
functionTemplates[25] = (p1, p2) => `Popup Message: ${p1} on Console #${p2}`;
functionTemplates[26] = (p1, p2) => `Open Browser to ${p1} on Console #${p2}`;
functionTemplates[27] = (p1, p2) => `SET: ${p1} = ${p2}`;
functionTemplates[28] = (p1, p2) => {
  if (!('' + p1).startsWith('!')) {
    return `DOWNLOAD: /Labtech/Transfer/${('' + p1).replace('\\', '/')} saved to ${p2}`;
  }
  return `DOWNLOAD(Force): /Labtech/Transfer/${('' + p1).replace('\\', '/')} saved to ${('' + p2).replace('!', '')}`;
};
functionTemplates[29] = (p1) => `LOG: ${p1}`;
functionTemplates[30] = (p1) => `Logoff console #${p1}`;
functionTemplates[31] = (p1) => {
  // cast to string
  if (('' + p1).toLowerCase() === '1' || p1 === 1) {
    return 'Toggle FasTalk ON';
  } else if (('' + p1).toLowerCase() === '00' || p1 === 0) {
    return 'Toggle FasTalk OFF';
  }
  return 'Toggle FasTalk';
};
functionTemplates[32] = (p1) => `Set default printer to ${p1}`;
functionTemplates[33] = (p1) => `Clear printer queue on ${p1}`;
functionTemplates[34] = (p1, p2) => `Copy ${p1} to ${p2}`;
functionTemplates[35] = (p1) => `START SERVICE: ${p1}`;
functionTemplates[36] = (p1) => `STOP SERVICE: ${p1}`;
functionTemplates[37] = (p1) => `CAPTURE Screen on Console #${p1}`;
functionTemplates[38] = (p1, p2) => {
  if (p1 !== 0) {
    return 'Windows Update Disabled';
  }
  if (!p2) {
    return 'Windows Update Enabled';
  }
  return `Windows Update set to ${p2}`;
};
functionTemplates[39] = (p1, p2) => `Defragment Drive ${p1} and save result to @${p2}@`;
functionTemplates[40] = (p1, p2) => `Scan Drive ${p1} and save result to @${p2}@`;
functionTemplates[41] = (p1, p2, p3, p4) => `Read Performance Counter ${p1}\\${p2}\\${p3} and save result to @${p4}@`;
functionTemplates[42] = (p1, p2, p3) => `Run ${p1} ${p2} on Console #${p3}`;
functionTemplates[43] = (p1, p2) => `Share Folder ${p1} as ${p2}`;
functionTemplates[44] = (p1) => `Stop Sharing Folder ${p1}`;
functionTemplates[46] = (p1, p2, p3, p4) => {
  if (Number.isInteger(p1) || Number.isInteger(p1) && Number.isInteger(p2)) {
    return `Create New Ticket for client:${p1}\\location:${p2} Email: ${p3} Subject: ${p4}`;
  } else if (Number.isInteger(p2)) {
    return `Create New Ticket for ${p1}\\computer:${p2} Email: ${p3} Subject: ${p4}`;
  }
  return `Create New Ticket for ${p1}\\${p2} Email: ${p3} Subject: ${p4}`;
};
functionTemplates[47] = (p1, p2, _, p4) => {
  const severity = Functions[47].ParamNames[1].Values[p2];
  return `Create ${severity} Alert: ${p4}`;
};
functionTemplates[48] = (p1, p2) => {
  if (p2 === 0) {
    return `Email Alerts to ${p1} and Clear.`;
  }
  return `Email Alerts to ${p1}`;
};
functionTemplates[58] = (p1) => {
  if (!p1) {
    return 'Wake on LAN sent to @ComputerID@';
  }
  return `Wake on LAN sent to ${p1}`;
};
functionTemplates[66] = () => 'Perform Offline Backup and store the result in %backupsize%';
functionTemplates[67] = (p1) => `SQL EXECUTE: ${p1}`;
functionTemplates[69] = (p1, p2) => {
  if (p1 === 0) {
    return `TOOL INSTALL: AppID=${p2}`;
  }
  return `TOOL REMOVE: AppId=${p2}`;
};
functionTemplates[70] = (p1, p2, p3, p4) => {
  let temp = p1;
  const compare = Functions[70].ParamNames[1].Values[p2];
  if (('' + p1).includes('@') && !('' + p1).includes('%')) {
    temp = `@${p1}@`;
  }
  if (p4 === '' || p4 === 0) {
    return `IF ${temp} ${compare} ${p3} THEN Exist Script`;
  }
  if (!Number.isInteger(p4) && p4 !== '') {
    return `IF ${temp} ${compare} ${p3} THEN Jump to ${p4}`;
  }
  return `IF ${temp} ${compare} ${p3} THEN Jump to line ${p4}`;
};
functionTemplates[72] = (p1, p2) => {
  if (Number.isInteger(p2)) {
    return `Assign Ticket ${p1} to user ${p2}`;
  }
  return `Assign Ticket ${p1} to ${p2}`;
};
functionTemplates[73] = (p1, p2) => `Run on the Labtech Server: ${p1} ${p2}`;
functionTemplates[74] = () => 'Perform a Disk Cleanup';
functionTemplates[75] = (p1, p2) => `LTServer Write ${p2} to ${p1}`;
functionTemplates[76] = (p1) => `Send NetBios Message from the Labtech Server to ${p1}`;
functionTemplates[77] = (p1) => `Make Voice Call to ${p1}`;
functionTemplates[78] = (p1) => `Make Page Call to ${p1}`;
functionTemplates[79] = (p1) => `Make Fax Call to ${p1}`;
functionTemplates[80] = (p1, p2, p3) => `SET: [EXTRAFIELD ${p1} - ${p2}] = ${p3}`;
functionTemplates[81] = (p1, _, p3) => `Get SNMP ${p3} from ${p1} storing it in %snmpresult%`;
functionTemplates[82] = (p1, p2) => `Zip Files ${p1} to ${p2} storing the size in %zipsize%`;
functionTemplates[83] = (p1, p2) => `Add User ${p1} with password ${p2} storing the result in %userresult%`;
functionTemplates[84] = (p1, p2) => `TFTP Send file ${p1} to ${p2} storing the result in %tftpresult%`;
functionTemplates[85] = (p1) => `Play Wave ${p1}`;
functionTemplates[86] = () => `Renew IP Address`;
functionTemplates[87] = (p1) => `Pinging ${p1} storing the result in %pingresult%`;
functionTemplates[88] = () => `IPConfig and store the result in %ipconfigresult%`;
functionTemplates[89] = (p1) => `Nslookup ${p1} storing the result in %dnsresult%`;
functionTemplates[90] = (p1, p2) => `Write ${p2} to ${p1}`;
functionTemplates[91] = (p1, p2) => {
  const packetType = Functions[91].ParamNames[0].Values[p1];
  return `Connect to ${p2} ${packetType} storing the result in %portresult%`;
};
functionTemplates[92] = (p1, p2, p3) => `FOR each ${p3} in ${p2} run script ${p1}`;
functionTemplates[93] = (p1, p2) => `Email ${p1} Report TO: ${p2}`;
functionTemplates[94] = (p1) => `Print ${p1} Report on the Labtech Servers Default Printer`;
functionTemplates[96] = (p1) => `Clear Script State for ${p1}`;
functionTemplates[97] = (p1, p2, p3) => {
  if (p2 !== '') {
    return `SET ALL State Variables = ${p3} for computer ${p1}`;
  }
  return `SET: [STATE ${p2}] = ${p3} for computer ${p1}`;
};
functionTemplates[98] = (p1, p2, p3) => {
  let temp = p3;
  if (!('' + p3).startsWith('@') && !('' + p3).startsWith('%')) {
    temp = `@${p3}@`;
  }
  if (p2 !== 0 && p2 !== '') {
    return `GET ${p3} = ALL State Variables for computer ${p1}`;
  }
  return `GET ${p3} = [STATE ${temp}] for computer ${p1}`;
};
functionTemplates[99] = (p1, p2) => {
  if (p2 !== 0 && p2 !== '') {
    return `Clear Script Stat ${p2} for ${p1}`;
  }
  return `Clear All Script Stats for ${p1}`;
};
functionTemplates[100] = (p1, p2) => `SET: [STAT ${p2}] = [STAT ${p2}]+1 for computer ${p1}`;
functionTemplates[101] = (p1, p2, p3, p4) => {
  let result = '%mathresult%';
  if (p4 !== '') {
    result = `@${('' + p4).replace('@', '')}@`;
  }
  switch (p2) {
    case 0:
      return `SET: ${result} = ${p1} + ${p3}`;
    case 1:
      return `SET: ${result} = ${p1} - ${p3}`;
    case 2:
      return `SET: ${result} = ${p1} * ${p3}`;
    case 3:
      return `SET: ${result} = ${p1} \\ ${p3}`;
    case 4:
      return `SET: ${result} = ${p1} DIV ${p3}`;
    case 5:
      return `SET: ${result} = ${p1} MOD ${p3}`;
    case 6:
      return `SET: ${result} = ${p1} POWER OF ${p3}`;
    case 7:
      return `SET: ${result} = ${p1} ABS(${p3})`;
    case 8:
      return `SET: ${result} = ${p1} MAX(${p1}, ${p3})`;
    case 9:
      return `SET: ${result} = ${p1} MIN(${p1}, ${p3})`;
    default:
      return `SET: `;

  }
};
functionTemplates[102] = (p1, p2, p3) => {
  let result = '%regexresult%';
  if (p3 !== '') {
    result = `@${('' + p3).replace('@', '')}@`;
  }
  return `SET: ${result} = MATCH(${p1} PATTERN ${p2})`;
};
functionTemplates[103] = (p1, p2, p3) => `GET: @${p3}@ = [EXTRAFIELD ${p1}]`;
functionTemplates[104] = (p1, p2) => `Combine Ticket ${p2} into ${p1}`;
functionTemplates[105] = (p1, p2) => `Finish Ticket ${p1} to ${p2}`;
functionTemplates[106] = (p1, p2, p3) => {
  if (p2 === 1) {
    return `Unstall Ticket ${p1}`;
  }
  if (new Date(p3).toString() !== 'Invalid Date') {
    return `Stall Ticket ${p1} till ${p3}`;
  }
  return `Stall Ticket ${p1}`;
};
functionTemplates[107] = (p1, p2) => `Open Ticket ${p1} to user ${p2}`;
functionTemplates[108] = (p1, p2) => `Comment Ticket ${p1} to user ${p2}`;
functionTemplates[109] = (p1, p2, p3) => {
  if (p2 === '') {
    return `SHELL: ${p1} and save results to @${p3}@`;
  }
  return `SHELL: ${p1} split result by ${p2} and save results to @${('' + p3).replace(p2, '@,@')}@`;
};
functionTemplates[110] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);

  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}PROCESS EXISTS ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}PROCESS EXISTS ${p1} THEN Jump to ${p2trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}PROCESS EXISTS ${p1} THEN Jump to line ${line + p2trim + 1}`;
};
functionTemplates[111] = (p1, p2, p3, p4, _5, line) => {
  const compare = Functions[111].ParamNames[1].Values[p2];
  const {negated, trimmed: p4trim} = negationCheck(p4);

  if (p4trim === '' || p4trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}[REGISTRY ${p1}] ${compare} ${p3} THEN Exit Script`;
  }
  if (!Number.isInteger(p4trim) && p4trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}[REGISTRY ${p1}] ${compare} ${p3} THEN Jump to ${p4trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}[REGISTRY ${p1}] ${compare} ${p3} THEN Jump to line ${line + 1 + p4trim}`;
};
functionTemplates[113] = (p1, p2, p3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);

  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}SERVICE RUNNING ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}SERVICE RUNNING ${p1} THEN Jump to ${p2trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}SERVICE RUNNING ${p1} THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[114] = (p1, p2, p3, _4, _5, line) => {
  const compare = Functions[114].ParamNames[1].Values[p2];
  const {negated, trimmed: p3trim} = negationCheck(p3);

  if (p3trim === 0 || p3trim === '') {
    return `IF ${negated ? 'NOT ' : ''}FILE ${compare} ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p3trim) && p3trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}FILE ${compare} ${p1} THEN Jump to ${p3trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}FILE ${compare} ${p1} THEN Jump to line ${line + 1 + p3trim}`;
};
functionTemplates[115] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}USER LOGGED IN ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}USER LOGGED IN ${p1} THEN Jump to ${p2trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}USER LOGGED IN ${p1} THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[116] = (p1, p2, p3, _4, _5, line) => {
  const {negated, trimmed: p3trim} = negationCheck(p3);

  if (p3trim === 0 || p3trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}USER RESPONSE YES TO ${p1} ON CONSOLE #${p2} THEN Exit Script`;
  }
  if (!Number.isInteger(p3trim) && p3trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}USER RESPONSE YES TO ${p1} ON CONSOLE #${p2} THEN Jump to ${p3}`;
  }
  return `IF ${negated ? 'NOT ' : ''}USER RESPONSE YES TO ${p1} ON CONSOLE #${p2} THEN Jump to line ${line + 1 +
  p3trim}`;
};
functionTemplates[117] = (p1, p2, p3, p4, _5, line) => {
  const compare = Functions[117].ParamNames[1].Values[p2];
  const {negated, trimmed: p4trim} = negationCheck(p4);
  if (p4trim === '' || p4trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}[SQL ${p1}] ${compare} ${p3} THEN Exit Script`;
  }
  if (!Number.isInteger(p4trim) && p4trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}[SQL ${p1}] ${compare} ${p3} THEN Jump to ${p4trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}[SQL ${p1}] ${compare} ${p3} THEN Jump to line ${line + 1 + p4trim}`;
};
functionTemplates[118] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}SMART ATTRIBUTE ${p1} FAILED THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}SMART ATTRIBUTE ${p1} FAILED THEN Jump to ${p2trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}SMART ATTRIBUTE ${p1} FAILED THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[119] = (p1, p2, p3, p4, p5, line) => {
  const {negated, trimmed: p4trim} = negationCheck(p4);
  if (p4trim === '' || p4trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}DRIVE STATUS BAD THEN Exit Script`;
  }
  if (!Number.isInteger(p4trim) && p4trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}DRIVE STATUS BAD THEN Jump to ${p4trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}DRIVE STATUS BAD THEN Jump to line ${line + 1 + p4trim}`;
};
functionTemplates[120] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}SOFTWARE INSTALLED ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}SOFTWARE INSTALLED ${p1} THEN Jump to ${p2trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}SOFTWARE INSTALLED ${p1} THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[121] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}PATCH INSTALLED ${('' + p1).includes('@') || ('' + p1).includes(':')
      ? `${p1}`
      : `HotFixId ${p1}`} THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}PATCH INSTALLED ${('' + p1).includes('@') || ('' + p1).includes(':')
      ? `${p1}`
      : `HotFixId ${p1}`} THEN Jump to ${p2trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}PATCH INSTALLED ${('' + p1).includes('@') || ('' + p1).includes(':')
    ? `${p1}`
    : `HotFixId ${p1}`} ${p1} THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[122] = (p1, p2, p3, p4, _, line) => {
  const {negated, trimmed: p4trim} = negationCheck(p4);
  const compare = Functions[122].ParamNames[1].Values[p2];
  if (p4trim === '' || p4trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}AUTOSTARTUP AutoDefId ${p1} ${compare} ${p3} THEN Exit Script`;
  }
  if (!Number.isInteger(p4trim) && p4trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}AUTOSTARTUP AutoDefId ${p1} ${compare} ${p3} THEN Jump to ${p4trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}AUTOSTARTUP AutoDefId ${p1} ${compare} ${p3} THEN Jump to line ${line + 1 +
  p4trim}`;
};
functionTemplates[123] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}TOOL INSTALLED ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}TOOL INSTALLED ${p1} THEN Jump to ${p2trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}TOOL INSTALLED ${p1} THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[124] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}NEW UNASSIGNED TICKET FOR CLIENT ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}NEW UNASSIGNED TICKET FOR CLIENT ${p1} THEN Jump to ${p2trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}NEW UNASSIGNED TICKET FOR CLIENT ${p1} THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[129] = (p1, _2, _3, _4, _5, line) => {
  if (('' + p1).startsWith(':')) {
    return `GOTO ${p1}`;
  }
  if (!Number.isInteger(p1) || p1 === '' || p1 === 0) {
    return `Exit Script`;
  }
  return `GOTO line ${line + 1 + p1}`;
};
functionTemplates[131] = (p1, p2, p3, _4, _5, line) => {
  const {negated, trimmed: p3trim} = negationCheck(p3);
  if (p3trim === '' || p3trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}Member of GroupId ${p1} THEN Exit Script`;
  }
  if (!Number.isInteger(p3trim) && p3trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}Member of GroupId ${p1} THEN Jump to ${p3trim}}`;
  }
  return `IF ${negated ? 'NOT ' : ''}Member of GroupId ${p1} THEN Jump to line ${line + 1 + p3trim}`;
};
functionTemplates[253] = functionTemplates[131];
functionTemplates[255] = functionTemplates[131];
functionTemplates[132] = (p1) => {
  if (p1 === 0) {
    return `HotFix Install All Missing Patches`;
  }
  if (p1 === 1) {
    return `HotFix Install All Missing Security Patches`;
  }
  if (p1 === 2) {
    return `HotFix Install All Missing Approved Patches`;
  }
  return `HotFix Install All`;
};
functionTemplates[133] = (p1, p2) => {
  const action = Functions[133].ParamNames[0].Values[p1];
  return `Windows Update Setting ${action} to: ${p2}`;
};
functionTemplates[134] = (p1, _2, _3, p4) => `Add ${p4} Minutes to Ticket #${p1}`;
functionTemplates[135] = (p1) => `POWERSHELL: ${p1} and store the result in %powershellresult%`;
functionTemplates[136] = (p1) => `Approve All Hotfixes for GroupId ${p1}`;
functionTemplates[137] = (p1, p2, p3) => `Record Stat #${p1 + 1} AS ${p2} For ${p3}`;
functionTemplates[138] = (p1, p2) => `Send Message MessageId ${p1} To ComputerId ${p2}`;
functionTemplates[139] = (p1) => {
  if (('' + p1).startsWith(':')) {
    return `${p1} - Label`;
  }
  return `Note: ${p1}`;
};
functionTemplates[140] = (p1, p2, p3, p4, _5, line) => {
  const {negated, trimmed: p3trim} = negationCheck(p3);
  if (p2 === 0 && p3trim === '' || p3trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}Ticket ${p1} Exists THEN Exit Script`;
  }
  if (p2 === 0 && !Number.isInteger(p3trim) && p3trim !== 0) {
    return `IF ${negated ? 'NOT ' : ''}Ticket ${p1} Exists THEN Jump to ${p3trim}`;
  }
  if (p2 === 0) {
    return `IF ${negated ? 'NOT ' : ''}Ticket ${p1} Exists THEN Jump to line ${line + 1 + p3trim}`;
  }
  if (p3trim === '' || p3trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}${p1} Ticket Status Equals TicketStatusId ${p2} THEN Exit Script`;
  }
  if (!Number.isInteger(p3trim) && p3trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}${p1} Ticket Status Equals TicketStatusId ${p2} THEN Jump to ${p3trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}${p1} Ticket Status Equals TicketStatusId ${p2} THEN Jump to line ${line + 1 +
  p3trim}`;
};
functionTemplates[142] = (p1) => `SET %ticketreadingview% = TicketReadingView(#${p1})`;
functionTemplates[143] = (p1, p2, p3, p4, p5) => {
  let temp = `Update Ticket #${p5} set`;
  if (p1 !== '') {
    temp += ` Email=${p1}`;
  }
  if (p2 !== '') {
    temp += ` Priority=${p2}`;
  }
  if (p3 !== '') {
    temp += ` Subject=${p3}`;
  }
  if (p4 !== '') {
    temp += ` Category=${p4}`;
  }
  return temp;
};
functionTemplates[144] = (p1) => `Elevate Ticket #${p1}`;
functionTemplates[146] = (p1, p2) => `FOR each row in ${p1} run script ${p2}`;
functionTemplates[147] = (p1) => {
  const command = Functions[147].ParamNames[0].Values[p1];
  return `Probe Control - ${command}`;
};
functionTemplates[150] = (p1, p2) => {
  if (p2 === 0) {
    return `Set Service ${p1} to AutoStart`;
  }
  if (p2 === 1) {
    return `Set Service ${p1} to Manual`;
  }
  if (p2 === 2) {
    return `Set Service ${p1} to Disabled`;
  }
  return `Set Service`;
};
functionTemplates[151] = (p1, p2, p3, p4) => `Set SNMP OID ${p3} to ${p4} for ${p1} using community ${p2}`;
functionTemplates[153] = (p1) => {
  if (('' + p1).includes('@') || ('' + p1).includes(':')) {
    return `HotFix Install ${p1}`;
  }
  return `HotFix Install HotFixId ${p1}`;
};
functionTemplates[154] = (p1) => `Create Folder: ${p1}`;
functionTemplates[155] = (p1) => `Create Folder as Admin: ${p1}`;
functionTemplates[156] = (p1, p2) => `Create Folder as ${p2}: ${p1}`;
functionTemplates[157] = (p1, p2) => `Move Folder: ${p1} to ${p2}`;
functionTemplates[158] = (p1, p2) => `Move Folder as Admin: ${p1} to ${p2}`;
functionTemplates[159] = (p1, p2, p3) => `Move Folder as ${p3}: ${p1} to ${p2}`;
functionTemplates[160] = (p1) => `Delete Folder: ${p1}`;
functionTemplates[161] = (p1) => `Delete Folder as Admin: ${p1}`;
functionTemplates[162] = (p1, p2) => `Delete Folder as ${p2}: ${p1}`;
functionTemplates[163] = (p1) => `Delete File as Admin: ${p1}`;
functionTemplates[164] = (p1, p2) => `Delete File as ${p2}: ${p1}`;
functionTemplates[165] = (p1, p2) => `Rename File as Admin: ${p1} to ${p2}`;
functionTemplates[166] = (p1, p2, p3) => `Rename File as ${p3}: ${p1} to ${p2}`;
functionTemplates[167] = (p1, p2) => `Copy File as Admin: ${p1} to ${p2}`;
functionTemplates[168] = (p1, p2, p3) => `Copy File as ${p3}: ${p1} to ${p2}`;
functionTemplates[169] = (p1, p2) => `Console Shell: ${p1} on ${p2}`;
functionTemplates[170] = (p1, p2) => `Console Registry Read: ${p1} on ${p2}`;
functionTemplates[171] = (p1, p2, p3, p4, p5) => {
  let p5trim = p5;
  if (p5 !== '') {
    p5trim = `@${('' + p5).replace('@', '')}@`;
  }
  switch (p1) {
    case 0:
      return `SET: ${p5trim} = LEFT(${p2},${p3})`;
    case 1:
      return `SET: ${p5trim} = RIGHT(${p2},${p3})`;
    case 2:
      return `SET: ${p5trim} = MID(${p2},${p4},${p3})`;
    case 3:
      return `SET: ${p5trim} = UPPER(${p2})`;
    case 4:
      return `SET: ${p5trim} = LOWER(${p2})`;
    case 5:
      return `SET: ${p5trim} = REVERSE(${p2})`;
    case 6:
      return `SET: ${p5trim} = TRIMSPACE(${p2})`;
    case 7:
      return `SET: ${p5trim} = INDEXOF(${p2},${p3})`;
    case 8:
      return `SET: ${p5trim} = LASTINDEXOF(${p2},${p3})`;
    case 9:
      return `SET: ${p5trim} = REPLACE(${p2},${p4},${p3})`;
    case 10:
      return `SET: ${p5trim} = INSERT(${p2},${p3},${p4})`;
    case 11:
      return `SET: ${p5trim} = URLENCODE(${p2})`;
    case 12:
      return `SET: ${p5trim} = URLDECODE(${p2},)`;
    case 13:
      return `SET: ${p5trim} = HTMLENCODE(${p2})`;
    case 14:
      return `SET: ${p5trim} = HTMLDECODE(${p2})`;
    case 15:
      return `SET: ${p5trim} = MYSQLENCODE(${p2})`;
    case 16:
      return `SET: ${p5trim} = ENCRYPT(${p2},${p3})`;
    case 17:
      return `SET: ${p5trim} = DECRYPT(${p2},${p3})`;
    case 18:
      return `SET: ${p5trim} = LTPIPEENCODE(${p2})`;
    case 19:
      return `SET: ${p5trim} = LTPIPEDECODE(${p2})`;
    case 20:
      return `SET: ${p5trim} = ENCRYPTv2(${p2},${p3})`;
    case 21:
      return `SET: ${p5trim} = DECRYPTv2(${p2},${p3})`;
    case 22:
      return `SET: ${p5trim} = SPLIT(${p2},${p3},${p4})`;
    default:
      return `SET: `;
  }
};
functionTemplates[172] = (p1) => `SET: %sqlresult% = [${p1}]`;
functionTemplates[173] = (p1, p2, p3) => `Open Telnet To ${p1}, Port: ${p2}, Timeout: ${p3}`;
functionTemplates[174] = (p1, p2) => `Telnet send to ${p2} unencrypted to Telnet session ID: ${p1}`;
functionTemplates[175] = (p1, p2) => `Telnet send to ${p2} encrypted to Telnet session ID: ${p1}`;
functionTemplates[176] = (p1) => `Close Telnet session ID: ${p1}`;
functionTemplates[177] = (p1, p2, p3) => `Open SSH to ${p1}, Port: ${p2}, Timeout: ${p3}`;
functionTemplates[178] = (p1, p2) => `SSH send ${p2} unencrypted to SSH session ID: ${p1}`;
functionTemplates[179] = (p1, p2) => `SSH send ${p2} encrypted to SSH session ID: ${p1}`;
functionTemplates[180] = (p1) => `Close SSH session ID: ${p1}`;
functionTemplates[181] = (p1, p2) => `LabTech server shell execute ${p1} ${p2}`;
functionTemplates[182] = (p1, p2) => `Download ${p1} to LabTech Server, save as ${p2}`;
functionTemplates[183] = (_1, _2, _3, _4, p5) => `LabTech Server Call Alert Template ${p5}`;
functionTemplates[184] = (_1, p2) => `MatchGoto: ${p2}`;
functionTemplates[185] = (p1, p2, p3) => {
  if (p1 === 0) {
    return `BITS Download ${('' + p2).replace('\\', '/')} saved to ${p3}`;
  }
  return `BITS Status Check: ${p2}`;
};
functionTemplates[186] = (p1) => `Virus Scan: ${p1}`;
functionTemplates[195] = (p1) => `LTServer delete alert ${p1}`;
functionTemplates[196] = (p1, p2) => {
  if (('' + p2).length > 0) {
    return `Set %sqldataset% = SQL Get DataSet: ${p1} using ${p2}`;
  }
  return `Set %sqldataset% = SQL Get DataSet: ${p1}`;
};
functionTemplates[197] = (p1, p2) => `Fetch row ${p2} from dataset ${p1}`;
functionTemplates[199] = (_1, p2, p3) => `SET: @${('' + p3).replace('@', '')}@ = Script Stat (${p2})`;
functionTemplates[200] = (p1, p2) => `DOWNLOAD Force: /Labtech/Transfer/${('' + p1).replace('\\', '/')} saved to ${p2}`;
functionTemplates[201] = (p1, p2, p3) => {
  if (p3 === 0) {
    return `DOWNLOAD Force: ${('' + p1).replace('\\', '/')} saved to ${p2} and wait until finish.`;
  }
  return `DOWNLOAD Force: ${('' + p1).replace('\\', '/')} saved to ${p2} and return immediately.`;
};
functionTemplates[202] = (p1, _2, _3, p4) => `Attach File: ${p4} to ticket #${p1}`;
functionTemplates[203] = (p1) => `PowerShell as Admin ${p1}`;
functionTemplates[211] = (p1) => `Raise Plugin alert for ${p1}`;
functionTemplates[212] = (p1, p2, p3, p4, _, line) => {
  const {negated, trimmed: p4trim} = negationCheck(p4);
  let p2interp = p2;
  let p3interp = p3;
  switch (p4trim) {
    case 0:
      p2interp = `Created(${p2})`;
      p3interp = `Created(${p3})`;
      break;
    case 1:
      p2interp = `Modified(${p2})`;
      p3interp = `Modified(${p3})`;
      break;
    case 2:
      p2interp = `Accessed(${p2})`;
      p3interp = `Accessed(${p3})`;
      break;
    case 3:
      p2interp = `Version(${p2})`;
      p3interp = `Version(${p3})`;
      break;
    case 4:
      p2interp = `Contents(${p2})`;
      p3interp = `Contents(${p3})`;
      break;
    case 5:
      p2interp = `Size(${p2})`;
      p3interp = `Size(${p3})`;
      break;
    case 6:
      p2interp = `MD5(${p2})`;
      p3interp = `MD5(${p3})`;
      break;
  }

  if (p4trim === '' || p4trim === 0) {
    return `IF ${negated ? 'NOT ' : ''} ${p2interp} = ${p3interp} THEN Exit Script`;
  }
  if (!Number.isInteger(p4trim) && p4trim !== '') {
    return `IF ${negated ? 'NOT ' : ''} ${p2interp} = ${p3interp} THEN Jump to ${p4trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''} ${p2interp} = ${p3interp} THEN Jump to line ${line + 1 + p4trim}`;
};
functionTemplates[214] = (p1) => `Bulk Registry Write to key ${p1}`;
functionTemplates[217] = (p1, p2) => `Set @${('' + p2).replace('@', '')}@ = TemplateProperty(${p1})`;
functionTemplates[218] = () => `Retrieve License into %obtainedlicense% with an ID of %obtainedlicenseid%`;
functionTemplates[219] = (p1) => `Deactivate License ID: ${p1}`;
functionTemplates[223] = (p1) => `Plugin Function PluginId ${p1}`;
functionTemplates[224] = (p1, p2) => `Plugin Command PluginId ${p1} Params: ${p2}`;
functionTemplates[225] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}PluginId ${p1} Plugin Enabled THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF ${negated ? 'NOT ' : ''}PluginId ${p1} Plugin Enabled THEN Jump to ${p2trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}PluginId ${p1} Plugin Enabled THEN Jump to line ${line + 1 + p2trim}`;
};
functionTemplates[226] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''} SvcCommandId ${p1} Agent Command Available THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim === '') {
    return `IF ${negated ? 'NOT ' : ''} SvcCommandId ${p1} Agent Command Available THEN Jump to ${p2trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''} SvcCommandId ${p1} Agent Command Available THEN Jump to line ${p2trim + 1 +
  line}`;
};
functionTemplates[227] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF ${negated ? 'NOT ' : ''}FunctionId ${p1} Server Function Available THEN Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim === '') {
    return `IF ${negated ? 'NOT ' : ''}FunctionId ${p1} Server Function Available THEN Jump to ${p2trim}`;
  }
  return `IF ${negated ? 'NOT ' : ''}FunctionId ${p1} Server Function Available THEN Jump to line ${p2trim + 1 + line}`;
};
functionTemplates[228] = (p1, p2) => `Set Maintenance Mode for ${p2} Minutes on ${p1}`;
functionTemplates[229] = (p1) => `Clear Maintenance Mode for ${p1}`;
functionTemplates[230] = (p1, p2) => `Set @${('' + p2).replace('@', '')}@ = AttachmentID(${p1})`;
functionTemplates[231] = () => `Generate Random Password INTO %randompassword%`;
functionTemplates[235] = (p1, _2, _3, p4, p5, line) => {
  let scriptType = p1;
  switch (p1) {
    case 0:
      scriptType = 'PowerShell Script';
      break;
    case 1:
      scriptType = 'VBScript';
      break;
    case 2:
      scriptType = 'Batch';
      break;
    case 3:
      scriptType = 'PowerShell Bypass';
      break;
  }

  return `Execute ${scriptType} as ${p4 !== 0 ? 'Admin' : 'Local'} and store result in: @${p5}@`;
};
functionTemplates[237] = (p1, p2, _3, _4, _5, line) => {
  const {negated, trimmed: p2trim} = negationCheck(p2);
  if (p2trim === '' || p2trim === 0) {
    return `IF Role ${negated ? 'NOT ' : ''}detected - ${p1} - Then Exit Script`;
  }
  if (!Number.isInteger(p2trim) && p2trim !== '') {
    return `IF Role ${negated ? 'NOT ' : ''}detected - ${p1} - Then Jump to ${p2trim}`;
  }

  return `IF Role ${negated ? 'NOT ' : ''}detected - ${p1} - Then Jump to ${line + 1 + p2trim}`;
};
functionTemplates[238] = (p1) => `Call ${p1}`;
functionTemplates[239] = () => `Return from Call`;
functionTemplates[240] = () => `Checking connectivity of target device & storing the result in %pingresult%`;
functionTemplates[241] = (p1, p2) => `Get SNMP OID ${p1} and storing it in ${p2}`;
functionTemplates[242] = (p1, _2, p3) => `Set SNMP OID ${p1} to ${p3}`;
functionTemplates[243] = (p1, p2) => `Open SSH to network device on Port: ${p1}, Timeout: ${p2}`;
functionTemplates[244] = (p1) => `Close SSH session ID: ${p1}`;
functionTemplates[245] = (p1, p2) => `SSH send "${p2}" unencrypted to SSH session id: ${p1}`;
functionTemplates[246] = (p1, p2) => `SSH send "${p2}" encrypted to SSH session id: ${p1}`;
functionTemplates[247] = (p1, p2) => `Open Telnet to network device on Port: ${p1}, Timeout: ${p2}`;
functionTemplates[248] = (p1) => `Close Telnet session ID: ${p1}`;
functionTemplates[249] = (p1, p2) => `Telnet send "${p2}" unencrypted to SSH session id: ${p1}`;
functionTemplates[250] = (p1, p2) => `Telnet send "${p2}" encrypted to SSH session id: ${p1}`;
functionTemplates[251] = (p1) => `FOR each computer associated with Contact run script ScriptId ${p1}`;
functionTemplates[252] = (p1, p2, p3, p4) => {
  if (Number.isInteger(p1) && Number.isInteger(p2)) {
    return `Create New Ticket for ClientId ${p1}\\NetworkDeviceId ${p2} Email: ${p3} Subject: ${p4}`;
  }
  if (Number.isInteger(p1)) {
    return `Create New Ticket for ClientId ${p1}\\${p2} Email: ${p3} Subject: ${p4}`;
  }
  if (Number.isInteger(p2)) {
    return `Create New Ticket for ${p1}\\NetworkDeviceId ${p2} Email: ${p3} Subject: ${p4}`;
  }
  return `Create New Ticket for ${p1}\\${p2} Email: ${p3} Subject: ${p4}`;
};

/**
 * @type {getFunctionLineDescription}
 */
module.exports = {getFunctionLineDescription, functionTemplates};
