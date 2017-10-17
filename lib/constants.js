/**
 * Created by kgrube on 10/13/2017
 */

/**
 * @typedef {object} Constants
 * @type {{OsLimits, Actions, Continues, FunctionFlags, FunctionTypes, Functions}}
 */

/**
 *
 * @type {Constants}
 */
const constants = {
  OsLimits: {
    '0': 'All Operating Systems',
    '1': 'Windows 2000',
    '2': 'Windows NT4',
    '3': 'Windows XP',
    '4': 'Windows Vista',
    '5': 'Windows 2000 Server',
    '6': 'Windows 2003 Server',
    '7': 'Windows 32bit',
    '8': 'Windows 64bit',
    '9': 'XP Class (XP or 2003)',
    '10': 'Vista Class (Vista/2008 or 7)',
    '11': 'Windows 2008',
    '12': 'Windows 7',
    '13': 'Macintosh',
    '14': 'Linux',
    '15': 'Windows Mobile',
    '16': 'Non Windows OS',
    '17': 'Windows OS',
    '18': 'Windows Workstation',
    '19': 'Windows Server',
    '20': 'Windows SBS',
    '21': 'Windows 8 Class (2012 or 8)',
    '22': 'Windows 8',
    '23': 'Windows 2012 Server',
    '24': 'Function disabled',
    '25': 'Windows 2008 R2',
    '26': 'Windows 2012 Server R2',
    '27': 'Windows 10 Class (2016 or 10)',
    '28': 'Windows 10',
    '29': 'Windows 2016 Server',
    '-2147483648': 'Function disabled',
    '-2147483647': 'Function disabled - Previously Windows 2000',
    '-2147483646': 'Function disabled - Previously Windows NT4',
    '-2147483645': 'Function disabled - Previously Windows XP',
    '-2147483644': 'Function disabled - Previously Windows Vista',
    '-2147483643': 'Function disabled - Previously Windows 2000 Server',
    '-2147483642': 'Function disabled - Previously Windows 2003 Server',
    '-2147483641': 'Function disabled - Previously Windows 32bit',
    '-2147483640': 'Function disabled - Previously Windows 64bit',
    '-2147483639': 'Function disabled - Previously XP Class (XP or 2003)',
    '-2147483638': 'Function disabled - Previously Vista Class (Vista/2008 or 7)',
    '-2147483637': 'Function disabled - Previously Windows 2008',
    '-2147483636': 'Function disabled - Previously Windows 7',
    '-2147483635': 'Function disabled - Previously Macintosh',
    '-2147483634': 'Function disabled - Previously Linux',
    '-2147483633': 'Function disabled - Previously Windows Mobile',
    '-2147483632': 'Function disabled - Previously Non Windows OS',
    '-2147483631': 'Function disabled - Previously Windows OS',
    '-2147483630': 'Function disabled - Previously Windows Workstation',
    '-2147483629': 'Function disabled - Previously Windows Server',
    '-2147483628': 'Function disabled - Previously Windows SBS',
    '-2147483627': 'Function disabled - Previously Windows 8 Class (2012 or 8)',
    '-2147483626': 'Function disabled - Previously Windows 8',
    '-2147483625': 'Function disabled - Previously Windows 2012 Server',
    '-2147483624': 'Function disabled - Previously Function disabled',
    '-2147483623': 'Function disabled - Previously Windows 2008 R2',
    '-2147483622': 'Function disabled - Previously Windows 2012 Server R2',
    '-2147483621': 'Function disabled - Previously Windows 10 Class (2016 or 10)',
    '-2147483620': 'Function disabled - Previously Windows 10',
    '-2147483619': 'Function disabled - Previously Windows 2016 Server',
  },
  Actions: {
    '1': 'InitialCheck',
    '2': 'ThenSection',
    '3': 'ElseSection',
  },
  Continues: {
    '0': 'Exit on failure',
    '1': 'Continue on failure',
  },
  FunctionFlags: {
    '1': 'Global',
    '2': 'Computer',
    '4': 'Network',
    '8': 'Mobile',
    '16': 'Contact',
  },
  FunctionTypes: {
    '1': 'If',
    '2': 'Function',
  },
  Functions: {
    '1': {
      FunctionId: 1,
      Name: 'True',
      Parameters: 0,
      FunctionType: 1,
      ParamNames: [],
      Description: 'Always runs the Then part of the Script.',
      FunctionFlag: 1,
    },
    '2': {
      FunctionId: 2,
      Name: 'LabTech Command',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Numerical command to execute.',
          ParamName: 'Command',
        },
        {
          Description: 'Parameters needed for the command.',
          ParamName: 'Parameters',
        },
        {
          Description: 'Comma separated list of Group IDs, must be blank if specifying a value in the ID field below.',
          ParamName: 'Group List',
        },
        {
          Description: 'ID of object to run against.',
          ParamName: 'ID',
        },
        {
          ParamName: 'ID Type',
          Values: [
            'Computer',
            'Location',
            'Client',
          ],
          Description: 'Type of object of the above ID.',
        },
      ],
      Description: 'Runs an internal LabTech command.',
      FunctionFlag: 2,
    },
    '3': {
      FunctionId: 3,
      Name: 'Process Exists',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Name or ID of Process to Check.',
          ParamName: 'Process Name',
        },
      ],
      Description: 'Runs the THEN if the process is running and sets the %processid% variable.',
      FunctionFlag: 2,
    },
    '4': {
      FunctionId: 4,
      Name: 'Registry Check',
      Parameters: 3,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'End the Value name with a \\ to indicate a key rather than a value.',
          ParamName: 'Registry Key',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: 'For keys, Exists and Not Exists are the only applicable choices.',
        },
        {
          Description: 'Leave blank for Exists and Not Exists.',
          ParamName: 'To',
        },
      ],
      Description: 'Tests the registry value and sets the %registryresult% variable.',
      FunctionFlag: 2,
    },
    '5': {
      FunctionId: 5,
      Name: 'Variable Check',
      Parameters: 3,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Enter Variable Name with the @ symbols around it.',
          ParamName: 'Test the Variable\'s value',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
            'In',
            'Not In',
          ],
          Description: 'Exists is true if anything is returned.',
        },
        {
          Description: 'Value to compare to.',
          ParamName: 'To',
        },
      ],
      Description: 'Runs the THEN if the condition is true.',
      FunctionFlag: 1,
    },
    '6': {
      FunctionId: 6,
      Name: 'Service is Running',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          Description: '',
          ParamName: 'Service Name',
        },
      ],
      Description: 'Runs the THEN if the Service is Running and sets the %servicename% variable.',
      FunctionFlag: 2,
    },
    '7': {
      FunctionId: 7,
      Name: 'File Check',
      Parameters: 2,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Full path to the file to test. To indicate a Directory end the path with a Slash(\\)',
          ParamName: 'File Path',
        },
        {
          ParamName: '',
          Values: [
            'Exists',
            'Not Exists',
          ],
          Description: 'Returns true is the condition is met.',
        },
      ],
      Description: 'Checks if the file or Directory Exists or does Not Exist.',
      FunctionFlag: 2,
    },
    '8': {
      FunctionId: 8,
      Name: 'Console Logged On',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Check is the specific user is logged on, leave blank for anyone.',
          ParamName: 'Username',
        },
      ],
      Description: 'Return True if user is logged on and sets the %consolenumber% variable.',
      FunctionFlag: 2,
    },
    '9': {
      FunctionId: 9,
      Name: 'User Response',
      Parameters: 2,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'The question to ask.',
          ParamName: 'Question',
        },
        {
          Description: 'Console Number to ask the question on, get this from a previous script. ',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Asks the user a Yes or No Question and runs the Then part if Yes.',
      FunctionFlag: 2,
    },
    '10': {
      FunctionId: 10,
      Name: 'INI File Check',
      Parameters: 5,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Full path to the INI file.',
          ParamName: 'File Path',
        },
        {
          Description: 'Section of the INI File.',
          ParamName: 'Section',
        },
        {
          Description: 'Key to read.',
          ParamName: 'Key',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: 'Exists returns true if key has any data.',
        },
        {
          ParamName: 'To',
        },
      ],
      Description: 'Tests a Value in an INI File and sets the %iniresult% variable.',
      FunctionFlag: 2,
    },
    '11': {
      FunctionId: 11,
      Name: 'SQL Data Check',
      Parameters: 4,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Statement must return 1 value.',
          ParamName: 'Sql Statement',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: 'Logical Operator.',
        },
        {
          Description: 'Value to compare.',
          ParamName: 'To',
        },
        {
          Description: 'Leave blank to use the LabTech database.',
          ParamName: 'ODBC Connection',
        },
      ],
      Description: 'Tests a Value from the Database and sets %sqlresult% variable.',
      FunctionFlag: 1,
    },
    '12': {
      FunctionId: 12,
      Name: 'Process Kill',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The process name or number to end.',
          ParamName: 'Process Name',
        },
      ],
      Description: 'End process on remote computer.',
      FunctionFlag: 2,
    },
    '13': {
      FunctionId: 13,
      Name: 'File Delete',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path of file to delete.',
          ParamName: 'File Path',
        },
      ],
      Description: 'Delete file on remote computer.',
      FunctionFlag: 2,
    },
    '14': {
      FunctionId: 14,
      Name: 'Registry Delete Key',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Key or value to be deleted',
          ParamName: 'Registry Key',
        },
      ],
      Description: 'Deletes a registry key or value.',
      FunctionFlag: 2,
    },
    '15': {
      FunctionId: 15,
      Name: 'Process Execute',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to executable.',
          ParamName: 'File',
        },
        {
          Description: 'Parameters to pass to the executable.',
          ParamName: 'Arguments',
        },
        {
          ParamName: '',
          Values: [
            'Wait for Process',
            'Return Immediately',
          ],
          Description: 'Wait for process to end before returning.',
        },
      ],
      Description: 'Run program in the background on remote computer.',
      FunctionFlag: 2,
    },
    '16': {
      FunctionId: 16,
      Name: 'Shell',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Commands to execute',
          ParamName: 'Command',
        },
      ],
      Description: 'Execute shell commands in the background, using CMD.exe to run them.',
      FunctionFlag: 2,
    },
    '17': {
      FunctionId: 17,
      Name: 'Script Run',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Script ID',
          Values: [
            'Select CONVERT(CONCAT(ifnull(CONCAT(f.Name,\'\\\\\'),\'\'),ifnull(CONCAT(s.Name,\'\\\\\'),\'\'),c.ScriptName,CHAR(0),c.scriptid) using latin1) FROM LT_scripts c LEFT join scriptfolders s on s.folderid=c.folderid left join scriptfolders f on f.folderid=s.parentid ORDER BY CONCAT((CASE WHEN f.name IS NULL THEN \'\' ELSE f.name END),s.name,c.ScriptName)',
          ],
          Description: 'Choose script to run.',
        },
        {
          Description: 'Leave blank or enter zero to run script as procedure, otherwise script will be scheduled to run the number of minutes entered.',
          ParamName: 'Delay',
        },
      ],
      Description: 'Start a new script, all variables are passed to new script. If script fails then step will fail.',
      FunctionFlag: 2,
    },
    '18': {
      FunctionId: 18,
      Name: 'File Upload',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to the file to send.',
          ParamName: 'File Path',
        },
      ],
      Description: 'Send file from the remote computer to your LabTech server and save it in LTShare\\Uploads. Returns %uploadedfile% with the local path to the file.',
      FunctionFlag: 2,
    },
    '19': {
      FunctionId: 19,
      Name: 'File Download URL',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'URL to the file that is downloaded, urlencode any strange characters.',
          ParamName: 'URL',
        },
        {
          Description: 'Full path to the file to save the URL as including file name.',
          ParamName: 'Local File',
        },
        {
          ParamName: '',
          Values: [
            'Wait Until Finished',
            'Return Now',
          ],
          Description: 'Wait for the download if you need the file in the next steps.',
        },
      ],
      Description: 'Download file from external site and save it to a local file.',
      FunctionFlag: 2,
    },
    '20': {
      FunctionId: 20,
      Name: 'Variable Set',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Set Type',
          Values: [
            'Registry',
            'Constant',
            'Current ComputerID',
            'Current ClientID',
            'Current LocationID',
            'Current Console Number',
            'Temp Directory',
            'File Contents',
            'File Date',
            'File Version',
            'File Size',
            'SQL Query',
            'All Local Variables',
            'Properties',
            'Reload Computer Variables',
            'Split NameValue Parameter',
            'Get Virus Scanner Variables',
            'Expand on Agent',
            'File MD5 Hash',
          ],
          Description: 'What type of value to use, some require parameters',
        },
        {
          Description: 'Enter required parameters',
          ParamName: 'Parameter',
        },
        {
          Description: 'Name of variable to set, use @variablename@ in future parameters. ',
          ParamName: 'Variable Name',
        },
      ],
      Description: 'Set a script variable.',
      FunctionFlag: 1,
    },
    '21': {
      FunctionId: 21,
      Name: 'Script Sleep',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Number of seconds to wait.',
          ParamName: 'Seconds',
        },
      ],
      Description: 'Pause the script and wait a number of seconds.',
      FunctionFlag: 1,
    },
    '22': {
      FunctionId: 22,
      Name: 'Reboot',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Reboot the computer using the LabTech template settings.',
      FunctionFlag: 2,
    },
    '23': {
      FunctionId: 23,
      Name: 'File Rename',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path of file to move\\rename.',
          ParamName: 'File Path',
        },
        {
          Description: 'Full path to the new file.',
          ParamName: 'New Path',
        },
      ],
      Description: 'Rename or move file on the remote computer.',
      FunctionFlag: 2,
    },
    '24': {
      FunctionId: 24,
      Name: 'Email',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Address to send email to, separate multiple addresses with a semi-colon(;)',
          ParamName: 'To',
        },
        {
          Description: 'Subject of email.',
          ParamName: 'Subject',
        },
        {
          Description: 'Body of message.',
          ParamName: 'Body',
        },
        {
          Description: 'Path to File to attach to email or List of Attachment IDs, Leave Empty for no Attachment',
          ParamName: 'File Path',
        },
      ],
      Description: 'Send an email message from the LabTech Server.',
      FunctionFlag: 1,
    },
    '25': {
      FunctionId: 25,
      Name: 'Console Show Message',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The message to display on the desktop.',
          ParamName: 'Message',
        },
        {
          Description: 'The console number to display on, use %consolenumber% obtained from IF User Logged on.',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Popup message on user\'s desktop, User must be logged on, Use IF Logged On to Test.',
      FunctionFlag: 2,
    },
    '26': {
      FunctionId: 26,
      Name: 'Console Open Browser',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The address the browser should display.',
          ParamName: 'URL',
        },
        {
          Description: 'The console number we should display this on, use %consolenumber% when IF logged on.',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Open the users Internet Explorer to the specified address, User must be logged on, Use IF Logged On to Test.',
      FunctionFlag: 2,
    },
    '27': {
      FunctionId: 27,
      Name: 'Registry Set Value',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Registry Key to write to',
          ParamName: 'Registry Value',
        },
        {
          Description: 'The data to write.',
          ParamName: 'Data',
        },
        {
          ParamName: 'Data Type',
          Values: [
            'Reg_String',
            'Reg_Binary',
            'Reg_DWORD',
            'Reg_Multi_String',
            'Reg_QWORD',
            'Reg_Ex_String',
          ],
          Description: 'The type of data to write.',
        },
      ],
      Description: 'Write a Registry Value',
      FunctionFlag: 2,
    },
    '28': {
      FunctionId: 28,
      Name: 'File Download',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Local File',
          Values: [
            'Select Name From ServerFiles Order By Name~1',
          ],
          Description: 'Local file to send, must exist in the LTShare\\Transfer directory.  (IIS blocks some transfer of some files like *.config, *.vb, *.licx... by default)',
        },
        {
          Description: 'The full path to file destination including file name, without quotes.',
          ParamName: 'Destination Path',
        },
      ],
      Description: 'Transfers a file from the LabTech server and saves it to the local computer.',
      FunctionFlag: 2,
    },
    '29': {
      FunctionId: 29,
      Name: 'Script Log Message',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Message to write to the script log.',
          ParamName: 'Message',
        },
      ],
      Description: 'Writes an informational entry to the script log.',
      FunctionFlag: 1,
    },
    '30': {
      FunctionId: 30,
      Name: 'Console Logoff User',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Console number to log off, use %consolenumber% when IF logged on.',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Log the console and user off, User must be logged on, Use IF Logged On to Test.',
      FunctionFlag: 2,
    },
    '31': {
      FunctionId: 31,
      Name: 'LabTech FasTalk',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Use 1 for On, 00 for Off or an IP address to send a network packet.',
          ParamName: 'Control',
        },
      ],
      Description: 'Toggle FasTalk Off\\On or send FasTalk packet across network.',
      FunctionFlag: 2,
    },
    '32': {
      FunctionId: 32,
      Name: 'Printer Set Default',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Lookup the exact name of the printer in LabTech.',
          ParamName: 'Printer Name',
        },
      ],
      Description: 'Set the default printer on the remote computer.',
      FunctionFlag: 2,
    },
    '33': {
      FunctionId: 33,
      Name: 'Printer Clear Queue',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Lookup the exact name of the printer in LabTech.',
          ParamName: 'Printer Name',
        },
      ],
      Description: 'Clear the printer queue.',
      FunctionFlag: 2,
    },
    '34': {
      FunctionId: 34,
      Name: 'File Copy',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The full path of the source file, without quotes.',
          ParamName: 'Source Path',
        },
        {
          Description: 'The full path of the destination file, without quotes.',
          ParamName: 'Destination Path',
        },
      ],
      Description: 'Copy a file on the remote computer.',
      FunctionFlag: 2,
    },
    '35': {
      FunctionId: 35,
      Name: 'Service Start',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The name of the service.',
          ParamName: 'Service Name',
        },
      ],
      Description: 'Start a windows service.',
      FunctionFlag: 2,
    },
    '36': {
      FunctionId: 36,
      Name: 'Service Stop',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The name of the service.',
          ParamName: 'Service Name',
        },
      ],
      Description: 'Stop a windows service.',
      FunctionFlag: 2,
    },
    '37': {
      FunctionId: 37,
      Name: 'Console Screen Capture',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Console number to capture on, use %consolenumber% when IF logged on.',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Perform a Screen Capture on the users console, User must be logged on, Use IF Logged On to Test.',
      FunctionFlag: 2,
    },
    '39': {
      FunctionId: 39,
      Name: 'Disk Defrag',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The drive letter to defragment',
          ParamName: 'Drive Letter',
        },
        {
          Description: 'Put the results in this variable, without the @ signs.',
          ParamName: 'Result Variable',
        },
      ],
      Description: 'Defragment Drive, uses @computerid@ for the target computer.',
      FunctionFlag: 2,
    },
    '40': {
      FunctionId: 40,
      Name: 'Disk Check',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Drive Letter to scan, leave blank for all drives.',
          ParamName: 'Drive Letter',
        },
        {
          Description: 'Put the results in this variable, without the @ signs.',
          ParamName: 'Result Variable',
        },
      ],
      Description: 'Run chkdisk on a drive, uses @computerid@ for the target computer.',
      FunctionFlag: 2,
    },
    '41': {
      FunctionId: 41,
      Name: 'Performance Counter Get ',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Performance Counter Category',
          ParamName: 'Category',
        },
        {
          Description: 'Performance Counter',
          ParamName: 'Counter',
        },
        {
          Description: 'Performance Counter Instance, if there are multiple instances one must be specified.',
          ParamName: 'Instance',
        },
        {
          Description: 'Save results to this variable, without @ signs.',
          ParamName: 'Result Variable',
        },
      ],
      Description: 'Read Performance Counter and save result to variable. Use performance monitor to obtain category and counter names.',
      FunctionFlag: 2,
    },
    '42': {
      FunctionId: 42,
      Name: 'Console Execute',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to the program to run with quotes.',
          ParamName: 'Executable',
        },
        {
          Description: 'The arguments passed to the executable.',
          ParamName: 'Arguments',
        },
        {
          Description: 'Console number to run program on, use %consolenumber% when IF logged on.',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Run a program on user\'s desktop, User must be logged on, Use IF Logged On to Test and activate the %ConsoleNumber% variable. Returns data to "%executeresult% variable. This command has FULL Access to the User\'s Desktop, Network and Environment but will not return results of commands.',
      FunctionFlag: 2,
    },
    '43': {
      FunctionId: 43,
      Name: 'Share Create',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to the directory to share.',
          ParamName: 'Directory Path',
        },
        {
          Description: 'Name of Share.',
          ParamName: 'Share Name',
        },
      ],
      Description: 'Share a Folder on the remote computer.',
      FunctionFlag: 2,
    },
    '44': {
      FunctionId: 44,
      Name: 'Share Delete',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Name of Share.',
          ParamName: 'Share Name',
        },
      ],
      Description: 'Delete Share on remote computer.',
      FunctionFlag: 2,
    },
    '45': {
      FunctionId: 45,
      Name: 'Resend Error Logs',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send the Remote Monitors Error logs from LTErrors.txt.',
      FunctionFlag: 2,
    },
    '46': {
      FunctionId: 46,
      Name: 'Ticket Create',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Client Id to link ticket to.',
          ParamName: 'Client ID',
        },
        {
          Description: 'Computer ID to link the ticket to.',
          ParamName: 'Computer ID',
        },
        {
          Description: 'Email address of ticket requestor.',
          ParamName: 'Email',
        },
        {
          Description: 'Subject of the ticket.',
          ParamName: 'Subject',
        },
        {
          Description: 'The Message to include as the Body.',
          ParamName: 'Body',
        },
      ],
      Description: 'Create a new support ticket and saves the ticket ID to %ticketid%.',
      FunctionFlag: 2,
    },
    '47': {
      FunctionId: 47,
      Name: 'LTServer Create Alert',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The computer ID to link the alert to, for computer scripts use @computerid@.',
          ParamName: 'Computer ID',
        },
        {
          ParamName: 'Severity',
          Values: [
            'Informational',
            'Warning',
            'Error',
            'Critical',
          ],
          Description: 'The severity of the alert.',
        },
        {
          Description: 'Body of the message.',
          ParamName: 'Body',
        },
        {
          Description: 'Subject or Source of the Alert.',
          ParamName: 'Subject',
        },
      ],
      Description: 'Create an alert, to create a system alert set Computer ID to 0. Returns %AlertID% with the ID of the alert created.',
      FunctionFlag: 2,
    },
    '48': {
      FunctionId: 48,
      Name: 'Email Alerts',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Address to send the alerts to.',
          ParamName: 'Email',
        },
        {
          ParamName: 'Clear',
          Values: [
            'Yes',
            'No',
          ],
          Description: 'Clear this computers alerts after sending.',
        },
      ],
      Description: 'Send all alerts for target computer to email address, uses @computerid@ for the target computer.',
      FunctionFlag: 2,
    },
    '49': {
      FunctionId: 49,
      Name: 'Resend EventLogs',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Event Log Inventory now.',
      FunctionFlag: 2,
    },
    '50': {
      FunctionId: 50,
      Name: 'Resend Hardware',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Hardware Inventory now.',
      FunctionFlag: 2,
    },
    '51': {
      FunctionId: 51,
      Name: 'Resend Process List',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Process Inventory now.',
      FunctionFlag: 2,
    },
    '52': {
      FunctionId: 52,
      Name: 'Resend Autostartup List',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Autostartup Inventory now.',
      FunctionFlag: 2,
    },
    '53': {
      FunctionId: 53,
      Name: 'Resend Drive Info',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Disk Inventory now.',
      FunctionFlag: 2,
    },
    '54': {
      FunctionId: 54,
      Name: 'Resend Software',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Software Inventory now.',
      FunctionFlag: 2,
    },
    '55': {
      FunctionId: 55,
      Name: 'Resend Config',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Update the Templates and Config now.',
      FunctionFlag: 2,
    },
    '56': {
      FunctionId: 56,
      Name: 'Resend Service List',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Service Inventory now.',
      FunctionFlag: 2,
    },
    '57': {
      FunctionId: 57,
      Name: 'Resend Printers',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Printer Inventory now.',
      FunctionFlag: 2,
    },
    '58': {
      FunctionId: 58,
      Name: 'Net Wake on Lan',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'MAC address of target computer, use : to separate VALUES .',
          ParamName: 'MAC',
        },
      ],
      Description: 'Send wake on Lan packet from the remote computer.',
      FunctionFlag: 2,
    },
    '59': {
      FunctionId: 59,
      Name: 'Performance Counter',
      Parameters: 5,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Performance Category',
          ParamName: 'Category',
        },
        {
          Description: 'Counter Name',
          ParamName: 'Counter',
        },
        {
          Description: 'Instance Name',
          ParamName: 'Instance',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: '',
        },
        {
          ParamName: 'To',
        },
      ],
      Description: 'Checks perf counter on computer and sets the %perfresult% variable.',
      FunctionFlag: 2,
    },
    '60': {
      FunctionId: 60,
      Name: 'Smart Attributes',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Smart Attribute',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),AttributeID) using latin1) from smartattributenames Order By Name',
          ],
          Description: 'The attribute to test.',
        },
      ],
      Description: 'Test if an Attribute is under its threshold for the current computer and sets the %smartresult% variable with the drive.',
      FunctionFlag: 2,
    },
    '61': {
      FunctionId: 61,
      Name: 'Drive Status',
      Parameters: 3,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'Minimum Percentage of free space',
          ParamName: 'FreeSpace',
        },
        {
          Description: 'Maximum Fragmentation that is acceptable for this drive',
          ParamName: 'Fragmentation',
        },
        {
          Description: 'Maximum MFT Fragmentation that is acceptable.',
          ParamName: 'MFT Frag',
        },
      ],
      Description: 'Returns True if any of the Conditions are met and sets the %driveletter% variable with the drive.',
      FunctionFlag: 2,
    },
    '62': {
      FunctionId: 62,
      Name: 'Software Installed',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'The name of the application to check for.',
          ParamName: 'App Name',
        },
      ],
      Description: 'Checks if software package is installed and sets the %softwarelocation% variable with the path.',
      FunctionFlag: 2,
    },
    '63': {
      FunctionId: 63,
      Name: 'Patch Installed',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Patch ID',
          Values: [
            'Select Distinct Convert(CONCAT(REPLACE(Title,\':\',\'\'),CHAR(0),HotFixID) using Latin1) From hotfixdata order by Title~2',
          ],
          Description: 'Select Patch.',
        },
      ],
      Description: 'Checks if Patch is installed.',
      FunctionFlag: 2,
    },
    '64': {
      FunctionId: 64,
      Name: 'AutoStartup Check',
      Parameters: 3,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'AutoStart Def',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),AUTODEFID) using latin1) From AutoStartupDefs',
          ],
          Description: 'Pick the Location to check.',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
        },
        {
          ParamName: 'To',
        },
      ],
      Description: 'Check Startup Value for result and sets the %autostartupvalue% variable.',
      FunctionFlag: 2,
    },
    '65': {
      FunctionId: 65,
      Name: 'Event Log Check',
      Parameters: 5,
      FunctionType: 1,
      ParamNames: [
        {
          Description: ' Name of the Log File to test.',
          ParamName: 'Log Name',
        },
        {
          Description: 'Leave blank for all Entries',
          ParamName: 'Source',
        },
        {
          ParamName: 'Event Type',
          Values: [
            'Security',
            'Error',
            'Information',
            'Warning',
          ],
          Description: 'Type of event to match',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: '',
        },
        {
          Description: 'The message portion of the message is used for comparison',
          ParamName: 'To',
        },
      ],
      Description: 'Test log entries from the past 24 hours and set the %eventlogmessage% variable.',
      FunctionFlag: 2,
    },
    '66': {
      FunctionId: 66,
      Name: 'Offline Backup',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Initial Directory on FTP Server.',
          ParamName: 'FTP Directory',
        },
        {
          Description: 'Password for the zip archive.',
          ParamName: 'File Password',
        },
        {
          Description: 'Maximum file size.',
          ParamName: 'File Size',
        },
        {
          Description: 'Full path to backup, disables my doc backup.',
          ParamName: 'File Path',
        },
        {
          Description: 'File filter for my documents backup.',
          ParamName: 'File Filter',
        },
      ],
      Description: 'Performs LabTech offline backup, using template or global settings.',
      FunctionFlag: 2,
    },
    '67': {
      FunctionId: 67,
      Name: 'SQL Execute',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The SQL statement to run.',
          ParamName: 'SQL Statement',
        },
        {
          Description: 'Leave blank to use the LabTech Database.',
          ParamName: 'ODBC Connection',
        },
      ],
      Description: 'Run a SQL statement.',
      FunctionFlag: 1,
    },
    '68': {
      FunctionId: 68,
      Name: 'Tool Installed',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Tool ID',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),AppID) using latin1) From AvailableApps Order by Name',
          ],
        },
      ],
      Description: 'Checks if Tool or Tweak is installed.',
      FunctionFlag: 2,
    },
    '69': {
      FunctionId: 69,
      Name: 'Tool Install',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Action',
          Values: [
            'Install',
            'Remove',
          ],
          Description: 'Install or Remove.',
        },
        {
          ParamName: 'Tool ID',
          Values: [
            'Select Convert(CONCAT(Name,CHAR(0),AppID) using latin1) From AvailableApps Order by Name',
          ],
          Description: 'Name of Tool to perform action to.',
        },
      ],
      Description: 'Install or remove a Tool\\Tweak.',
      FunctionFlag: 2,
    },
    '70': {
      FunctionId: 70,
      Name: 'Variable Check',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Enter variable name without % or @. Script will attempt to use %variablename%, if no match is found it will attempt to use @variablename@.',
          ParamName: 'Variable Name',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
            'In',
            'Not In',
          ],
          Description: 'Logical Operator.',
        },
        {
          Description: 'Value to compare to.',
          ParamName: 'To',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Compares a variable to the specified data and skips if the result is TRUE.',
      FunctionFlag: 1,
    },
    '71': {
      FunctionId: 71,
      Name: 'New Unassigned Ticket',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'The Client to search, leave blank for all clients.',
          ParamName: 'Client ID',
        },
        {
          ParamName: '',
        },
      ],
      Description: 'Runs the True part when a new ticket exists and sets the %ticketid% variable.',
      FunctionFlag: 1,
    },
    '72': {
      FunctionId: 72,
      Name: 'Ticket Assign',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'ID of Ticket to Assign.',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'User',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),UserID) using UTF8) from users  Where UserID>0 Order By Name',
          ],
          Description: 'User to Assign the ticket to or type a Variable name.',
        },
      ],
      Description: 'Assign Ticket to specified user.',
      FunctionFlag: 1,
    },
    '73': {
      FunctionId: 73,
      Name: 'LTServer Execute',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Path to program to run.',
          ParamName: 'Program Path',
        },
        {
          Description: 'Parameters to pass to the program.',
          ParamName: 'Arguments',
        },
      ],
      Description: 'Runs a program on the LabTech Server. Must not show windows or require any user action.',
      FunctionFlag: 1,
    },
    '74': {
      FunctionId: 74,
      Name: 'Disk Cleanup',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Run the internal LabTech disk cleanup according to the settings in the config, uses @computerid@ for the target computer.',
      FunctionFlag: 2,
    },
    '75': {
      FunctionId: 75,
      Name: 'LTServer Write to File',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to the file.',
          ParamName: 'File Name',
        },
        {
          Description: 'The text data to write to the file.',
          ParamName: 'Message',
        },
      ],
      Description: 'Write to a file on the LabTech Server.',
      FunctionFlag: 1,
    },
    '76': {
      FunctionId: 76,
      Name: 'LTServer Net Send',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The computer or user to send the message to.',
          ParamName: 'NetBios Name',
        },
        {
          Description: 'The message to send.',
          ParamName: 'Message',
        },
      ],
      Description: 'Send a NetBIOS message from the LabTech Server.',
      FunctionFlag: 2,
    },
    '77': {
      FunctionId: 77,
      Name: 'LTServer Voice Message',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The exact number to dial.',
          ParamName: 'Phone Number',
        },
        {
          Description: 'The message to read over the phone.',
          ParamName: 'Message',
        },
      ],
      Description: 'Place Voice call from the LabTech Server.',
      FunctionFlag: 1,
    },
    '78': {
      FunctionId: 78,
      Name: 'LTServer Pager Message',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The exact number to dial.',
          ParamName: 'Phone Number',
        },
        {
          Description: 'Numeric message to send.',
          ParamName: 'Message',
        },
      ],
      Description: 'Send Pager message from the LabTech Server.',
      FunctionFlag: 1,
    },
    '79': {
      FunctionId: 79,
      Name: 'LTServer Send Fax',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Exact number to dial.',
          ParamName: 'Phone Number',
        },
        {
          Description: 'Message to fax.',
          ParamName: 'Message',
        },
      ],
      Description: 'Send a fax from the LabTech Server.',
      FunctionFlag: 1,
    },
    '80': {
      FunctionId: 80,
      Name: 'ExtraData Set Value',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Extra Field',
          Values: [
            'Select convert(CONCAT(Name,\'-\',Form,CHAR(0),ID) using latin1) From ExtraField order by Form',
          ],
          Description: 'The field ends with the type of ID. 1=computer 2=locationid 3=client 4=probe 5=device 6=ticket 7=group 13=contact',
        },
        {
          Description: 'Use the correct ID type, like @computerid@.',
          ParamName: 'ID',
        },
        {
          Description: 'If specifying a variable, include @ signs.',
          ParamName: 'Value',
        },
      ],
      Description: 'Save an Extra Data Field from a variable.',
      FunctionFlag: 1,
    },
    '81': {
      FunctionId: 81,
      Name: 'Net Get SNMP',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The hostname or IP Address.',
          ParamName: 'Host Name',
        },
        {
          Description: 'The community string to use.',
          ParamName: 'Community',
        },
        {
          Description: 'Numeric Object Identifier.',
          ParamName: 'OID',
        },
      ],
      Description: 'Gets a SNMP Object Identifier and saves it to %snmpresult%.',
      FunctionFlag: 2,
    },
    '82': {
      FunctionId: 82,
      Name: 'File Zip',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'A comma separated list of full paths.',
          ParamName: 'Path List',
        },
        {
          Description: 'The full path to the save the zip archive.',
          ParamName: 'Archive',
        },
      ],
      Description: 'Add List of files to compressed zip archive.',
      FunctionFlag: 2,
    },
    '83': {
      FunctionId: 83,
      Name: 'Add User Accounts',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Do not include the domain name or quotes.',
          ParamName: 'Username',
        },
        {
          Description: 'Password to use for new user account.',
          ParamName: 'Password',
        },
      ],
      Description: 'Adds a new user account to the local computer unless this is a domain controller then it creates a domain account.',
      FunctionFlag: 2,
    },
    '84': {
      FunctionId: 84,
      Name: 'Net TFTP Send',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The file must exist in the %Windir%\\ltsvc\\TFTP directory, without quotes.',
          ParamName: 'File name',
        },
        {
          Description: 'The hostname or IP Address.',
          ParamName: 'Server Address',
        },
      ],
      Description: 'Send a local TFTP File to a machine.',
      FunctionFlag: 2,
    },
    '85': {
      FunctionId: 85,
      Name: 'Play Sound',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The full path to the wave file.',
          ParamName: 'Wave File',
        },
      ],
      Description: 'Play a sound file on the remote computer.',
      FunctionFlag: 2,
    },
    '86': {
      FunctionId: 86,
      Name: 'Net Renew IP',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Renews the remote computers IP address.',
      FunctionFlag: 2,
    },
    '87': {
      FunctionId: 87,
      Name: 'Net Ping',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The hostname or IP Address.',
          ParamName: 'Host name',
        },
      ],
      Description: 'Ping a hostname and save the result in %pingresult%.',
      FunctionFlag: 2,
    },
    '88': {
      FunctionId: 88,
      Name: 'Net IPConfig',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Returns the IPConfig information and saves it to %ipconfigresult%.',
      FunctionFlag: 2,
    },
    '89': {
      FunctionId: 89,
      Name: 'Net DNS Lookup',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The hostname or IP Address.',
          ParamName: 'Host Name',
        },
      ],
      Description: 'Performs a DNS Lookup on the remote computer and saves the result to %dnsresult%.',
      FunctionFlag: 2,
    },
    '90': {
      FunctionId: 90,
      Name: 'File Write Text',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The full path to the file, will replace existing file.',
          ParamName: 'Text File',
        },
        {
          Description: 'The text to write to the file.',
          ParamName: 'Data',
        },
      ],
      Description: 'Save text to a file on the remote computer.',
      FunctionFlag: 2,
    },
    '91': {
      FunctionId: 91,
      Name: 'Net Get IP Port',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Type',
          Values: [
            'TCP',
            'UDP',
          ],
          Description: 'Select the protocol to use.',
        },
        {
          Description: 'The hostname or IP Address.',
          ParamName: 'Host name',
        },
        {
          Description: 'The port number to connect to.',
          ParamName: 'Port',
        },
        {
          Description: 'Data to send after connect, leave blank for none.',
          ParamName: 'Data',
        },
        {
          Description: 'Number of bytes to receive, enter 0 for listen test.',
          ParamName: 'Receive Bytes',
        },
      ],
      Description: 'Connects to Internet Protocol port and reads characters into %portresult%.',
      FunctionFlag: 2,
    },
    '92': {
      FunctionId: 92,
      Name: 'Script For Each',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Script To Run',
          Values: [
            'Select convert(CONCAT(ifnull(CONCAT(f.Name,\'\\\\\'),\'\'),s.Name,\'\\\\\',c.ScriptName,CHAR(0),c.scriptid) using latin1) FROM lt_scripts c join scriptfolders s on s.folderid=c.folderid left join scriptfolders f on f.folderid=s.parentid ORDER BY CONCAT((CASE WHEN f.name IS NULL THEN \'\' ELSE f.name END),s.name,c.scriptname)',
          ],
          Description: 'Execute this script on each variable in the list.',
        },
        {
          Description: 'The comma separated list',
          ParamName: 'List',
        },
        {
          Description: 'The variable to set with the value obtained from the list.',
          ParamName: 'Variable ',
        },
      ],
      Description: 'Run a script with each variable in comma separated list.',
      FunctionFlag: 1,
    },
    '93': {
      FunctionId: 93,
      Name: 'Report Email',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Report',
          Values: [
            'Select Name From Reports Order By Name~1',
          ],
          Description: 'The report to run.',
        },
        {
          Description: 'Email address to send report to.',
          ParamName: 'Email',
        },
        {
          Description: 'The Crystal Reports selection string to limit the results.',
          ParamName: 'Selection',
        },
        {
          Description: 'The Subject of the Email',
          ParamName: 'Subject',
        },
        {
          Description: 'The Body of the message as the report will be a PDF attachment.',
          ParamName: 'Message',
        },
      ],
      Description: 'Email Report as PDF attachment.',
      FunctionFlag: 1,
    },
    '94': {
      FunctionId: 94,
      Name: 'Report Print',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Report',
          Values: [
            'Select Name From Reports Order By Name~1',
          ],
          Description: 'The report to run.',
        },
        {
          Description: 'The name of the printer to print to, leave blank for default printer.',
          ParamName: 'Printer',
        },
        {
          Description: 'The Crystal Reports selection string to limit the results.',
          ParamName: 'Selection',
        },
      ],
      Description: 'Print Report to printer.',
      FunctionFlag: 2,
    },
    '95': {
      FunctionId: 95,
      Name: 'ExtraData Check',
      Parameters: 4,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Extra Field',
          Values: [
            'Select convert(CONCAT(Name,\'-\',Form,CHAR(0),ID) using latin1) From ExtraField order by Form',
          ],
        },
        {
          ParamName: 'ID',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
        },
        {
          ParamName: 'To',
        },
      ],
      Description: 'Tests an Extra Data Field.',
      FunctionFlag: 1,
    },
    '96': {
      FunctionId: 96,
      Name: 'Script State Clear',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Computer to clear the state on, use @computerid@ on computer scripts.',
          ParamName: 'ComputerID',
        },
      ],
      Description: 'Clear the script state variable for this script.',
      FunctionFlag: 2,
    },
    '97': {
      FunctionId: 97,
      Name: 'Script State Set',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Computer to save state for, use @computerid@ on computer scripts.',
          ParamName: 'ComputerID',
        },
        {
          Description: 'Name of the variable to save or leave empty to save all script variables.',
          ParamName: 'Name',
        },
        {
          Description: 'Value to save to the variable.',
          ParamName: 'Value',
        },
      ],
      Description: 'Save a variable to the script state to use later. Script state is unique for every script and computer.',
      FunctionFlag: 2,
    },
    '98': {
      FunctionId: 98,
      Name: 'Script State Get',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Computer to load state for, use @computerid@ on computer scripts.',
          ParamName: 'ComputerID',
        },
        {
          Description: 'Name of the variable to load or leave empty to load all script variables.',
          ParamName: 'Name',
        },
        {
          Description: 'Save results to this variable, without @ signs. Ignored when loading all variables.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Load a variable from the script state.',
      FunctionFlag: 2,
    },
    '99': {
      FunctionId: 99,
      Name: 'Script Stats Clear',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Computer to load stat for, use @computerid@ on computer scripts.',
          ParamName: 'ComputerID',
        },
        {
          Description: 'Name of the stat to clear, leave blank to clear all stats.',
          ParamName: 'Name',
        },
      ],
      Description: 'Clear the script stats for this computer. Stats can be used to track counts of actions performed.',
      FunctionFlag: 2,
    },
    '100': {
      FunctionId: 100,
      Name: 'Script Stats Save',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Computer to save stat for, use @computerid@ on computer scripts.',
          ParamName: 'ComputerID',
        },
        {
          Description: 'Name of the stat to save.',
          ParamName: 'Name',
        },
      ],
      Description: 'Adds 1 to the script stat counter for the computer specified.',
      FunctionFlag: 2,
    },
    '101': {
      FunctionId: 101,
      Name: 'Script Math',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'First numeric value to use.',
          ParamName: 'Value',
        },
        {
          ParamName: 'Operator',
          Values: [
            '+',
            '-',
            '*',
            '\\',
            'div',
            'mod',
            'pow',
            'abs',
            'max',
            'min',
          ],
          Description: 'Operation to perform.',
        },
        {
          Description: 'ABS does not need a second value.',
          ParamName: 'Value',
        },
        {
          Description: 'Enter the variable name without the @ symbols around it.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Performs specified math function on the values and stores the result in %MathResult% as well as the specified script variable.',
      FunctionFlag: 1,
    },
    '102': {
      FunctionId: 102,
      Name: 'Script RegEx',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The value to test.',
          ParamName: 'Value',
        },
        {
          Description: 'The expression to use, if groups are defined the first group is returned.',
          ParamName: 'Pattern',
        },
        {
          Description: 'Enter the variable name without the @ symbols around it.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Performs regular expression parsing for the given value and stores the result in %RegEXResult% and the named variable, use VBScript/VB.net syntax.',
      FunctionFlag: 1,
    },
    '103': {
      FunctionId: 103,
      Name: 'ExtraData Get Value',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Extra Field',
          Values: [
            'Select convert(CONCAT(Name,\'-\',Form,CHAR(0),ID) using latin1) From ExtraField order by Form',
          ],
          Description: 'The field ends with the type of ID. 1=computer 2=location 3=client 4=probe 5=device 6=ticket 7=group 13=contact',
        },
        {
          Description: 'Use the correct ID type, like @computerid@.',
          ParamName: 'ID',
        },
        {
          Description: 'Put the results in this variable, without the @ signs.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Read an Extra Data Field and save it to a variable.',
      FunctionFlag: 1,
    },
    '104': {
      FunctionId: 104,
      Name: 'Ticket Combine',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Ticket to keep',
          ParamName: 'Master Ticket',
        },
        {
          Description: 'The Ticket to get rid of',
          ParamName: 'Combined Ticket',
        },
      ],
      Description: 'Combine Ticket into master ticket.',
      FunctionFlag: 1,
    },
    '105': {
      FunctionId: 105,
      Name: 'Ticket Finish',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Ticket To Finish',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'User ID',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),UserID) using UTF8) from users  Where UserID>0 Order By Name',
          ],
          Description: 'ID Number of the user to perform the Finish or type a Variable name',
        },
        {
          Description: 'The Message to include as the Body.',
          ParamName: 'Body',
        },
      ],
      Description: 'Finish Ticket as User.',
      FunctionFlag: 1,
    },
    '106': {
      FunctionId: 106,
      Name: 'Ticket Stall',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Ticket ID To Stall',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'Action',
          Values: [
            'Stall',
            'Unstall',
          ],
          Description: 'Stall Or Unstall Ticket',
        },
        {
          Description: 'If Stalling Ticket, unstall on this date (YYYY-MM-DD HH:MM:SS)',
          ParamName: 'Date To Unstall',
        },
      ],
      Description: 'Stall or Unstall Ticket.',
      FunctionFlag: 1,
    },
    '107': {
      FunctionId: 107,
      Name: 'Ticket Open',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Ticket To Open',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'User ID',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),UserID) using UTF8) from users  Where UserID>0 Order By Name',
          ],
          Description: 'ID Number of the user to perform the Open or type a Variable name',
        },
        {
          Description: 'The comment to include in the summary.',
          ParamName: 'Comment',
        },
      ],
      Description: 'Open Ticket as User.',
      FunctionFlag: 1,
    },
    '108': {
      FunctionId: 108,
      Name: 'Ticket Comment',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Ticket To Comment on',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'User ID',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),UserID) using UTF8) from users  Where UserID>0 Order By Name',
          ],
          Description: 'ID Number of the user to perform the Comment or type a Variable name',
        },
        {
          Description: 'The Message to include as the Body.',
          ParamName: 'Body',
        },
        {
          ParamName: 'Respond',
          Values: [
            'Yes',
            'No',
          ],
          Description: 'Send an Email to the Requestor',
        },
      ],
      Description: 'Comment on Ticket as User.',
      FunctionFlag: 1,
    },
    '109': {
      FunctionId: 109,
      Name: 'Shell Enhanced',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Commands to execute',
          ParamName: 'Command',
        },
        {
          Description: 'Used to split the variable list and the results returned by the shell command',
          ParamName: 'Delimiter',
        },
        {
          Description: 'List of Variable to be set from the resulting shell command',
          ParamName: 'Variable List',
        },
      ],
      Description: 'Execute shell commands in the background, using CMD.exe to run them.',
      FunctionFlag: 2,
    },
    '110': {
      FunctionId: 110,
      Name: 'IF Process Exists',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Name or ID of Process to Check.',
          ParamName: 'Process Name',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Check if the process is running and sets the %processid% variable.',
      FunctionFlag: 1,
    },
    '111': {
      FunctionId: 111,
      Name: 'IF Registry Check',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'End the Value name with a \\ to indicate a Key rather than a value.',
          ParamName: 'Registry Key',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: 'For Keys Exists and Not Exists are the only applicable choices.',
        },
        {
          Description: 'Leave blank for Exists and Not Exists.',
          ParamName: 'To',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Test the Registry Value and sets the %registryresult% variable.',
      FunctionFlag: 2,
    },
    '113': {
      FunctionId: 113,
      Name: 'IF Service is Running',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Name of service to check.',
          ParamName: 'Service Name',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Check if the Service is Running and sets the %servicename% variable.',
      FunctionFlag: 1,
    },
    '114': {
      FunctionId: 114,
      Name: 'IF File Check',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to the file to test.',
          ParamName: 'File Path',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
          ],
          Description: 'Returns true if the condition is met.',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Check if the file Exists or does Not Exist.',
      FunctionFlag: 2,
    },
    '115': {
      FunctionId: 115,
      Name: 'IF Console Logged On',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Check if the specific user is logged on, leave blank for anyone.',
          ParamName: 'Username',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Return True if user is logged on and sets the %consolenumber% variable.',
      FunctionFlag: 2,
    },
    '116': {
      FunctionId: 116,
      Name: 'IF User Response',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The question to ask.',
          ParamName: 'Question',
        },
        {
          Description: 'Console Number to ask the question on, get this from a previous script. ',
          ParamName: 'Console Number',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Ask the User a Yes or No Question and jumps to the Label to Jump to or Steps to Skip if Yes.',
      FunctionFlag: 2,
    },
    '117': {
      FunctionId: 117,
      Name: 'IF SQL Data Check',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Statement must return 1 value.',
          ParamName: 'Sql Statement',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: 'Logical Operator.',
        },
        {
          Description: 'Value to compare.',
          ParamName: 'To',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
        {
          Description: 'Leave blank to use the LabTech database.',
          ParamName: 'ODBC Connection',
        },
      ],
      Description: 'Test a Value from the Database and set %sqlresult% variable.',
      FunctionFlag: 1,
    },
    '118': {
      FunctionId: 118,
      Name: 'IF Smart Attributes',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Smart Attribute',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),AttributeID) using latin1) from smartattributenames Order By Name',
          ],
          Description: 'The attribute to test.',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Tests if an Attribute is under its threshold for the current computer and sets the %smartresult% variable with the drive.',
      FunctionFlag: 1,
    },
    '119': {
      FunctionId: 119,
      Name: 'IF Drive Status',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Minimum Percentage of free space',
          ParamName: 'FreeSpace',
        },
        {
          Description: 'Maximum Fragmentation that is acceptable for this drive',
          ParamName: 'Fragmentation',
        },
        {
          Description: 'Maximum MFT Fragmentation that is acceptable.',
          ParamName: 'MFT Frag',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Returns True if any of the Conditions are met and sets the %driveletter% variable with the drive.',
      FunctionFlag: 1,
    },
    '120': {
      FunctionId: 120,
      Name: 'IF Software Installed',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The name of the application to check for.',
          ParamName: 'App Name',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Check if software package is installed and set the %softwarelocation% variable with the path.',
      FunctionFlag: 1,
    },
    '121': {
      FunctionId: 121,
      Name: 'IF Patch Installed',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Patch ID',
          Values: [
            'SELECT DISTINCT CONVERT(CONCAT(REPLACE(Title,\':\',\'\'),CHAR(0),HotFixID) USING Latin1) FROM hotfixdata ORDER BY Title~2',
          ],
          Description: 'Select Patch or type Variable Name.',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Check if Patch is installed.',
      FunctionFlag: 1,
    },
    '122': {
      FunctionId: 122,
      Name: 'IF AutoStartup Check',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'AutoStart Def',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),AUTODEFID) using latin1) From AutoStartupDefs',
          ],
          Description: 'Pick the Location to check.',
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
          Description: 'Logical Operator.',
        },
        {
          Description: 'Value to compare.',
          ParamName: 'To',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Checks Startup Value for result and sets the %autostartupvalue% variable.',
      FunctionFlag: 1,
    },
    '123': {
      FunctionId: 123,
      Name: 'IF Tool Installed',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Tool ID',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),AppID) using latin1) From AvailableApps Order by Name',
          ],
          Description: 'Name of Tool to check.',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Check if Tool\\Tweak is installed.',
      FunctionFlag: 1,
    },
    '124': {
      FunctionId: 124,
      Name: 'IF New Unassigned Ticket',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Client to search, leave blank for all clients.',
          ParamName: 'Client ID',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Runs the True part when a new ticket exists and sets the %ticketid% variable.',
      FunctionFlag: 1,
    },
    '125': {
      FunctionId: 125,
      Name: 'Process Execute as Admin',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to executable.',
          ParamName: 'File',
        },
        {
          Description: 'Parameters to pass to the executable.',
          ParamName: 'Arguments',
        },
        {
          ParamName: '',
          Values: [
            'Wait for Process',
            'Return Immediatly',
          ],
          Description: 'Wait for process to end before returning.',
        },
      ],
      Description: 'Run program in the background as the administrator account defined for this location on remote computer.',
      FunctionFlag: 2,
    },
    '126': {
      FunctionId: 126,
      Name: 'Shell as Admin',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Commands to execute',
          ParamName: 'Command',
        },
      ],
      Description: 'Execute shell commands as the administrator account defined for this location, using CMD.exe to run them.',
      FunctionFlag: 2,
    },
    '127': {
      FunctionId: 127,
      Name: 'Process Execute as User',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path to executable.',
          ParamName: 'File',
        },
        {
          Description: 'Parameters to pass to the executable.',
          ParamName: 'Arguments',
        },
        {
          ParamName: '',
          Values: [
            'Wait for Process',
            'Return Immediatly',
          ],
          Description: 'Wait for process to end before returning.',
        },
        {
          Description: 'The username to run this process as.',
          ParamName: 'Username',
        },
        {
          Description: 'The password used with this username.',
          ParamName: 'Password',
        },
      ],
      Description: 'Run program in the background as the username specified below.',
      FunctionFlag: 2,
    },
    '128': {
      FunctionId: 128,
      Name: 'Shell as User',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Commands to execute',
          ParamName: 'Command',
        },
        {
          Description: 'The username to run this process as.',
          ParamName: 'Username',
        },
        {
          Description: 'The password used with this username.',
          ParamName: 'Password',
        },
      ],
      Description: 'Execute shell commands as the username specified below, using CMD.exe to run them.',
      FunctionFlag: 2,
    },
    '129': {
      FunctionId: 129,
      Name: 'Script Goto',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Enter Zero to Exit the Script.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Jumps to label or skips steps either forward or back.',
      FunctionFlag: 1,
    },
    '130': {
      FunctionId: 130,
      Name: 'Group Member',
      Parameters: 2,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Group Name',
          Values: [
            'Select CONVERT(CONCAT(FullName,CHAR(0),GroupID) using Latin1) From MasterGroups Order by FullName',
          ],
          Description: '',
        },
        {
          Description: 'Use @ComputerID@ for the current computer.',
          ParamName: 'Computer ID',
        },
      ],
      Description: 'Tests if the computer is a member of the selected group.',
      FunctionFlag: 2,
    },
    '131': {
      FunctionId: 131,
      Name: 'IF Group Member',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Group Name',
          Values: [
            'Select CONVERT(CONCAT(FullName,CHAR(0),GroupID) using Latin1) From MasterGroups Order by FullName',
          ],
          Description: 'Name of the group to check.',
        },
        {
          Description: 'Use @ComputerID@ for the current computer.',
          ParamName: 'Computer ID',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Tests if the computer is a member of the selected group or any of its children.',
      FunctionFlag: 2,
    },
    '132': {
      FunctionId: 132,
      Name: 'Patch Install All',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Action',
          Values: [
            'All Missing Patches',
            'Missing Security Patches',
            'Missing Approved Patches',
          ],
          Description: 'Action to perform.',
        },
        {
          Description: 'Script to run on completion of patch install.',
          ParamName: 'Script ID',
        },
      ],
      Description: 'Deploy Windows Updates to the current computer.',
      FunctionFlag: 2,
    },
    '133': {
      FunctionId: 133,
      Name: 'Windows Update Settings',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Action',
          Values: [
            'Restore Defaults',
            'Set WSUS Server',
            'Force Windows Update',
            'Windows Update Download Only',
            'Enable Windows Update at Time',
            'Disable Windows Update',
            'Disable Access to Windows Update',
            'Set LabTech Mode',
            'Install WUA Agent',
          ],
          Description: 'Action to perform.',
        },
        {
          Description: 'Enter Time as Day:Time',
          ParamName: 'WSUS or Time:',
        },
      ],
      Description: 'Set the Windows Update Agents settings.',
      FunctionFlag: 2,
    },
    '134': {
      FunctionId: 134,
      Name: 'Ticket Add Time',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Ticket to add time to.',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'User ID',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),UserID) using UTF8) from users Order By Name',
          ],
          Description: 'ID Number of the user to perform the Comment or type a Variable name',
        },
        {
          Description: 'The Message to include as the Body.',
          ParamName: 'Body',
        },
        {
          Description: 'Number of Minutes to Add.',
          ParamName: 'Time',
        },
        {
          Description: 'ID Number of the Time Category to add.',
          ParamName: 'Time Category ID',
        },
      ],
      Description: 'Add Time to Ticket as User.',
      FunctionFlag: 1,
    },
    '135': {
      FunctionId: 135,
      Name: 'Powershell Command',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Commands to execute',
          ParamName: 'Command',
        },
      ],
      Description: 'Execute powershell command using PS.exe to run them and store the result in %powershellresult%.',
      FunctionFlag: 2,
    },
    '136': {
      FunctionId: 136,
      Name: 'Patch Approve',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Group Name',
          Values: [
            'Select CONVERT(CONCAT(FullName,CHAR(0),GroupID) using Latin1) From MasterGroups Order by FullName',
          ],
          Description: 'Name of group to approve patches to.',
        },
      ],
      Description: 'Approve all Security Patches for the group selected.',
      FunctionFlag: 1,
    },
    '137': {
      FunctionId: 137,
      Name: 'LTServer Record Stat',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Stat Number',
          Values: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
          ],
          Description: 'Over 10 can be Strings',
        },
        {
          Description: 'The Value to Save as a stat',
          ParamName: 'Value',
        },
        {
          Description: 'The Computer ID ',
          ParamName: 'Computer ID',
        },
      ],
      Description: 'Record Stat to the Extra stats to be used with reporting.',
      FunctionFlag: 1,
    },
    '138': {
      FunctionId: 138,
      Name: 'LabTech Send Message to Computer',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Message',
          Values: [
            'Select Convert(Concat(Name,CHAR(0),MessageID) using UTF8) From msg_messages Order By Name',
          ],
          Description: 'The Message to use.',
        },
        {
          Description: 'ID of computer to send message to.',
          ParamName: 'Computer ID',
        },
        {
          Description: 'Extra Parameters to REPLACE with this script',
          ParamName: 'Parameters to Pass to the Script',
        },
      ],
      Description: 'Send a Preformatted message to the User.',
      FunctionFlag: 2,
    },
    '139': {
      FunctionId: 139,
      Name: 'Script Note',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Remark to be added to script, use : at start to specify a label.',
          ParamName: 'Remark',
        },
      ],
      Description: 'Adds a remark to the script and will not be executed.',
      FunctionFlag: 1,
    },
    '140': {
      FunctionId: 140,
      Name: 'IF Ticket Status',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Ticket ID to test.',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'Status',
          Values: [
            'SELECT CONVERT(CONCAT(\'Exists\',CHAR(0),0) USING latin1) AS TicketStatus UNION (SELECT CONVERT(CONCAT(TicketStatus,CHAR(0),TicketStatusID) USING latin1) FROM ticketstatus ORDER BY TicketStatus)',
          ],
          Description: 'Status to Equal if true',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Tests if a Ticket is set to the selected status.',
      FunctionFlag: 1,
    },
    '141': {
      FunctionId: 141,
      Name: 'Ticket Status',
      Parameters: 2,
      FunctionType: 1,
      ParamNames: [
        {
          Description: 'The Ticket ID to test.',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'Status',
          Values: [
            'SELECT CONVERT(CONCAT(\'Exists\',CHAR(0),0) USING latin1) AS TicketStatus UNION (SELECT CONVERT(CONCAT(TicketStatus,CHAR(0),TicketStatusID) USING latin1) FROM ticketstatus ORDER BY TicketStatus)',
          ],
          Description: 'The Status to compare to.',
        },
      ],
      Description: 'Check the Status of a Ticket.',
      FunctionFlag: 1,
    },
    '142': {
      FunctionId: 142,
      Name: 'Ticket Reading View',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The ID of the Ticket to use',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'Newest on Top',
          Values: [
            'Yes',
            'No',
          ],
          Description: 'List Items starting with the newest.',
        },
        {
          ParamName: 'HTML',
          Values: [
            'Yes',
            'No',
          ],
          Description: 'Use HTML for message.',
        },
        {
          ParamName: 'For Customer',
          Values: [
            'Yes',
            'No',
          ],
          Description: 'Hide internal Ticketing information. ',
        },
      ],
      Description: 'Create a Ticket Reading View and Save it to %ticketreadingview%.',
      FunctionFlag: 1,
    },
    '143': {
      FunctionId: 143,
      Name: 'Ticket Update',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Leave blank to keep existing.',
          ParamName: 'Requestor Email',
        },
        {
          Description: 'Leave blank to keep existing.',
          ParamName: 'Priority',
        },
        {
          Description: 'Leave blank to keep existing.',
          ParamName: 'Subject',
        },
        {
          Description: 'Leave blank to keep existing.',
          ParamName: 'Category ID',
        },
        {
          Description: 'ID of ticket to Update.',
          ParamName: 'Ticket ID',
        },
      ],
      Description: 'Update Ticket information.',
      FunctionFlag: 1,
    },
    '144': {
      FunctionId: 144,
      Name: 'Ticket Elevate',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Ticket ID to Elevate.',
          ParamName: 'Ticket ID',
        },
      ],
      Description: 'Elevate the selected ticket to the next level.',
      FunctionFlag: 1,
    },
    '146': {
      FunctionId: 146,
      Name: 'Script For Each SQL',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The SQL Query to execute.',
          ParamName: 'SQL',
        },
        {
          ParamName: 'Script To Run',
          Values: [
            'Select CONVERT(CONCAT(ifnull(CONCAT(f.Name,\'\\\\\'),\'\'),ifnull(CONCAT(s.Name,\'\\\\\'),\'\'),c.ScriptName,CHAR(0),c.scriptid) using latin1) FROM lt_scripts c LEFT join scriptfolders s on s.folderid=c.folderid left join scriptfolders f on f.folderid=s.parentid ORDER BY CONCAT((CASE WHEN f.name IS NULL THEN \'\' ELSE f.name END),s.name,c.scriptname)',
          ],
          Description: 'Choose the script to run on each row.',
        },
        {
          Description: 'Leave blank to use the LabTech database.',
          ParamName: 'ODBC Connection',
        },
      ],
      Description: 'Performs a SQL Query and runs a script for each row returned setting all returned columns to internal variables like this %sqlCOLUMNNAME%.',
      FunctionFlag: 1,
    },
    '147': {
      FunctionId: 147,
      Name: 'LabTech Probe Control',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Control Command',
          Values: [
            'Reattempt Push',
            'Reinventory Devices',
            'Rescan Network',
          ],
          Description: 'The Command to send to the Probe.',
        },
      ],
      Description: 'Control the probe by sending commands to the current computer.',
      FunctionFlag: 2,
    },
    '148': {
      FunctionId: 148,
      Name: 'Resend System Information',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Virus Scanner, Shadowprotect and Other Inventory Information now.',
      FunctionFlag: 2,
    },
    '149': {
      FunctionId: 149,
      Name: 'Resend Network information',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Network Inventory Information now.',
      FunctionFlag: 2,
    },
    '150': {
      FunctionId: 150,
      Name: 'Service Startup Control',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The service name.',
          ParamName: 'Service Name',
        },
        {
          ParamName: 'Mode',
          Values: [
            'AutoStart',
            'Manual',
            'Disabled',
          ],
          Description: 'The startup mode to set.',
        },
      ],
      Description: 'Set the Service startup mode.',
      FunctionFlag: 2,
    },
    '151': {
      FunctionId: 151,
      Name: 'Net Set SNMP',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The IP or DNS name.',
          ParamName: 'Host Name',
        },
        {
          Description: 'The Community of the device.',
          ParamName: 'Community',
        },
        {
          Description: 'The numeric OID to set.',
          ParamName: 'OID',
        },
        {
          Description: 'The value to set the OID to.',
          ParamName: 'Value',
        },
      ],
      Description: 'Set a SNMP OID to a value.',
      FunctionFlag: 2,
    },
    '152': {
      FunctionId: 152,
      Name: 'Resend Patch information',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send Patch Inventory now.',
      FunctionFlag: 2,
    },
    '153': {
      FunctionId: 153,
      Name: 'Patch Install',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Patch ID',
          Values: [
            'Select Distinct Convert(CONCAT(REPLACE(Title,\':\',\'\'),CHAR(0),HotFixID) using Latin1) From hotfixdata order by Title~2',
          ],
          Description: 'The Patch to install.',
        },
      ],
      Description: 'Install a Patch on the current computer.',
      FunctionFlag: 2,
    },
    '154': {
      FunctionId: 154,
      Name: 'Folder Create',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the new folder.',
          ParamName: 'Folder',
        },
      ],
      Description: 'Create a folder on the target computer.',
      FunctionFlag: 2,
    },
    '155': {
      FunctionId: 155,
      Name: 'Folder Create as Admin',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the new folder.',
          ParamName: 'Folder',
        },
      ],
      Description: 'Create a folder on the target computer.',
      FunctionFlag: 2,
    },
    '156': {
      FunctionId: 156,
      Name: 'Folder Create as User',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the new folder.',
          ParamName: 'Folder',
        },
        {
          Description: 'Enter full username in Domain\\User format.',
          ParamName: 'Username',
        },
        {
          Description: 'The password to use.',
          ParamName: 'Password',
        },
      ],
      Description: 'Create a folder on the target computer.',
      FunctionFlag: 2,
    },
    '157': {
      FunctionId: 157,
      Name: 'Folder Move',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the target folder.',
          ParamName: 'Source Folder',
        },
        {
          Description: 'Full path to the destination Folder.',
          ParamName: 'Dest Folder',
        },
      ],
      Description: 'Move a folder on the target computer.',
      FunctionFlag: 2,
    },
    '158': {
      FunctionId: 158,
      Name: 'Folder Move as Admin',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the target folder.',
          ParamName: 'Source Folder',
        },
        {
          Description: 'Full path to the destination Folder.',
          ParamName: 'Dest Folder',
        },
      ],
      Description: 'Create a folder on the target computer.',
      FunctionFlag: 2,
    },
    '159': {
      FunctionId: 159,
      Name: 'Folder Move as User',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the target folder.',
          ParamName: 'Source Folder',
        },
        {
          Description: 'Full path to the destination Folder.',
          ParamName: 'Dest Folder',
        },
        {
          Description: 'Enter full username in Domain\\User format.',
          ParamName: 'Username',
        },
        {
          Description: 'The password to use.',
          ParamName: 'Password',
        },
      ],
      Description: 'Create a folder on the target computer.',
      FunctionFlag: 2,
    },
    '160': {
      FunctionId: 160,
      Name: 'Folder Delete',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the folder.',
          ParamName: 'Folder',
        },
      ],
      Description: 'Delete a folder on the target computer.',
      FunctionFlag: 2,
    },
    '161': {
      FunctionId: 161,
      Name: 'Folder Delete as Admin',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the folder.',
          ParamName: 'Folder',
        },
      ],
      Description: 'Delete a folder on the target computer.',
      FunctionFlag: 2,
    },
    '162': {
      FunctionId: 162,
      Name: 'Folder Delete as User',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full Path to the folder.',
          ParamName: 'Folder',
        },
        {
          Description: 'Enter full username in Domain\\User format.',
          ParamName: 'Username',
        },
        {
          Description: 'The password to use.',
          ParamName: 'Password',
        },
      ],
      Description: 'Delete a folder on the target computer.',
      FunctionFlag: 2,
    },
    '163': {
      FunctionId: 163,
      Name: 'File Delete as Admin',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path of file to delete.',
          ParamName: 'File Path',
        },
      ],
      Description: 'Delete file on remote computer.',
      FunctionFlag: 2,
    },
    '164': {
      FunctionId: 164,
      Name: 'File Delete as User',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path of file to delete.',
          ParamName: 'File Path',
        },
        {
          Description: 'Enter full username in Domain\\User format.',
          ParamName: 'Username',
        },
        {
          Description: 'The password to use.',
          ParamName: 'Password',
        },
      ],
      Description: 'Delete file on remote computer.',
      FunctionFlag: 2,
    },
    '165': {
      FunctionId: 165,
      Name: 'File Rename as Admin',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path of file to move\\rename.',
          ParamName: 'File Path',
        },
        {
          Description: 'Full path to the new file.',
          ParamName: 'New Path',
        },
      ],
      Description: 'Rename or move file on the remote computer.',
      FunctionFlag: 2,
    },
    '166': {
      FunctionId: 166,
      Name: 'File Rename as User',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Full path of file to move\\rename.',
          ParamName: 'File Path',
        },
        {
          Description: 'Full path to the new file.',
          ParamName: 'New Path',
        },
        {
          Description: 'Enter full username in Domain\\User format.',
          ParamName: 'Username',
        },
        {
          Description: 'The password to use.',
          ParamName: 'Password',
        },
      ],
      Description: 'Rename or move file on the remote computer.',
      FunctionFlag: 2,
    },
    '167': {
      FunctionId: 167,
      Name: 'File Copy as Admin',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The full path of the source file, without quotes.',
          ParamName: 'Source Path',
        },
        {
          Description: 'The full path of the destination file, without quotes.',
          ParamName: 'Destination Path',
        },
      ],
      Description: 'Copy a file on the remote computer.',
      FunctionFlag: 2,
    },
    '168': {
      FunctionId: 168,
      Name: 'File Copy as User',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The full path of the source file, without quotes.',
          ParamName: 'Source Path',
        },
        {
          Description: 'The full path of the destination file, without quotes.',
          ParamName: 'Destination Path',
        },
        {
          Description: 'Enter full username in Domain\\User format.',
          ParamName: 'Username',
        },
        {
          Description: 'The password to use.',
          ParamName: 'Password',
        },
      ],
      Description: 'Copy a file on the remote computer.',
      FunctionFlag: 2,
    },
    '169': {
      FunctionId: 169,
      Name: 'Console Shell',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Commands to execute',
          ParamName: 'Command',
        },
        {
          Description: 'Console Number',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Execute shell commands in the background on the user\'s console, using CMD.exe to execute them. Returns output to %shellresult%. This command has limited user environment access.',
      FunctionFlag: 2,
    },
    '170': {
      FunctionId: 170,
      Name: 'Console Registry Read',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Key or value to be read.',
          ParamName: 'Registry Key',
        },
        {
          Description: 'Console number to read key or value from, use %consolenumber% when IF logged on.',
          ParamName: 'Console Number',
        },
      ],
      Description: 'Reads a registry key or value and sets the %regresult% variable.',
      FunctionFlag: 2,
    },
    '171': {
      FunctionId: 171,
      Name: 'Script String Functions',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Operation',
          Values: [
            'Left',
            'Right',
            'Middle',
            'Upper Case',
            'Lower Case',
            'Reverse',
            'Trim Spaces',
            'Find String',
            'Last Find String',
            'Replace',
            'Insert',
            'URL Encode',
            'URL Decode',
            'HTML Encode',
            'HTML Decode',
            'MYSQL Encode',
            'Encrypt',
            'Decrypt',
            'LabTech Pipe Encode',
            'LabTech Pipe Decode',
            'Encrypt Version Two',
            'Decrypt Version Two',
            'Split',
          ],
          Description: 'Operation to perform.',
        },
        {
          Description: 'The string to perform the operation on.',
          ParamName: 'Original String',
        },
        {
          Description: 'Length of operation or string to use for replace,insert,find and last find,Delimiter for the split.',
          ParamName: 'Length',
        },
        {
          Description: 'Where to start operation from, or string to find for replace, or Position to return for split.',
          ParamName: 'Start Position',
        },
        {
          Description: 'Enter the variable name without the @.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Perform operations on a String and return the results to %stringresult% and the variable named.',
      FunctionFlag: 1,
    },
    '172': {
      FunctionId: 172,
      Name: 'SQL Get Value',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The SQL Statement to execute.',
          ParamName: 'SQL Query',
        },
        {
          Description: 'Leave blank to use the LabTech database. ',
          ParamName: 'ODBC Connection',
        },
      ],
      Description: 'Gets the first Column of the first Row returned by the query and saves it in %sqlresult%.',
      FunctionFlag: 1,
    },
    '173': {
      FunctionId: 173,
      Name: 'Telnet Open Connection',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Hostname or IP address of the device.',
          ParamName: 'Hostname',
        },
        {
          Description: 'Port to use.',
          ParamName: 'Port',
        },
        {
          Description: 'Timeout period (minutes).',
          ParamName: 'Timeout',
        },
      ],
      Description: 'Establishes a connection to a device using the Telnet protocol and stores the session ID in %telnetsessionid%. The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 2,
    },
    '174': {
      FunctionId: 174,
      Name: 'Telnet Send Raw',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open Telnet connection.',
          ParamName: 'Telnet Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send unencrypted data to a device that has an open Telnet connection. The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 2,
    },
    '175': {
      FunctionId: 175,
      Name: 'Telnet Send Secure',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open Telnet connection.',
          ParamName: 'Telnet Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send encrypted data to a device that has an open Telnet connection. The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 2,
    },
    '176': {
      FunctionId: 176,
      Name: 'Telnet Close Connection',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open Telnet connection.',
          ParamName: 'Telnet Session ID',
        },
      ],
      Description: 'Close an existing Telnet session.  The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 2,
    },
    '177': {
      FunctionId: 177,
      Name: 'SSH Open Connection',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Hostname or IP address of the device.',
          ParamName: 'Hostname',
        },
        {
          Description: 'Port to use.',
          ParamName: 'Port',
        },
        {
          Description: 'Timeout period (minutes).',
          ParamName: 'Timeout',
        },
        {
          Description: 'SSH Username.',
          ParamName: 'Username',
        },
        {
          Description: 'SSH Password.',
          ParamName: 'Password',
        },
      ],
      Description: 'Establishes a connection to a device using the SSH protocol and stores the session ID in %sshsessionid%. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 2,
    },
    '178': {
      FunctionId: 178,
      Name: 'SSH Send Raw',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open SSH connection.',
          ParamName: 'SSH Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send unencrypted data to a device that has an open SSH connection. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 2,
    },
    '179': {
      FunctionId: 179,
      Name: 'SSH Send Secure',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open SSH connection.',
          ParamName: 'SSH Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send encrypted data to a device that has an open SSH connection. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 2,
    },
    '180': {
      FunctionId: 180,
      Name: 'SSH Close Connection',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open SSH connection.',
          ParamName: 'SSH Session ID',
        },
      ],
      Description: 'Close an existing SSH session. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 2,
    },
    '181': {
      FunctionId: 181,
      Name: 'LTServer Shell Execute',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Command interpreter to use (e.g. cmd.exe) without parameters',
          ParamName: 'Command',
        },
        {
          Description: 'Parameters to pass to the executable.',
          ParamName: 'Arguments',
        },
      ],
      Description: 'Executes a shell command on the LabTech server and returns the results to %shellresult%.',
      FunctionFlag: 1,
    },
    '182': {
      FunctionId: 182,
      Name: 'LTServer Download to Server',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'URL',
        },
        {
          ParamName: 'Local File',
        },
      ],
      Description: 'Downloads a File from a URL and saves it to the LabTech Server.',
      FunctionFlag: 1,
    },
    '183': {
      FunctionId: 183,
      Name: 'LTServer Call Alert Template',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Alert Message, can be blank.',
          ParamName: 'Alert Message',
        },
        {
          ParamName: 'Failed',
          Values: [
            'False',
            'True',
          ],
          Description: 'Is this a Failure?',
        },
        {
          Description: 'A Number used to track this alert from others.',
          ParamName: 'Agent ID',
        },
        {
          Description: 'A Name used to track this from others',
          ParamName: 'Agent Name',
        },
        {
          Description: 'The Enter TemplateID to use.',
          ParamName: 'Alert Template',
        },
      ],
      Description: 'Call an alert template and perform the actions defined.',
      FunctionFlag: 1,
    },
    '184': {
      FunctionId: 184,
      Name: 'MatchGoto',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Variable name or value to match.',
          ParamName: 'Value',
        },
        {
          Description: 'Comma separated list of value/label pairs.  Example: (1,:StartProc),(2,:EndProc),(:DefaultLabel)',
          ParamName: 'Match Definition',
        },
      ],
      Description: 'Go to different labels depending on the given value.',
      FunctionFlag: 1,
    },
    '185': {
      FunctionId: 185,
      Name: 'File BITS Download',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Operation',
          Values: [
            'Download',
            'Status Check',
          ],
          Description: 'The operation to preform.',
        },
        {
          Description: 'Source URL or JobID',
          ParamName: 'Source',
        },
        {
          Description: 'Destination to Save File',
          ParamName: 'Destination',
        },
        {
          Description: 'Script ID to run when completed downloading.',
          ParamName: 'ScriptID',
        },
      ],
      Description: 'Download a File using the BITS Service or Check the Status of a Download. This returns the JOBID or the Status of the download.',
      FunctionFlag: 2,
    },
    '186': {
      FunctionId: 186,
      Name: 'Virus Scan',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The full path to scan.',
          ParamName: 'Path',
        },
      ],
      Description: 'Run a Virus scan on the target computer if the computer has a scanner installed with this ability. The command will fail if no scanner is detected.',
      FunctionFlag: 2,
    },
    '187': {
      FunctionId: 187,
      Name: 'Virus Definition Update',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Run a Virus Scanner Update on the target computer if the computer has a scanner installed with this ability. The command will fail if no scanner is detected.',
      FunctionFlag: 2,
    },
    '188': {
      FunctionId: 188,
      Name: 'Reboot to Safemode',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Reboots the computer to Safemode. This command returns immediately.',
      FunctionFlag: 2,
    },
    '189': {
      FunctionId: 189,
      Name: 'Reboot to Cmd Prompt',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Reboots the computer to Safemode with only a command prompt as the shell. This command returns immediately.',
      FunctionFlag: 2,
    },
    '190': {
      FunctionId: 190,
      Name: 'Hibernate',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Hibernates the computer if it supports this function. This command returns immediately.',
      FunctionFlag: 2,
    },
    '191': {
      FunctionId: 191,
      Name: 'Suspend',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Suspends the computer if it supports this function. This command returns immediately.',
      FunctionFlag: 2,
    },
    '192': {
      FunctionId: 192,
      Name: 'Reboot forced',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Issues a reboot command to the computer that bypasses all user prompting and template settings. The command gives the user 30 seconds to abort and then restarts the computer forcing any hung applications to close. ',
      FunctionFlag: 2,
    },
    '193': {
      FunctionId: 193,
      Name: 'LabTech Agent Uninstall',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Uninstalls the LabTech Agent from the target computer. This command returns immediately and no further commands can be sent to the computer.',
      FunctionFlag: 2,
    },
    '194': {
      FunctionId: 194,
      Name: 'LabTech Agent Update',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Tells the LabTech Agent to update itself to the latest version, the agent will update EVEN if it has the same version to refresh its files and correct any errors. This command returns immediately and no further commands can be sent to the computer.',
      FunctionFlag: 2,
    },
    '195': {
      FunctionId: 195,
      Name: 'LTServer Alert Delete',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The ID of the Alert to delete.',
          ParamName: 'AlertID',
        },
      ],
      Description: 'Deletes the Alert with the specific ID.',
      FunctionFlag: 1,
    },
    '196': {
      FunctionId: 196,
      Name: 'SQL Get DataSet',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The SQL Statement to execute.',
          ParamName: 'SQL Query',
        },
        {
          Description: 'Leave blank to use the LabTech database. ',
          ParamName: 'ODBC Connection',
        },
      ],
      Description: 'Gets the results of the query, and stores in %sqldataset% variable to be used by the Fetch Dataset Row function. Number of rows is stored in %sqldatasetrowcount%.',
      FunctionFlag: 1,
    },
    '197': {
      FunctionId: 197,
      Name: 'SQL Fetch DataSet Row',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The DataSet to pull information from, use sqldataset without % signs.',
          ParamName: 'SQL DataSet',
        },
        {
          Description: 'Which row of the dataset to use. ',
          ParamName: 'Row To Fetch',
        },
      ],
      Description: 'Gets the row of the DataSet (starting at row 1), and stores the value of each column in a variable referenced by the column name like @sqlCOLUMNNAME@.',
      FunctionFlag: 1,
    },
    '198': {
      FunctionId: 198,
      Name: 'Resend Everything',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Send all information now. Script will wait until last command is completed.',
      FunctionFlag: 2,
    },
    '199': {
      FunctionId: 199,
      Name: 'Script Stats Get',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Computer to load state for, use @computerid@ on computer scripts.',
          ParamName: 'ComputerID',
        },
        {
          Description: 'Name of the variable to load.',
          ParamName: 'Name',
        },
        {
          Description: 'Save results to this variable, without @ signs.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Get the scripts stat counter for this computer.',
      FunctionFlag: 1,
    },
    '200': {
      FunctionId: 200,
      Name: 'File Download (Forced)',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Local File',
          Values: [
            'Select Name From ServerFiles Order By Name~1',
          ],
          Description: 'Local file to send, must exist in the LTShare\\Transfer directory.  (IIS blocks some transfer of some files like *.config, *.vb, *.licx... by default)',
        },
        {
          Description: 'The full path to file destination including file name, without quotes.',
          ParamName: 'Destination Path',
        },
      ],
      Description: 'Transfers a file from the LabTech server and saves it to the local computer. Forces agent to perform download.',
      FunctionFlag: 2,
    },
    '201': {
      FunctionId: 201,
      Name: 'File Download URL (Forced)',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'URL to the file that is downloaded, urlencode any strange characters.',
          ParamName: 'URL',
        },
        {
          Description: 'Full path to the file to save the URL as including file name.',
          ParamName: 'Local File',
        },
        {
          ParamName: '',
          Values: [
            'Wait Until Finished',
            'Return Now',
          ],
          Description: 'Wait for the download if you need the file in the next steps.',
        },
      ],
      Description: 'Download file from external site and save it to a local file. Agent will be forced to perform download.',
      FunctionFlag: 2,
    },
    '202': {
      FunctionId: 202,
      Name: 'Ticket Attach File',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Ticket To Attach to',
          ParamName: 'Ticket ID',
        },
        {
          ParamName: 'User ID',
          Values: [
            'Select convert(CONCAT(Name,CHAR(0),UserID) using UTF8) from users Where UserID>0 Order By Name',
          ],
          Description: 'The user to perform the Attach or type a Variable name',
        },
        {
          Description: 'The Message to include as the Body.',
          ParamName: 'Body',
        },
        {
          Description: 'Local path on Server to file to attach.',
          ParamName: 'File Path',
        },
      ],
      Description: 'Attach File to an Existing Ticket.',
      FunctionFlag: 1,
    },
    '203': {
      FunctionId: 203,
      Name: 'Powershell Command as Admin',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Commands to execute',
          ParamName: 'Command',
        },
      ],
      Description: 'Execute powershell command using PS.exe to run them and store the result in %powershellresult%.',
      FunctionFlag: 2,
    },
    '204': {
      FunctionId: 204,
      Name: 'Mobile Command: Mobile Device Lock',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Runs a Mobile Command to lock the mobile device.',
      FunctionFlag: 8,
    },
    '205': {
      FunctionId: 205,
      Name: 'Mobile Command: Mobile Device Wipe',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Runs a Mobile Command to wipe mobile device data.',
      FunctionFlag: 8,
    },
    '206': {
      FunctionId: 206,
      Name: 'Mobile Command: Reset Password',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Runs a Mobile Command to reset the mobile device password.',
      FunctionFlag: 8,
    },
    '207': {
      FunctionId: 207,
      Name: 'Mobile Command: Set New Password',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Password to set.',
          ParamName: 'Password',
        },
      ],
      Description: 'Runs a Mobile Command to set a new mobile device password.',
      FunctionFlag: 8,
    },
    '208': {
      FunctionId: 208,
      Name: 'Mobile Command: Require New Password',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Runs a Mobile Command to require a new password be set on the mobile device.',
      FunctionFlag: 8,
    },
    '209': {
      FunctionId: 209,
      Name: 'Mobile Command: Generic Command',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Numerical command to execute.',
          ParamName: 'Command',
        },
        {
          Description: 'Parameters needed for the command.',
          ParamName: 'Parameters',
        },
        {
          Description: 'Comma separated list of Group IDs, must be blank if specifying a value in the ID field below.',
          ParamName: 'Group List',
        },
        {
          Description: 'ID of object to run against.',
          ParamName: 'ID',
        },
        {
          ParamName: 'ID Type',
          Values: [
            'Mobile Device',
            'Location',
            'Client',
          ],
          Description: 'Type of object of the above ID.',
        },
      ],
      Description: 'Runs a Mobile Command.',
      FunctionFlag: 8,
    },
    '210': {
      FunctionId: 210,
      Name: 'Mobile Command: Set Roaming',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Voice Roaming',
          Values: [
            'Disabled',
            'Enabled',
            'Do not alter',
          ],
        },
        {
          ParamName: 'Data Roaming',
          Values: [
            'Disabled',
            'Enabled',
            'Do not alter',
          ],
        },
      ],
      Description: 'Runs a Mobile Command to set mobile device voice and data roaming.',
      FunctionFlag: 8,
    },
    '211': {
      FunctionId: 211,
      Name: 'LabTech Plugin Alert',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Plugin Alert ID',
        },
        {
          ParamName: 'ClientID',
        },
        {
          ParamName: 'ComputerID',
        },
        {
          ParamName: 'Message',
        },
        {
          ParamName: 'Agent Name',
        },
      ],
      Description: 'Runs a Plugin Alert from a script, returns the results to %pluginalertresult%. This command is used to run plugins from scripts, this is very advanced and parameters are determined by the plugin.',
      FunctionFlag: 1,
    },
    '212': {
      FunctionId: 212,
      Name: 'IF File Compare',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Check Type',
          Values: [
            'Created',
            'Modified',
            'Accessed',
            'Version',
            'Contents',
            'Size',
            'MD5',
          ],
          Description: 'The type of file compare to perform.',
        },
        {
          Description: 'Full path to filename without quotes.',
          ParamName: 'File #1',
        },
        {
          Description: 'Full path to filename without quotes.',
          ParamName: 'File #2',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Compares 2 files on the agent and returns true if they are identical.',
      FunctionFlag: 2,
    },
    '213': {
      FunctionId: 213,
      Name: 'File Compare',
      Parameters: 3,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Check Type',
          Values: [
            'Created',
            'Modified',
            'Accessed',
            'Version',
            'Contents',
            'Size',
            'MD5',
          ],
          Description: 'The type of file compare to perform.',
        },
        {
          Description: 'Full path to filename without quotes.',
          ParamName: 'File #1',
        },
        {
          Description: 'Full path to filename without quotes.',
          ParamName: 'File #2',
        },
      ],
      Description: 'Compares 2 files on the agent and returns true if they are identical.',
      FunctionFlag: 2,
    },
    '214': {
      FunctionId: 214,
      Name: 'Bulk Registry Write',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Base registry key to start writing values at.',
          ParamName: 'Registry Key',
        },
        {
          Description: 'The name value pairs that are split and written.',
          ParamName: 'Name Value Pairs',
        },
      ],
      Description: 'Does a Bulk Import of Registry Keys, Starts at the Registry key and then Splits the Name value pairs By a Pipe and sets those names to values.',
      FunctionFlag: 2,
    },
    '215': {
      FunctionId: 215,
      Name: 'Script Exit with Error',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Exits the script and sets the failure status in the logs, All normal script exits and ends exit with success status.',
      FunctionFlag: 1,
    },
    '216': {
      FunctionId: 216,
      Name: 'Template Property Check',
      Parameters: 3,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Property Name',
          Values: [
            'Select Distinct(PropertyName) FROM TemplateProperties Order By PropertyName~1',
          ],
        },
        {
          ParamName: 'Compare',
          Values: [
            'Exists',
            'Not Exists',
            '=',
            'Not =',
            '<',
            '<=',
            '>',
            '>=',
            'Contains',
            'Not Contains',
          ],
        },
        {
          ParamName: 'To',
        },
      ],
      Description: 'Tests a Template Property.',
      FunctionFlag: 1,
    },
    '217': {
      FunctionId: 217,
      Name: 'Template Property Get Value',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Property Name',
          Values: [
            'Select Distinct(PropertyName) FROM TemplateProperties Order By PropertyName~1',
          ],
          Description: 'The name of property to retrieve.',
        },
        {
          Description: 'Put the results in this variable, without the @ signs.',
          ParamName: 'Variable',
        },
        {
          Description: 'Default value to use if variable not found.',
          ParamName: 'Default Value',
        },
      ],
      Description: 'Read a Template Property and save it to a variable. %templatepropertyfound% indicates whether property found (1) or not (0).',
      FunctionFlag: 1,
    },
    '218': {
      FunctionId: 218,
      Name: 'LabTech License Retrieve',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'License Type',
          Values: [
            'Select convert(CONCAT(LicenseName,CHAR(0),LicenseType) using latin1) from LicenseTypeLookup Order By LicenseName',
          ],
          Description: 'The type of license to retrieve.',
        },
        {
          ParamName: 'Target Type',
          Values: [
            'System',
            'Client',
            'Location',
            'Computer',
          ],
          Description: 'The target of license.',
        },
        {
          Description: 'The target Id of the license, if known, otherwise 0.',
          ParamName: 'Target Id',
        },
      ],
      Description: 'Retrieve a License and save it to %obtainedlicense%. %licensesuccess% indicates whether property found (1) or not (0).',
      FunctionFlag: 1,
    },
    '219': {
      FunctionId: 219,
      Name: 'LabTech License Deactivate',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The identifier of the Retrieved License, typically %obtainedlicenseid%.',
          ParamName: 'License Identifier',
        },
      ],
      Description: 'Reset a Retrieved License.',
      FunctionFlag: 1,
    },
    '220': {
      FunctionId: 220,
      Name: 'Plugin Enabled',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'GUID',
          Values: [
            'Select CONVERT(CONCAT(Name,CHAR(0),GUID) using UTF8) From Plugins Order By Name',
          ],
        },
      ],
      Description: 'Checks if a Plugin is loaded and enabled for use.',
      FunctionFlag: 2,
    },
    '221': {
      FunctionId: 221,
      Name: 'Plugin Agent Command Available',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Command ID',
        },
      ],
      Description: 'Checks if a Plugin Function Exists and is ready for use.',
      FunctionFlag: 2,
    },
    '222': {
      FunctionId: 222,
      Name: 'Plugin Server Function Available',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Function Guid',
        },
      ],
      Description: 'Checks if a Plugin Agent Command Exists and is ready for use.',
      FunctionFlag: 2,
    },
    '223': {
      FunctionId: 223,
      Name: 'Plugin Server Function',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Function to Execute',
          ParamName: 'Function Guid',
        },
        {
          ParamName: 'Parameter1',
        },
        {
          ParamName: 'Parameter2',
        },
        {
          ParamName: 'Parameters3',
        },
        {
          ParamName: 'Parameters4',
        },
      ],
      Description: 'Executes a Plugin Function and returns the results to %PluginResults%.',
      FunctionFlag: 1,
    },
    '224': {
      FunctionId: 224,
      Name: 'Plugin Agent Command',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Command to Execute',
          ParamName: 'Command ID',
        },
        {
          ParamName: 'Parameters',
        },
      ],
      Description: 'Executes an Agent Plugin Command and returns the results to %PluginCommandResults%.',
      FunctionFlag: 2,
    },
    '225': {
      FunctionId: 225,
      Name: 'IF Plugin Enabled',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'GUID',
          Values: [
            'Select CONVERT(CONCAT(Name,CHAR(0),GUID) using UTF8) From Plugins Order By Name',
          ],
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
        },
        {
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Checks to see if PlPlugin Name to Check.',
      FunctionFlag: 1,
    },
    '226': {
      FunctionId: 226,
      Name: 'IF Plugin Agent Command Available',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Command ID',
        },
        {
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Checks if a Plugin is loaded and enabled for use.',
      FunctionFlag: 1,
    },
    '227': {
      FunctionId: 227,
      Name: 'IF Plugin Server Function Available',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Function Guid',
        },
        {
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Checks if a Plugin Function Exists and is ready for use.',
      FunctionFlag: 1,
    },
    '228': {
      FunctionId: 228,
      Name: 'Maintenance Mode Start',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The Computer to Set',
          ParamName: 'ComputerID',
        },
        {
          Description: 'Time in Minutes.',
          ParamName: 'Duration',
        },
      ],
      Description: 'Sets Maintenance mode for the selected computer.',
      FunctionFlag: 2,
    },
    '229': {
      FunctionId: 229,
      Name: 'Maintenance Mode Clear',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'ComputerID',
        },
      ],
      Description: 'Clears Maintenance mode for the selected computer.',
      FunctionFlag: 2,
    },
    '230': {
      FunctionId: 230,
      Name: 'Email Load Attachment',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Path to File to load as an attachment',
          ParamName: 'File Path',
        },
        {
          Description: 'Variable to save the ID of the Attachment to.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Loads an attachment into the database for sending with email, returns %AttachmentID%.',
      FunctionFlag: 1,
    },
    '231': {
      FunctionId: 231,
      Name: 'Generate Random Password',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Minimum password length (Required, Must be > 0)',
          ParamName: 'Minimum Length',
        },
        {
          Description: ' Maximum password length (Required, Must be Greater than Minimum Length)',
          ParamName: 'Maximum Length',
        },
        {
          ParamName: 'Minimum Special Characters',
        },
        {
          ParamName: 'Minimum  Numerical Characters',
        },
        {
          ParamName: 'Minimum Upper Case Characters',
        },
      ],
      Description: 'Generates a Random password based on the given parameters (All parameters must be numeric or blank) and sets the %randompassword% variable.',
      FunctionFlag: 1,
    },
    '235': {
      FunctionId: 235,
      Name: 'Execute Script',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Script Type',
          Values: [
            'PowerShell',
            'VBScript',
            'Batch',
            'PowerShell Bypass',
          ],
          Description: 'Select Script Type.',
        },
        {
          Description: 'Enter Script (Use Button to Expand Text Editor).',
          ParamName: 'Script to Execute',
        },
        {
          Description: 'Enter Script Parameters to Send.',
          ParamName: 'Script Parameters',
        },
        {
          ParamName: 'Script Credentials',
          Values: [
            'Run as Local Agent',
            'Run as Admin',
          ],
          Description: 'Select Credentials to Use',
        },
        {
          Description: 'Enter Variable to Store Result of Output.',
          ParamName: 'Variable',
        },
      ],
      Description: 'Executes a script and stores the script in %invokedscript%, stores script result in the named variable.',
      FunctionFlag: 2,
    },
    '236': {
      FunctionId: 236,
      Name: 'Role Detected',
      Parameters: 1,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Role Definition',
          Values: [
            'Select CONVERT(CONCAT(RoleName,CHAR(0),RoleDetectionGuid) using UTF8) From RoleDefinitions Order By RoleName',
          ],
        },
      ],
      Description: 'Checks if role has been detected.',
      FunctionFlag: 1,
    },
    '237': {
      FunctionId: 237,
      Name: 'IF Role Detected',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Role Definition',
          Values: [
            'Select CONVERT(CONCAT(RoleName,CHAR(0),RoleDetectionGuid) using UTF8) From RoleDefinitions Order By RoleName',
          ],
          Description: 'Role Definition to check.',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Checks to see if Role has been detected',
      FunctionFlag: 1,
    },
    '238': {
      FunctionId: 238,
      Name: 'Script Call',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Label to jump to, you can return to this position with a script return function.',
          ParamName: 'Label',
        },
      ],
      Description: 'Jumps to a label and returns',
      FunctionFlag: 1,
    },
    '239': {
      FunctionId: 239,
      Name: 'Script Return',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Returns to the last script call function executed.',
      FunctionFlag: 1,
    },
    '240': {
      FunctionId: 240,
      Name: 'Check Connnectivity',
      Parameters: 0,
      FunctionType: 2,
      ParamNames: [],
      Description: 'Scans for the network device and saves the result in %pingresult%.',
      FunctionFlag: 4,
    },
    '241': {
      FunctionId: 241,
      Name: 'Get SNMP OID',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Numeric Object Identifier',
          ParamName: 'OID to Retrieve',
        },
        {
          Description: 'Enter Variable Name without the @.',
          ParamName: 'Variable to store result in',
        },
      ],
      Description: 'Gets a SNMP Object Identifier and saves result to variable.',
      FunctionFlag: 4,
    },
    '242': {
      FunctionId: 242,
      Name: 'Set SNMP OID',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'The numeric OID to set.',
          ParamName: 'OID to Set',
        },
        {
          ParamName: 'Data Type',
          Values: [
            'Counter (32bit)',
            'Counter (64bit)',
            'Gauge',
            'Integer',
            'Integer (unsigned-32bit)',
            'IP',
            'Null',
            'NSAP',
            'OID',
            'Opaque',
            'String',
            'Ticks',
          ],
          Description: 'The data type',
        },
        {
          Description: 'The value to set the OID to.',
          ParamName: 'Data',
        },
      ],
      Description: 'Set a SNMP OID to a value.',
      FunctionFlag: 4,
    },
    '243': {
      FunctionId: 243,
      Name: 'SSH Open',
      Parameters: 4,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Port',
        },
        {
          ParamName: 'Timeout',
        },
        {
          ParamName: 'Username',
        },
        {
          ParamName: 'Password',
        },
      ],
      Description: 'Establishes a connection to a device using the SSH protocol and stores the session ID in %sshsessionid%. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 4,
    },
    '244': {
      FunctionId: 244,
      Name: 'SSH Close',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'SSH Session ID',
        },
      ],
      Description: 'Close an existing SSH session. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 4,
    },
    '245': {
      FunctionId: 245,
      Name: 'SSH Send Raw',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open SSH connection.',
          ParamName: 'SSH Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send unencrypted data to a device that has an open SSH connection. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 4,
    },
    '246': {
      FunctionId: 246,
      Name: 'SSH Send Secure',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open SSH connection.',
          ParamName: 'SSH Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send encrypted data to a device that has an open SSH connection. The response is stored in %sshresult% and the success state in %sshsuccess%.',
      FunctionFlag: 4,
    },
    '247': {
      FunctionId: 247,
      Name: 'Telnet Open',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Port to use.',
          ParamName: 'Port',
        },
        {
          Description: 'Timeout period (minutes).',
          ParamName: 'Timeout',
        },
      ],
      Description: 'Establishes a connection to a device using the Telnet protocol and stores the session ID in %telnetsessionid%. The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 4,
    },
    '248': {
      FunctionId: 248,
      Name: 'Telnet Close',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open Telnet connection.',
          ParamName: 'Telnet Session ID',
        },
      ],
      Description: 'Close an existing Telnet session.  The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 4,
    },
    '249': {
      FunctionId: 249,
      Name: 'Telnet Send Raw',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open Telnet connection.',
          ParamName: 'Telnet Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send unencrypted data to a device that has an open Telnet connection. The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 4,
    },
    '250': {
      FunctionId: 250,
      Name: 'Telnet Send Secure',
      Parameters: 2,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Session ID of the open Telnet connection.',
          ParamName: 'Telnet Session ID',
        },
        {
          Description: 'Text to send to the device.',
          ParamName: 'Text To Send',
        },
      ],
      Description: 'Send encrypted data to a device that has an open Telnet connection. The response is stored in %telnetresult% and the success state in %telnetsuccess%.',
      FunctionFlag: 4,
    },
    '251': {
      FunctionId: 251,
      Name: 'Script for Each Computer',
      Parameters: 1,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Script To Run',
          Values: [
            'Select convert(CONCAT(ifnull(CONCAT(f.Name,\'\\\\\'),\'\'),s.Name,\'\\\\\',c.ScriptName,CHAR(0),c.scriptid) using latin1) FROM lt_scripts c join scriptfolders s on s.folderid=c.folderid left join scriptfolders f on f.folderid=s.parentid ORDER BY CONCAT((CASE WHEN f.name IS NULL THEN \'\' ELSE f.name END),s.name,c.scriptname)',
          ],
        },
      ],
      Description: 'Run a script on each computer associated with the contact.',
      FunctionFlag: 16,
    },
    '252': {
      FunctionId: 252,
      Name: 'Ticket Create for Network Devices',
      Parameters: 5,
      FunctionType: 2,
      ParamNames: [
        {
          Description: 'Client Id to link ticket to.',
          ParamName: 'Client ID',
        },
        {
          Description: 'Device ID to link the ticket to.',
          ParamName: 'Device ID',
        },
        {
          Description: 'Email address of ticket requestor.',
          ParamName: 'Email',
        },
        {
          Description: 'Subject of the ticket.',
          ParamName: 'Subject',
        },
        {
          Description: 'The Message to include as the Body.',
          ParamName: 'Body',
        },
      ],
      Description: 'Create a new support ticket and saves the ticket ID to %ticketid%.',
      FunctionFlag: 4,
    },
    '253': {
      FunctionId: 253,
      Name: 'IF Group Member',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Group Name',
          Values: [
            'Select CONVERT(CONCAT(FullName,CHAR(0),GroupID) using Latin1) From MasterGroups Order by FullName',
          ],
          Description: 'Name of the group to check.',
        },
        {
          Description: 'Use @networkdeviceid@ for the current network device.',
          ParamName: 'Network Device ID',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Tests if the network device is a member of the selected group or any of its children.',
      FunctionFlag: 4,
    },
    '254': {
      FunctionId: 254,
      Name: 'Group Member',
      Parameters: 2,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Group Name',
          Values: [
            'Select CONVERT(CONCAT(FullName,CHAR(0),GroupID) using Latin1) From MasterGroups Order by FullName',
          ],
          Description: '',
        },
        {
          Description: 'Use @networkdeviceid@ for the current network device.',
          ParamName: 'Network Device ID',
        },
      ],
      Description: 'Tests if the network device is a member of the selected group.',
      FunctionFlag: 4,
    },
    '255': {
      FunctionId: 255,
      Name: 'IF Group Member',
      Parameters: 3,
      FunctionType: 2,
      ParamNames: [
        {
          ParamName: 'Group Name',
          Values: [
            'Select CONVERT(CONCAT(FullName,CHAR(0),GroupID) using Latin1) From MasterGroups Order by FullName',
          ],
          Description: 'Name of the group to check.',
        },
        {
          Description: 'Use @contactid@ for the current contact.',
          ParamName: 'Contact ID',
        },
        {
          Description: 'Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with \'!\' to invert check.',
          ParamName: 'Label to Jump to or Steps to Skip',
        },
      ],
      Description: 'Tests if the contact is a member of the selected group or any of its children.',
      FunctionFlag: 16,
    },
    '256': {
      FunctionId: 256,
      Name: 'Group Member',
      Parameters: 2,
      FunctionType: 1,
      ParamNames: [
        {
          ParamName: 'Group Name',
          Values: [
            'Select CONVERT(CONCAT(FullName,CHAR(0),GroupID) using Latin1) From MasterGroups Order by FullName',
          ],
          Description: '',
        },
        {
          Description: 'Use @contactid@ for the current contact.',
          ParamName: 'Contact ID',
        },
      ],
      Description: 'Tests if the contact is a member of the selected group.',
      FunctionFlag: 16,
    },
  },
};

module.exports = Object.assign(constants, {});
