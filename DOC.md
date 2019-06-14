### LabTech Command
Runs an internal LabTech command.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Numerical command to execute. |
| Parameters |  | Parameters needed for the command. |
| Group List |  | Comma separated list of Group IDs, must be blank if specifying a value in the ID field below. |
| ID |  | ID of object to run against. |
| ID Type | [Computer, Location, Client]  | Type of object of the above ID. |

**Example Function Text**
```        
LTCommand: Update Agent 
LTCommand: Execute Command INPUTPARAMETER
LTCommand: Install Tool INPUTPARAMETER
LTCommand: Upload File INPUTPARAMETER
LTCommand: Download File INPUTPARAMETER
LTCommand: DownLoad URL INPUTPARAMETER
LTCommand: Identify OS INPUTPARAMETER
LTCommand: Scan Hosts INPUTPARAMETER
LTCommand: iSendScreenshot INPUTPARAMETER
LTCommand: Agent Tracing INPUTPARAMETER
```


### Variable Check
Runs the THEN if the condition is true.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Test the Variable's value |  | Enter Variable Name with the @ symbols around it. |
| Compare | [Exists, Not Exists, =, Not =, <, <=, >, >=, Contains, Not Contains, In, Not In]  | Exists is true if anything is returned. |
| To |  | Value to compare to. |

**Example Function Text**
```        
If Variable Check
```


### Process Kill
End process on remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Process Name |  | The process name or number to end. |

**Example Function Text**
```        
Terminate Process: @PROCESSNAME@
```


### File Delete
Delete file on remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path of file to delete. |

**Example Function Text**
```        
Delete: @FILEPATH@
Delete: @FILE@
```


### Registry Delete Key
Deletes a registry key or value.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Registry Key |  | The Key or value to be deleted |

**Example Function Text**
```        
Delete: [REGISTRY @REGISTRYKEY@]
```


### Process Execute
Run program in the background on remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File |  | Full path to executable. |
| Arguments |  | Parameters to pass to the executable. |
|  | [Wait for Process, Return Immediately]  | Wait for process to end before returning. |

**Example Function Text**
```        
Execute: @FILEPATH@ @ARGUMENTS@ and wait until finish, store the result in %executeresult%
Execute: @FILEPATH@ @ARGUMENTS@ and return immediately.
```


### Shell
Execute shell commands in the background, using CMD.exe to run them.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Commands to execute |

**Example Function Text**
```        
Shell: @SHELLCOMMAND@ and store the result in %shellresult%
```


### Script Run
Start a new script, all variables are passed to new script. If script fails then step will fail.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Script ID | Values loaded from database  | Choose script to run. |
| Delay |  | Leave blank or enter zero to run script as procedure, otherwise script will be scheduled to run the number of minutes entered. |

**Example Function Text**
```        
Run Script: c7a65c93-eadc-11e1-bca6-7ec667b1402e in Minutes: @DELAY@
Run Script: c7a65c93-eadc-11e1-bca6-7ec667b1402e
```


### File Upload
Send file from the remote computer to your LabTech server and save it in LTShare\Uploads. Returns %uploadedfile% with the local path to the file.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path to the file to send. |

**Example Function Text**
```        
Upload: @FILEPATH@ to LTSHARE\Uploads\, store the result in %uploadedfile%
```


### File Download URL
Download file from external site and save it to a local file.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| URL |  | URL to the file that is downloaded, urlencode any strange characters. |
| Local File |  | Full path to the file to save the URL as including file name. |
|  | [Wait Until Finished, Return Now]  | Wait for the download if you need the file in the next steps. |

**Example Function Text**
```        
Download: @URL@ saved to @LOCALFILE@ and wait until finish.
Download: @URL@ saved to @LOCALFILE@ and return immediately.
```


### Variable Set
Set a script variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Set Type | [Registry, Constant, Current ComputerID, Current ClientID, Current LocationID, Current Console Number, Temp Directory, File Contents, File Date, File Version, File Size, SQL Query, All Local Variables, Properties, Reload Computer Variables, Split NameValue Parameter, Get Virus Scanner Variables, Expand on Agent, File MD5 Hash]  | What type of value to use, some require parameters |
| Parameter |  | Enter required parameters |
| Variable Name |  | Name of variable to set, use @variablename@ in future parameters.  |

**Example Function Text**
```        
SET: @VARNAME@ = REGISTRY[@INPUTPARAMETER@]
SET: @VARNAME@ = @INPUTPARAMETER@
SET: @VARNAME@ = %computerid%
SET: @VARNAME@ = %clientid%
SET: @VARNAME@ = %locationid%
SET: @VARNAME@ = %consolenumber%
SET: @VARNAME@ = [Temporary Directory]
SET: @VARNAME@ = FILECONTENTS[@INPUTPARAMETER@]
SET: @VARNAME@ = FILEWRITEDATE[@INPUTPARAMETER@]
SET: @VARNAME@ = FILEVERSION[@INPUTPARAMETER@]
SET: @VARNAME@ = FILESIZE[@INPUTPARAMETER@]
SET: @VARNAME@ = SQLRESULT[@INPUTPARAMETER@]
SET: @VARNAME@ = [ALL LOCAL VARIABLES]
SET: @VARNAME@ = PROPERTY[@INPUTPARAMETER@]
SET: [RELOAD INTERNAL VARIABLES]
SET: Variables from Splitting @INPUTPARAMETER@
SET: Virus Scanner Variables for scanner #@INPUTPARAMETER@
SET: @VARNAME@ = AgentExpand[@INPUTPARAMETER@]
SET: @VARNAME@ = MD5[@INPUTPARAMETER@]
```


### Script Sleep
Pause the script and wait a number of seconds.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Seconds |  | Number of seconds to wait. |

**Example Function Text**
```        
Sleep: 123 seconds
```


### File Rename
Rename or move file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path of file to move\rename. |
| New Path |  | Full path to the new file. |

**Example Function Text**
```        
Rename: @FILEPATH@ to @NEWPATH@
Rename: @FILE@ to @NEWPATH@
```


### Email
Send an email message from the LabTech Server.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| To |  | Address to send email to, separate multiple addresses with a semi-colon(;) |
| Subject |  | Subject of email. |
| Body |  | Body of message. |
| File Path |  | Path to File to attach to email or List of Attachment IDs, Leave Empty for no Attachment |

**Example Function Text**
```        
Send Email To: @EMAIL@ Subject: @SUBJECT@
```


### Console Show Message
Popup message on user's desktop, User must be logged on, Use IF Logged On to Test.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Message |  | The message to display on the desktop. |
| Console Number |  | The console number to display on, use %consolenumber% obtained from IF User Logged on. |

**Example Function Text**
```        
Popup Message: @MESSAGE@ on Console #%consolenumber%
```


### Console Open Browser
Open the users Internet Explorer to the specified address, User must be logged on, Use IF Logged On to Test.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| URL |  | The address the browser should display. |
| Console Number |  | The console number we should display this on, use %consolenumber% when IF logged on. |

**Example Function Text**
```        
Open Browser to @URL@ on Console #%consolenumber%
```


### Registry Set Value
Write a Registry Value

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Registry Value |  | The Registry Key to write to |
| Data |  | The data to write. |
| Data Type | [Reg_String, Reg_Binary, Reg_DWORD, Reg_Multi_String, Reg_QWORD, Reg_Ex_String]  | The type of data to write. |

**Example Function Text**
```        
SET: @REGISTRYKEY@ = @DATA@
```


### File Download
Transfers a file from the LabTech server and saves it to the local computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Local File | Values loaded from database  | Local file to send, must exist in the LTShare\Transfer directory.  (IIS blocks some transfer of some files like *.config, *.vb, *.licx... by default) |
| Destination Path |  | The full path to file destination including file name, without quotes. |

**Example Function Text**
```        
Download: /Labtech/Transfer/@LOCALFILE@ saved to @DESTINATION@
```


### Script Log Message
Writes an informational entry to the script log.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Message |  | Message to write to the script log. |

**Example Function Text**
```        
LOG: @MESSAGE@
```


### Console Logoff User
Log the console and user off, User must be logged on, Use IF Logged On to Test.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Console Number |  | Console number to log off, use %consolenumber% when IF logged on. |

**Example Function Text**
```        
LOGOFF console: #%consolenumber%
```


### LabTech FasTalk
Toggle FasTalk Off\On or send FasTalk packet across network.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Control |  | Use 1 for On, 00 for Off or an IP address to send a network packet. |

**Example Function Text**
```        
Toggle FasTalk
Toggle FasTalk ON
Toggle FasTalk OFF
```


### Printer Set Default
Set the default printer on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Printer Name |  | Lookup the exact name of the printer in LabTech. |

**Example Function Text**
```        
Set Default Printer: @PRINTERNAME@
```


### Printer Clear Queue
Clear the printer queue.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Printer Name |  | Lookup the exact name of the printer in LabTech. |

**Example Function Text**
```        
Clear Printer Queue: @PRINTERNAME@
```


### File Copy
Copy a file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Source Path |  | The full path of the source file, without quotes. |
| Destination Path |  | The full path of the destination file, without quotes. |

**Example Function Text**
```        
Copy: @SOURCEPATH@ to @DESTINATION@
Copy: @SOURCE@ to @DESTINATION@
```


### Service Start
Start a windows service.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Service Name |  | The name of the service. |

**Example Function Text**
```        
Start Service: @SERVICENAME@
```


### Service Stop
Stop a windows service.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Service Name |  | The name of the service. |

**Example Function Text**
```        
Stop Service: @SERVICENAME@
```


### Console Screen Capture
Perform a Screen Capture on the users console, User must be logged on, Use IF Logged On to Test.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Console Number |  | Console number to capture on, use %consolenumber% when IF logged on. |

**Example Function Text**
```        
Capture Screen on Console: #%consolenumber%
```


### Disk Defrag
Defragment Drive, uses @computerid@ for the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Drive Letter |  | The drive letter to defragment |
| Result Variable |  | Put the results in this variable, without the @ signs. |

**Example Function Text**
```        
Defragment Drive: @DRIVELETTER@ and save result to @RESULTSVAR@
```


### Disk Check
Run chkdisk on a drive, uses @computerid@ for the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Drive Letter |  | The Drive Letter to scan, leave blank for all drives. |
| Result Variable |  | Put the results in this variable, without the @ signs. |

**Example Function Text**
```        
Scan Drive: @DRIVELETTER@ and save result to @RESULTSVAR@
```


### Performance Counter Get 
Read Performance Counter and save result to variable. Use performance monitor to obtain category and counter names.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Category |  | Performance Counter Category |
| Counter |  | Performance Counter |
| Instance |  | Performance Counter Instance, if there are multiple instances one must be specified. |
| Result Variable |  | Save results to this variable, without @ signs. |

**Example Function Text**
```        
Read Performance Counter: @CATEGORY@\@COUNTER@\@INSTANCE@ and save result to @RESULTSVAR@
```


### Console Execute
Run a program on user's desktop, User must be logged on, Use IF Logged On to Test and activate the %ConsoleNumber% variable. Returns data to "%executeresult% variable. This command has FULL Access to the User's Desktop, Network and Environment but will not return results of commands.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Executable |  | Full path to the program to run with quotes. |
| Arguments |  | The arguments passed to the executable. |
| Console Number |  | Console number to run program on, use %consolenumber% when IF logged on. |

**Example Function Text**
```        
Run: @EXECUTABLE@ @ARGUMENTS@ on Console #%consolenumber%
```


### Share Create
Share a Folder on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Directory Path |  | Full path to the directory to share. |
| Share Name |  | Name of Share. |

**Example Function Text**
```        
Share Folder: @DIRECTORYPATH@ as @SHARENAME@
```


### Share Delete
Delete Share on remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Share Name |  | Name of Share. |

**Example Function Text**
```        
Stop Sharing Folder: @SHARENAME@
```


### Resend Error Logs
Send the Remote Monitors Error logs from LTErrors.txt.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Error Logs
```


### Ticket Create
Create a new support ticket and saves the ticket ID to %ticketid%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Client ID |  | Client Id to link ticket to. |
| Computer ID |  | Computer ID to link the ticket to. |
| Email |  | Email address of ticket requestor. |
| Subject |  | Subject of the ticket. |
| Body |  | The Message to include as the Body. |

**Example Function Text**
```        
Create New Ticket for %clientid%\%computerid% Email: @EMAIL@ Subject: @SUBJECT@
```


### LTServer Create Alert
Create an alert, to create a system alert set Computer ID to 0. Returns %AlertID% with the ID of the alert created.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Computer ID |  | The computer ID to link the alert to, for computer scripts use @computerid@. |
| Severity | [Informational, Warning, Error, Critical]  | The severity of the alert. |
| Body |  | Body of the message. |
| Subject |  | Subject or Source of the Alert. |

**Example Function Text**
```        
Create Informational Alert: @SUBJECT@
Create Warning Alert: @SUBJECT@
Create Error Alert: @SUBJECT@
Create Critical Alert: @SUBJECT@
```


### Email Alerts
Send all alerts for target computer to email address, uses @computerid@ for the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Email |  | Address to send the alerts to. |
| Clear | [Yes, No]  | Clear this computers alerts after sending. |

**Example Function Text**
```        
Email Alerts to: @EMAIL@ and Clear.
Email Alerts to: @EMAIL@
```


### Resend EventLogs
Send Event Log Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend EventLogs
```


### Resend Hardware
Send Hardware Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Hardware
```


### Resend Process List
Send Process Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Process List
```


### Resend Autostartup List
Send Autostartup Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Autostartup List
```


### Resend Drive Info
Send Disk Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Drive Info
```


### Resend Software
Send Software Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Software
```


### Resend Config
Update the Templates and Config now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Config
```


### Resend Service List
Send Service Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Service List
```


### Resend Printers
Send Printer Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Printers
```


### Net Wake on Lan
Send wake on Lan packet from the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| MAC |  | MAC address of target computer, use : to separate VALUES . |

**Example Function Text**
```        
Wake on LAN sent to @ComputerID@
Wake on LAN sent to @MACADDRESS@
```


### Offline Backup
Performs LabTech offline backup, using template or global settings.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| FTP Directory |  | Initial Directory on FTP Server. |
| File Password |  | Password for the zip archive. |
| File Size |  | Maximum file size. |
| File Path |  | Full path to backup, disables my doc backup. |
| File Filter |  | File filter for my documents backup. |

**Example Function Text**
```        
Perform Offline Backup and store the result in %backupsize%
```


### SQL Execute
Run a SQL statement.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SQL Statement |  | The SQL statement to run. |
| ODBC Connection |  | Leave blank to use the LabTech Database. |

**Example Function Text**
```        
SQL EXECUTE: @SQLSTATEMENT@
```


### Tool Install
Install or remove a Tool\Tweak.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Action | [Install, Remove]  | Install or Remove. |
| Tool ID | Values loaded from database  | Name of Tool to perform action to. |

**Example Function Text**
```        
Tool Install: AppID=
Tool Remove: AppID=@INPUTPARAMETER@
```


### Variable Check
Compares a variable to the specified data and skips if the result is TRUE.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Variable Name |  | Enter variable name without % or @. Script will attempt to use %variablename%, if no match is found it will attempt to use @variablename@. |
| Compare | [Exists, Not Exists, =, Not =, <, <=, >, >=, Contains, Not Contains, In, Not In]  | Logical Operator. |
| To |  | Value to compare to. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. |

**Example Function Text**
```        
IF VARIABLENAME@ < @COMPAREVALUE@ THEN Jump to line 142
IF @VARIABLENAME@ = @COMPAREVAR@ THEN Jump to :Label
IF @VARIABLENAME@ Contains @COMPAREVAR@ THEN Jump to :Label
IF @VARIABLENAME@ Not Contains @COMPAREVAR@ THEN Jump to :Label
IF @VARIABLENAME@ In @COMPAREVAR@ THEN Jump to :Label
IF @VARIABLENAME@ Not In @COMPAREVAR@ THEN Jump to :Label
```


### Ticket Assign
Assign Ticket to specified user.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | ID of Ticket to Assign. |
| User | Values loaded from database  | User to Assign the ticket to or type a Variable name. |

**Example Function Text**
```        
Assign Ticket @TICKETID@ to user 1
```


### LTServer Execute
Runs a program on the LabTech Server. Must not show windows or require any user action.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Program Path |  | Path to program to run. |
| Arguments |  | Parameters to pass to the program. |

**Example Function Text**
```        
Run on the Labtech Server: @PROGRAMPATH@ @ARGUMENTS@
```


### Disk Cleanup
Run the internal LabTech disk cleanup according to the settings in the config, uses @computerid@ for the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Perform a Disk Cleanup
```


### LTServer Write to File
Write to a file on the LabTech Server.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Name |  | Full path to the file. |
| Message |  | The text data to write to the file. |

**Example Function Text**
```        
LTServer Write @MESSAGE@ to @FILENAME@
```


### LTServer Net Send
Send a NetBIOS message from the LabTech Server.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| NetBios Name |  | The computer or user to send the message to. |
| Message |  | The message to send. |

**Example Function Text**
```        
Send NetBios Message from the Labtech Server to @NETBIOSNAME@
```


### LTServer Voice Message
Place Voice call from the LabTech Server.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Phone Number |  | The exact number to dial. |
| Message |  | The message to read over the phone. |

**Example Function Text**
```        
Make Voice Call to @PHONENUMBER@
```


### LTServer Pager Message
Send Pager message from the LabTech Server.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Phone Number |  | The exact number to dial. |
| Message |  | Numeric message to send. |

**Example Function Text**
```        
Make Page Call to @PHONENUMBER@
```


### LTServer Send Fax
Send a fax from the LabTech Server.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Phone Number |  | The Exact number to dial. |
| Message |  | Message to fax. |

**Example Function Text**
```        
Make Fax Call to @PHONENUMBER@
```


### ExtraData Set Value
Save an Extra Data Field from a variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Extra Field | Values loaded from database  | The field ends with the type of ID. 1=computer 2=locationid 3=client 4=probe 5=device 6=ticket 7=group 13=contact |
| ID |  | Use the correct ID type, like @computerid@. |
| Value |  | If specifying a variable, include @ signs. |

**Example Function Text**
```        
SET: [EXTRAFIELD 34cd0cf3-2f61-11e1-ac0f-3d76979114ae - @computerid@] = @VALUE@
```


### Net Get SNMP
Gets a SNMP Object Identifier and saves it to %snmpresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Host Name |  | The hostname or IP Address. |
| Community |  | The community string to use. |
| OID |  | Numeric Object Identifier. |

**Example Function Text**
```        
Get SNMP @OID@ from @HOSTNAME@ storing it in %snmpresult%
```


### File Zip
Add List of files to compressed zip archive.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Path List |  | A comma separated list of full paths. |
| Archive |  | The full path to the save the zip archive. |

**Example Function Text**
```        
Zip Files @PATHLIST@ to @ARCHIVE@ storing the size in %zipsize%
```


### Add User Accounts
Adds a new user account to the local computer unless this is a domain controller then it creates a domain account.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Username |  | Do not include the domain name or quotes. |
| Password |  | Password to use for new user account. |

**Example Function Text**
```        
Add User @USERNAME@ with password @PASSWORD@ storing the result in %userresult%
```


### Net TFTP Send
Send a local TFTP File to a machine.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File name |  | The file must exist in the %Windir%\ltsvc\TFTP directory, without quotes. |
| Server Address |  | The hostname or IP Address. |

**Example Function Text**
```        
TFTP Send file @FILENAME@ to @SERVERADDRESS@ storing the result in %tftpresult%
```


### Play Sound
Play a sound file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Wave File |  | The full path to the wave file. |

**Example Function Text**
```        
Play Wave @WAVEFILE@
```


### Net Renew IP
Renews the remote computers IP address.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Renew IP Address
```


### Net Ping
Ping a hostname and save the result in %pingresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Host name |  | The hostname or IP Address. |

**Example Function Text**
```        
Pinging @HOSTNAME@ storing the result in %pingresult%
```


### Net IPConfig
Returns the IPConfig information and saves it to %ipconfigresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
IPConfig and store the result in %ipconfigresult%
```


### Net DNS Lookup
Performs a DNS Lookup on the remote computer and saves the result to %dnsresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Host Name |  | The hostname or IP Address. |

**Example Function Text**
```        
Nslookup @HOSTNAME@ storing the result in %dnsresult%
```


### File Write Text
Save text to a file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Text File |  | The full path to the file, will replace existing file. |
| Data |  | The text to write to the file. |

**Example Function Text**
```        
Write @DATA@ to @TEXTFILE@
```


### Net Get IP Port
Connects to Internet Protocol port and reads characters into %portresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Type | [TCP, UDP]  | Select the protocol to use. |
| Host name |  | The hostname or IP Address. |
| Port |  | The port number to connect to. |
| Data |  | Data to send after connect, leave blank for none. |
| Receive Bytes |  | Number of bytes to receive, enter 0 for listen test. |

**Example Function Text**
```        
Connect to @HOSTNAME@ TCP storing the result in %portresult%
Connect to @HOSTNAME@ UDP storing the result in %portresult%
```


### Script For Each
Run a script with each variable in comma separated list.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Script To Run | Values loaded from database  | Execute this script on each variable in the list. |
| List |  | The comma separated list |
| Variable  |  | The variable to set with the value obtained from the list. |

**Example Function Text**
```        
FOR each @VARNAME@ in @LIST@ run script c7a65c93-eadc-11e1-bca6-7ec667b1402e
```


### Report Email
Email Report as PDF attachment.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Report | Values loaded from database  | The report to run. |
| Email |  | Email address to send report to. |
| Selection |  | The Crystal Reports selection string to limit the results. |
| Subject |  | The Subject of the Email |
| Message |  | The Body of the message as the report will be a PDF attachment. |

**Example Function Text**
```        
Email: Agent_Status Report TO: @EMAIL@
```


### Report Print
Print Report to printer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Report | Values loaded from database  | The report to run. |
| Printer |  | The name of the printer to print to, leave blank for default printer. |
| Selection |  | The Crystal Reports selection string to limit the results. |

**Example Function Text**
```        
Print: Agent_Status Report on the Labtech Servers Default Printer
Print: Agent_Status Report on the Labtech Servers Default Printer
```


### Script State Clear
Clear the script state variable for this script.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | Computer to clear the state on, use @computerid@ on computer scripts. |

**Example Function Text**
```        
Clear Script State for: @computerid@
```


### Script State Set
Save a variable to the script state to use later. Script state is unique for every script and computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | Computer to save state for, use @computerid@ on computer scripts. |
| Name |  | Name of the variable to save or leave empty to save all script variables. |
| Value |  | Value to save to the variable. |

**Example Function Text**
```        
SET: [ALL STATE Variables] = @VALUE@ for computer @computerid@
```


### Script State Get
Load a variable from the script state.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | Computer to load state for, use @computerid@ on computer scripts. |
| Name |  | Name of the variable to load or leave empty to load all script variables. |
| Variable |  | Save results to this variable, without @ signs. Ignored when loading all variables. |

**Example Function Text**
```        
GET: VARIABLE = ALL State Variables for computer @computerid@
```


### Script Stats Clear
Clear the script stats for this computer. Stats can be used to track counts of actions performed.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | Computer to load stat for, use @computerid@ on computer scripts. |
| Name |  | Name of the stat to clear, leave blank to clear all stats. |

**Example Function Text**
```        
Clear Script Stat: @NAME@ for: @computerid@
```


### Script Stats Save
Adds 1 to the script stat counter for the computer specified.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | Computer to save stat for, use @computerid@ on computer scripts. |
| Name |  | Name of the stat to save. |

**Example Function Text**
```        
SET: [STAT @NAME@] = [STAT @NAME@]+1 for computer @computerid@
```


### Script Math
Performs specified math function on the values and stores the result in %MathResult% as well as the specified script variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Value |  | First numeric value to use. |
| Operator | [+, -, *, \, div, mod, pow, abs, max, min]  | Operation to perform. |
| Value |  | ABS does not need a second value. |
| Variable |  | Enter the variable name without the @ symbols around it. |

**Example Function Text**
```        
SET: @RESULTSVAR@ = @VALUE@ + @VALUE@
SET: @RESULTSVAR@ = @VALUE@ - @VALUE@
SET: @RESULTSVAR@ = @VALUE@ * @VALUE@
SET: @RESULTSVAR@ = @VALUE@ \ @VALUE@
SET: @RESULTSVAR@ = @VALUE@ DIV @VALUE@
SET: @RESULTSVAR@ = @VALUE@ MOD @VALUE@
SET: @RESULTSVAR@ = @VALUE@ POWER OF @VALUE@
SET: @RESULTSVAR@ = @VALUE@ ABS(@VALUE@)
SET: @RESULTSVAR@ = @VALUE@ MAX(@VALUE@, @VALUE@)
SET: @RESULTSVAR@ = @VALUE@ MIN(@VALUE@, @VALUE@)
```


### Script RegEx
Performs regular expression parsing for the given value and stores the result in %RegEXResult% and the named variable, use VBScript/VB.net syntax.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Value |  | The value to test. |
| Pattern |  | The expression to use, if groups are defined the first group is returned. |
| Variable |  | Enter the variable name without the @ symbols around it. |

**Example Function Text**
```        
SET: @RESULTSVAR@ = MATCH(@VALUE@ PATTERN @PATTERN@)
```


### Ticket Combine
Combine Ticket into master ticket.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Master Ticket |  | The Ticket to keep |
| Combined Ticket |  | The Ticket to get rid of |

**Example Function Text**
```        
Combine Ticket: @COMBINEDVAR@ into @MASTERTICKET@
```


### Ticket Finish
Finish Ticket as User.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | Ticket To Finish |
| User ID | Values loaded from database  | ID Number of the user to perform the Finish or type a Variable name |
| Body |  | The Message to include as the Body. |

**Example Function Text**
```        
Finish Ticket: @TICKETID@ to 1
```


### Ticket Stall
Stall or Unstall Ticket.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | Ticket ID To Stall |
| Action | [Stall, Unstall]  | Stall Or Unstall Ticket |
| Date To Unstall |  | If Stalling Ticket, unstall on this date (YYYY-MM-DD HH:MM:SS) |

**Example Function Text**
```        
Stall Ticket: @TICKETID@
Unstall Ticket: @TICKETID@
```


### Ticket Open
Open Ticket as User.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | Ticket To Open |
| User ID | Values loaded from database  | ID Number of the user to perform the Open or type a Variable name |
| Comment |  | The comment to include in the summary. |

**Example Function Text**
```        
Open Ticket: @TICKETID@ to user 1
```


### Ticket Comment
Comment on Ticket as User.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | Ticket To Comment on |
| User ID | Values loaded from database  | ID Number of the user to perform the Comment or type a Variable name |
| Body |  | The Message to include as the Body. |
| Respond | [Yes, No]  | Send an Email to the Requestor |

**Example Function Text**
```        
Comment Ticket: @TICKETID@ to user 1
```


### Shell Enhanced
Execute shell commands in the background, using CMD.exe to run them.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Commands to execute |
| Delimiter |  | Used to split the variable list and the results returned by the shell command |
| Variable List |  | List of Variable to be set from the resulting shell command |

**Example Function Text**
```        
Shell: @INPUTPARAMETER@ split result by @DELIMITER@ and save results to @VARIABLELIST@
```


### IF Process Exists
Check if the process is running and sets the %processid% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Process Name |  | Name or ID of Process to Check. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF PROCESS EXISTS @PROCESSNAME@ THEN Exit Script
IF PROCESS EXISTS INPUTPARAMETER THEN Jump to line 136
IF NOT PROCESS EXISTS @PROCESSNAME@ THEN Jump to line 137
IF PROCESS EXISTS @PROCESSNAME@ THEN Jump to :Label
IF NOT PROCESS EXISTS @PROCESSNAME@ THEN Jump to :Label
IF PROCESS EXISTS @INPUTPARAMETER@ THEN Jump to :Label
```


### IF Registry Check
Test the Registry Value and sets the %registryresult% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Registry Key |  | End the Value name with a \ to indicate a Key rather than a value. |
| Compare | [Exists, Not Exists, =, Not =, <, <=, >, >=, Contains, Not Contains]  | For Keys Exists and Not Exists are the only applicable choices. |
| To |  | Leave blank for Exists and Not Exists. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF [REGISTRY @REGISTRYKEY@] = @COMPAREVALUE@ THEN Exit Script
IF [REGISTRY @REGISTRYKEY@] <= @COMPAREVALUE@ THEN Jump to line 141
IF [REGISTRY @INPUTPARAMETER@] Exists  THEN Jump to :Label
```


### IF Service is Running
Check if the Service is Running and sets the %servicename% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Service Name |  | Name of service to check. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF SERVICE RUNNING @SERVICENAME@ THEN Jump to :Label
IF SERVICE RUNNING @INPUTPARAMETER@ THEN Jump to :Label
```


### IF File Check
Check if the file Exists or does Not Exist.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path to the file to test. |
| Compare | [Exists, Not Exists]  | Returns true if the condition is met. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF FILE Exists @FILEPATH@ THEN Jump to :Label
IF FILE Exists @INPUTPARAMETER@ THEN Jump to :Label
IF FILE Not Exists @INPUTPARAMETER@ THEN Jump to :Label
```


### IF Console Logged On
Return True if user is logged on and sets the %consolenumber% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Username |  | Check if the specific user is logged on, leave blank for anyone. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF USER LOGGED IN @USERNAME@ THEN Jump to :Label
IF NOT USER LOGGED IN  THEN Jump to :NoConsoleUser
IF USER LOGGED IN @INPUTPARAMETER@ THEN Jump to :Label
```


### IF User Response
Ask the User a Yes or No Question and jumps to the Label to Jump to or Steps to Skip if Yes.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Question |  | The question to ask. |
| Console Number |  | Console Number to ask the question on, get this from a previous script.  |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF USER RESPONSE YES TO @QUESTION@ ON CONSOLE #%consolenumber% THEN Exit Script
IF USER RESPONSE YES TO @QUESTION@ ON CONSOLE #%consolenumber% THEN Exit Script
```


### IF SQL Data Check
Test a Value from the Database and set %sqlresult% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Sql Statement |  | Statement must return 1 value. |
| Compare | [Exists, Not Exists, =, Not =, <, <=, >, >=, Contains, Not Contains]  | Logical Operator. |
| To |  | Value to compare. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |
| ODBC Connection |  | Leave blank to use the LabTech database. |

**Example Function Text**
```        
IF [SQL @SQLSTATEMENT@] <= @COMPAREVAR@ THEN Jump to :Label
IF [SQL @SQLSTATEMENT@] Exists  THEN Jump to :Label
```


### IF Smart Attributes
Tests if an Attribute is under its threshold for the current computer and sets the %smartresult% variable with the drive.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Smart Attribute | Values loaded from database  | The attribute to test. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF SMART ATTRIBUTE 11 FAILED THEN Jump to :Label
IF SMART ATTRIBUTE 99 FAILED THEN Jump to :Label
```


### IF Drive Status
Returns True if any of the Conditions are met and sets the %driveletter% variable with the drive.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| FreeSpace |  | Minimum Percentage of free space |
| Fragmentation |  | Maximum Fragmentation that is acceptable for this drive |
| MFT Frag |  | Maximum MFT Fragmentation that is acceptable. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF DRIVE STATUS BAD THEN Jump to :Label
IF DRIVE STATUS BAD THEN Jump to :Label
```


### IF Software Installed
Check if software package is installed and set the %softwarelocation% variable with the path.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| App Name |  | The name of the application to check for. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF SOFTWARE INSTALLED @APPNAME@ THEN Jump to :Label
IF SOFTWARE INSTALLED @APPNAME@ THEN Jump to :Label
```


### IF Patch Installed
Check if Patch is installed.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Patch ID | Values loaded from database  | Select Patch or type Variable Name. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF PATCH INSTALLED HotFixId 5c9e30a9-9015-44a4-9be9-94d6b8fac949 THEN Jump to :Label
```


### IF AutoStartup Check
Checks Startup Value for result and sets the %autostartupvalue% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| AutoStart Def | Values loaded from database  | Pick the Location to check. |
| Compare | [Exists, Not Exists, =, Not =, <, <=, >, >=, Contains, Not Contains]  | Logical Operator. |
| To |  | Value to compare. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF AUTOSTARTUP AutoDefId 1 < @COMPARETO@ THEN Jump to :Label
IF AUTOSTARTUP AutoDefId 2 < @COMPAREVAR@ THEN Jump to :Label
IF AUTOSTARTUP AutoDefId 1 Exists  THEN Jump to :Label
```


### IF Tool Installed
Check if Tool\Tweak is installed.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Tool ID | Values loaded from database  | Name of Tool to check. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF TOOL INSTALLED 0 THEN Jump to :Label
IF TOOL INSTALLED 0 THEN Jump to :Label
```


### IF New Unassigned Ticket
Runs the True part when a new ticket exists and sets the %ticketid% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Client ID |  | The Client to search, leave blank for all clients. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF NEW UNASSIGNED TICKET FOR CLIENT @CLIENTID@ THEN Jump to :Label
```


### Process Execute as Admin
Run program in the background as the administrator account defined for this location on remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File |  | Full path to executable. |
| Arguments |  | Parameters to pass to the executable. |
|  | [Wait for Process, Return Immediatly]  | Wait for process to end before returning. |

**Example Function Text**
```        
Execute as Admin: @FILE@ @ARGUMENTS@ and wait until finish, store the result in %executeresult%
Execute as Admin: @FILE@ @ARGUMENTS@ and return immediately.
```


### Shell as Admin
Execute shell commands as the administrator account defined for this location, using CMD.exe to run them.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Commands to execute |

**Example Function Text**
```        
Shell as Admin: @COMMAND@ and store the result in %shellresult%
```


### Process Execute as User
Run program in the background as the username specified below.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File |  | Full path to executable. |
| Arguments |  | Parameters to pass to the executable. |
|  | [Wait for Process, Return Immediatly]  | Wait for process to end before returning. |
| Username |  | The username to run this process as. |
| Password |  | The password used with this username. |

**Example Function Text**
```        
Execute as @USERNAME@: @FILE@ @ARGUMENTS@ and wait until finish, store the result in %executeresult%
Execute as @USERNAME@: @FILE@ @ARGUMENTS@ and return immediately.
```


### Shell as User
Execute shell commands as the username specified below, using CMD.exe to run them.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Commands to execute |
| Username |  | The username to run this process as. |
| Password |  | The password used with this username. |

**Example Function Text**
```        
Shell as @USERNAME@: @COMMAND@ and store the result in %shellresult%
```


### Script Goto
Jumps to label or skips steps either forward or back.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Label to Jump to or Steps to Skip |  | Enter Zero to Exit the Script. |

**Example Function Text**
```        
Exit Script
GOTO: line 307
GOTO: :Label
```


### IF Group Member
Tests if the computer is a member of the selected group or any of its children.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Group Name | Values loaded from database  | Name of the group to check. |
| Computer ID |  | Use @ComputerID@ for the current computer. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF Member of GroupId 1045 THEN Jump to :Label
```


### Patch Install All
Deploy Windows Updates to the current computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Action | [All Missing Patches, Missing Security Patches, Missing Approved Patches]  | Action to perform. |
| Script ID |  | Script to run on completion of patch install. |

**Example Function Text**
```        
HotFix Install: All Missing Patches
HotFix Install: All Missing Security Patches
HotFix Install: All Missing Approved Patches
```


### Windows Update Settings
Set the Windows Update Agents settings.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Action | [Restore Defaults, Set WSUS Server, Force Windows Update, Windows Update Download Only, Enable Windows Update at Time, Disable Windows Update, Disable Access to Windows Update, Set LabTech Mode, Install WUA Agent]  | Action to perform. |
| WSUS or Time: |  | Enter Time as Day:Time |

**Example Function Text**
```        
Windows Update Setting Restore Defaults to: @WSUS@
Windows Update Setting Set WSUS Server to: @WSUS@
Windows Update Setting Force Windows Update to: @WSUS@
Windows Update Setting Windows Update Download Only to: @WSUS@
Windows Update Setting Enable Windows Update at Time to: @WSUS@
Windows Update Setting Disable Windows Update to: @WSUS@
Windows Update Setting Disable Access to Windows Update to: @WSUS@
Windows Update Setting Set LabTech Mode to: @WSUS@
Windows Update Setting Install WUA Agent to: @WSUS@
```


### Ticket Add Time
Add Time to Ticket as User.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | Ticket to add time to. |
| User ID | Values loaded from database  | ID Number of the user to perform the Comment or type a Variable name |
| Body |  | The Message to include as the Body. |
| Time |  | Number of Minutes to Add. |
| Time Category ID |  | ID Number of the Time Category to add. |

**Example Function Text**
```        
Add @TIME@ Minutes to Ticket #@TICKETID@
```


### Powershell Command
Execute powershell command using PS.exe to run them and store the result in %powershellresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Commands to execute |

**Example Function Text**
```        
PowerShell: @COMMAND@ and store the result in %powershellresult%
```


### Patch Approve
Approve all Security Patches for the group selected.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Group Name | Values loaded from database  | Name of group to approve patches to. |

**Example Function Text**
```        
Approve All Hotfixes for GroupId: 1045
```


### LTServer Record Stat
Record Stat to the Extra stats to be used with reporting.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Stat Number | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]  | Over 10 can be Strings |
| Value |  | The Value to Save as a stat |
| Computer ID |  | The Computer ID  |

**Example Function Text**
```        
Record Stat #1 AS @VALUE@ For @computerid@
```


### LabTech Send Message to Computer
Send a Preformatted message to the User.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Message | Values loaded from database  | The Message to use. |
| Computer ID |  | ID of computer to send message to. |
| Parameters to Pass to the Script |  | Extra Parameters to REPLACE with this script |

**Example Function Text**
```        
Send Message MessageId 1 To ComputerId @computerid@
```


### Script Note
Adds a remark to the script and will not be executed.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Remark |  | Remark to be added to script, use : at start to specify a label. |

**Example Function Text**
```        
Note: NOTE TEXT @NOTETEXT@
:CustomLabel - Label
```


### IF Ticket Status
Tests if a Ticket is set to the selected status.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | Ticket ID to test. |
| Status | Values loaded from database  | Status to Equal if true |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF Ticket @TICKETID@ Exists THEN Jump to :Label
```


### Ticket Reading View
Create a Ticket Reading View and Save it to %ticketreadingview%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | The ID of the Ticket to use |
| Newest on Top | [Yes, No]  | List Items starting with the newest. |
| HTML | [Yes, No]  | Use HTML for message. |
| For Customer | [Yes, No]  | Hide internal Ticketing information.  |

**Example Function Text**
```        
SET: %ticketreadingview% = TicketReadingView(#@TICKETID@)
```


### Ticket Update
Update Ticket information.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Requestor Email |  | Leave blank to keep existing. |
| Priority |  | Leave blank to keep existing. |
| Subject |  | Leave blank to keep existing. |
| Category ID |  | Leave blank to keep existing. |
| Ticket ID |  | ID of ticket to Update. |

**Example Function Text**
```        
Update Ticket #@TICKETID@ set Email=@REQUESTOREMAIL@ Priority=@PRIORITY@ Subject=@SUBJECT@ Category=@CATEGORYID@
```


### Ticket Elevate
Elevate the selected ticket to the next level.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | The Ticket ID to Elevate. |

**Example Function Text**
```        
Elevate Ticket #@TICKETID@
```


### Script For Each SQL
Performs a SQL Query and runs a script for each row returned setting all returned columns to internal variables like this %sqlCOLUMNNAME%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SQL |  | The SQL Query to execute. |
| Script To Run | Values loaded from database  | Choose the script to run on each row. |
| ODBC Connection |  | Leave blank to use the LabTech database. |

**Example Function Text**
```        
FOR each row in @SQL@ run script c7a65c93-eadc-11e1-bca6-7ec667b1402e
```


### LabTech Probe Control
Control the probe by sending commands to the current computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Control Command | [Reattempt Push, Reinventory Devices, Rescan Network]  | The Command to send to the Probe. |

**Example Function Text**
```        
Probe Control - Reattempt Push
Probe Control - Reinventory Devices
Probe Control - Rescan Network
```


### Resend System Information
Send Virus Scanner, Shadowprotect and Other Inventory Information now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend System Information
```


### Resend Network information
Send Network Inventory Information now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Network information
```


### Service Startup Control
Set the Service startup mode.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Service Name |  | The service name. |
| Mode | [AutoStart, Manual, Disabled]  | The startup mode to set. |

**Example Function Text**
```        
Set Service: @SERVICENAME@ to AutoStart
Set Service: @SERVICENAME@ to Manual
Set Service: @SERVICENAME@ to Disabled
```


### Net Set SNMP
Set a SNMP OID to a value.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Host Name |  | The IP or DNS name. |
| Community |  | The Community of the device. |
| OID |  | The numeric OID to set. |
| Value |  | The value to set the OID to. |

**Example Function Text**
```        
Set SNMP OID @OID@ to @VALUE@ for @HOSTNAME@ using community @COMMUNITY@
```


### Resend Patch information
Send Patch Inventory now.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Patch information
```


### Patch Install
Install a Patch on the current computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Patch ID | Values loaded from database  | The Patch to install. |

**Example Function Text**
```        
HotFix Install: HotFixId 5c9e30a9-9015-44a4-9be9-94d6b8fac949
```


### Folder Create
Create a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Folder |  | Full Path to the new folder. |

**Example Function Text**
```        
Create Folder: @FOLDER@
```


### Folder Create as Admin
Create a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Folder |  | Full Path to the new folder. |

**Example Function Text**
```        
Create Folder as Admin: @FOLDER@
```


### Folder Create as User
Create a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Folder |  | Full Path to the new folder. |
| Username |  | Enter full username in Domain\User format. |
| Password |  | The password to use. |

**Example Function Text**
```        
Create Folder as @USERNAME@: @FOLDER@
```


### Folder Move
Move a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Source Folder |  | Full Path to the target folder. |
| Dest Folder |  | Full path to the destination Folder. |

**Example Function Text**
```        
Move Folder: @SOURCE@ to @DEST@
```


### Folder Move as Admin
Create a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Source Folder |  | Full Path to the target folder. |
| Dest Folder |  | Full path to the destination Folder. |

**Example Function Text**
```        
Move Folder as Admin: @SOURCE@ to @DEST@
```


### Folder Move as User
Create a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Source Folder |  | Full Path to the target folder. |
| Dest Folder |  | Full path to the destination Folder. |
| Username |  | Enter full username in Domain\User format. |
| Password |  | The password to use. |

**Example Function Text**
```        
Move Folder as @USERNAME@: @SOURCE@ to @DEST@
```


### Folder Delete
Delete a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Folder |  | Full Path to the folder. |

**Example Function Text**
```        
Delete Folder: @FOLDER@
```


### Folder Delete as Admin
Delete a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Folder |  | Full Path to the folder. |

**Example Function Text**
```        
Delete Folder as Admin: @FOLDER@
```


### Folder Delete as User
Delete a folder on the target computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Folder |  | Full Path to the folder. |
| Username |  | Enter full username in Domain\User format. |
| Password |  | The password to use. |

**Example Function Text**
```        
Delete Folder as @USERNAME@: @FOLDER@
```


### File Delete as Admin
Delete file on remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path of file to delete. |

**Example Function Text**
```        
Delete File as Admin: @FILE@
```


### File Delete as User
Delete file on remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path of file to delete. |
| Username |  | Enter full username in Domain\User format. |
| Password |  | The password to use. |

**Example Function Text**
```        
Delete File as @USERNAME@: @FILE@
```


### File Rename as Admin
Rename or move file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path of file to move\rename. |
| New Path |  | Full path to the new file. |

**Example Function Text**
```        
Rename File as Admin: @FILE@ to @NEWPATH@
```


### File Rename as User
Rename or move file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Full path of file to move\rename. |
| New Path |  | Full path to the new file. |
| Username |  | Enter full username in Domain\User format. |
| Password |  | The password to use. |

**Example Function Text**
```        
Rename File as @USERNAME@: @FILE@ to @NEWPATH@
```


### File Copy as Admin
Copy a file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Source Path |  | The full path of the source file, without quotes. |
| Destination Path |  | The full path of the destination file, without quotes. |

**Example Function Text**
```        
Copy File as Admin: @SOURCE@ to @DESTINATION@
```


### File Copy as User
Copy a file on the remote computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Source Path |  | The full path of the source file, without quotes. |
| Destination Path |  | The full path of the destination file, without quotes. |
| Username |  | Enter full username in Domain\User format. |
| Password |  | The password to use. |

**Example Function Text**
```        
Copy File as @USERNAME@: @SOURCE@ to @DESTINATION@
```


### Console Shell
Execute shell commands in the background on the user's console, using CMD.exe to execute them. Returns output to %shellresult%. This command has limited user environment access.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Commands to execute |
| Console Number |  | Console Number |

**Example Function Text**
```        
Console Shell: @COMMAND@ on %consolenumber%
```


### Console Registry Read
Reads a registry key or value and sets the %regresult% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Registry Key |  | The Key or value to be read. |
| Console Number |  | Console number to read key or value from, use %consolenumber% when IF logged on. |

**Example Function Text**
```        
Console Registry Read: @REGISTRYKEY@ on %consolenumber%
```


### Script String Functions
Perform operations on a String and return the results to %stringresult% and the variable named.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Operation | [Left, Right, Middle, Upper Case, Lower Case, Reverse, Trim Spaces, Find String, Last Find String, Replace, Insert, URL Encode, URL Decode, HTML Encode, HTML Decode, MYSQL Encode, Encrypt, Decrypt, LabTech Pipe Encode, LabTech Pipe Decode, Encrypt Version Two, Decrypt Version Two, Split]  | Operation to perform. |
| Original String |  | The string to perform the operation on. |
| Length |  | Length of operation or string to use for replace,insert,find and last find,Delimiter for the split. |
| Start Position |  | Where to start operation from, or string to find for replace, or Position to return for split. |
| Variable |  | Enter the variable name without the @. |

**Example Function Text**
```        
SET: @RESULTSVAR@ = LEFT(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = RIGHT(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = MID(@ORIGINALSTRING@,@START@,@LENGTH@)
SET: @RESULTSVAR@ = UPPER(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = LOWER(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = REVERSE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = TRIMSPACE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = INDEXOF(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = LASTINDEXOF(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = REPLACE(@ORIGINALSTRING@,@START@,@LENGTH@)
SET: @RESULTSVAR@ = INSERT(@ORIGINALSTRING@,@LENGTH@,@START@)
SET: @RESULTSVAR@ = URLENCODE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = URLDECODE(@ORIGINALSTRING@,)
SET: @RESULTSVAR@ = HTMLENCODE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = HTMLDECODE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = MYSQLENCODE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = ENCRYPT(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = DECRYPT(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = LTPIPEENCODE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = LTPIPEDECODE(@ORIGINALSTRING@)
SET: @RESULTSVAR@ = ENCRYPTv2(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = DECRYPTv2(@ORIGINALSTRING@,@LENGTH@)
SET: @RESULTSVAR@ = SPLIT(@ORIGINALSTRING@,@LENGTH@,@START@)
```


### SQL Get Value
Gets the first Column of the first Row returned by the query and saves it in %sqlresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SQL Query |  | The SQL Statement to execute. |
| ODBC Connection |  | Leave blank to use the LabTech database.  |

**Example Function Text**
```        
SET: %sqlresult% = [@SQLQUERY@]
```


### Telnet Open Connection
Establishes a connection to a device using the Telnet protocol and stores the session ID in %telnetsessionid%. The response is stored in %telnetresult% and the success state in %telnetsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Hostname |  | Hostname or IP address of the device. |
| Port |  | Port to use. |
| Timeout |  | Timeout period (minutes). |

**Example Function Text**
```        
Open Telnet To: "@HOSTNAME@", Port: 23, Timeout: 15
```


### Telnet Send Raw
Send unencrypted data to a device that has an open Telnet connection. The response is stored in %telnetresult% and the success state in %telnetsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Telnet Session ID |  | Session ID of the open Telnet connection. |
| Text To Send |  | Text to send to the device. |

**Example Function Text**
```        
Telnet Send To: @TEXT@ unencrypted to Telnet session ID: %telnetsessionid%
```


### Telnet Send Secure
Send encrypted data to a device that has an open Telnet connection. The response is stored in %telnetresult% and the success state in %telnetsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Telnet Session ID |  | Session ID of the open Telnet connection. |
| Text To Send |  | Text to send to the device. |

**Example Function Text**
```        
Telnet Send To: @TEXT@ encrypted to Telnet session ID: %telnetsessionid%
```


### Telnet Close Connection
Close an existing Telnet session.  The response is stored in %telnetresult% and the success state in %telnetsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Telnet Session ID |  | Session ID of the open Telnet connection. |

**Example Function Text**
```        
Close Telnet session ID: %telnetsessionid%
```


### SSH Open Connection
Establishes a connection to a device using the SSH protocol and stores the session ID in %sshsessionid%. The response is stored in %sshresult% and the success state in %sshsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Hostname |  | Hostname or IP address of the device. |
| Port |  | Port to use. |
| Timeout |  | Timeout period (minutes). |
| Username |  | SSH Username. |
| Password |  | SSH Password. |

**Example Function Text**
```        
Open SSH To: "@HOSTNAME@", Port: 22, Timeout: 15
```


### SSH Send Raw
Send unencrypted data to a device that has an open SSH connection. The response is stored in %sshresult% and the success state in %sshsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SSH Session ID |  | Session ID of the open SSH connection. |
| Text To Send |  | Text to send to the device. |

**Example Function Text**
```        
SSH Send: @TEXT@ unencrypted to SSH session ID: %sshsessionid%
```


### SSH Send Secure
Send encrypted data to a device that has an open SSH connection. The response is stored in %sshresult% and the success state in %sshsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SSH Session ID |  | Session ID of the open SSH connection. |
| Text To Send |  | Text to send to the device. |

**Example Function Text**
```        
SSH Send: @TEXT@ encrypted to SSH session ID: %sshsessionid%
```


### SSH Close Connection
Close an existing SSH session. The response is stored in %sshresult% and the success state in %sshsuccess%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SSH Session ID |  | Session ID of the open SSH connection. |

**Example Function Text**
```        
Close SSH Session ID: %sshsessionid%
```


### LTServer Shell Execute
Executes a shell command on the LabTech server and returns the results to %shellresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Command interpreter to use (e.g. cmd.exe) without parameters |
| Arguments |  | Parameters to pass to the executable. |

**Example Function Text**
```        
LabTech Server Shell Execute: @COMMAND@ @ARGUMENTS@
```


### LTServer Call Alert Template
Call an alert template and perform the actions defined.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Alert Message |  | The Alert Message, can be blank. |
| Failed | [False, True]  | Is this a Failure? |
| Agent ID |  | A Number used to track this alert from others. |
| Agent Name |  | A Name used to track this from others |
| Alert Template |  | The Enter TemplateID to use. |

**Example Function Text**
```        
LabTech Server Call Alert Template: @ALERTTEMPLATE@
```


### MatchGoto
Go to different labels depending on the given value.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Value |  | Variable name or value to match. |
| Match Definition |  | Comma separated list of value/label pairs.  Example: (1,:StartProc),(2,:EndProc),(:DefaultLabel) |

**Example Function Text**
```        
MatchGoto: @MATCH@
```


### File BITS Download
Download a File using the BITS Service or Check the Status of a Download. This returns the JOBID or the Status of the download.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Operation | [Download, Status Check]  | The operation to preform. |
| Source |  | Source URL or JobID |
| Destination |  | Destination to Save File |
| ScriptID |  | Script ID to run when completed downloading. |

**Example Function Text**
```        
BITS Download: @SOURCE@ saved to @DESTINATION@
BITS Status Check: @SOURCE@
```


### Virus Scan
Run a Virus scan on the target computer if the computer has a scanner installed with this ability. The command will fail if no scanner is detected.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Path |  | The full path to scan. |

**Example Function Text**
```        
Virus Scan: @PATH@
```


### Virus Definition Update
Run a Virus Scanner Update on the target computer if the computer has a scanner installed with this ability. The command will fail if no scanner is detected.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Virus Definition Update
```


### Reboot to Safemode
Reboots the computer to Safemode. This command returns immediately.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Reboot to Safemode
```


### Reboot to Cmd Prompt
Reboots the computer to Safemode with only a command prompt as the shell. This command returns immediately.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Reboot to Cmd Prompt
```


### Hibernate
Hibernates the computer if it supports this function. This command returns immediately.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Hibernate
```


### Suspend
Suspends the computer if it supports this function. This command returns immediately.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Suspend
```


### Reboot forced
Issues a reboot command to the computer that bypasses all user prompting and template settings. The command gives the user 30 seconds to abort and then restarts the computer forcing any hung applications to close. 

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Reboot forced
```


### LabTech Agent Uninstall
Uninstalls the LabTech Agent from the target computer. This command returns immediately and no further commands can be sent to the computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function LabTech Agent Uninstall
```


### LabTech Agent Update
Tells the LabTech Agent to update itself to the latest version, the agent will update EVEN if it has the same version to refresh its files and correct any errors. This command returns immediately and no further commands can be sent to the computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function LabTech Agent Update
```


### LTServer Alert Delete
Deletes the Alert with the specific ID.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| AlertID |  | The ID of the Alert to delete. |

**Example Function Text**
```        
LTServer delete alert: @ALERTID@
```


### SQL Get DataSet
Gets the results of the query, and stores in %sqldataset% variable to be used by the Fetch Dataset Row function. Number of rows is stored in %sqldatasetrowcount%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SQL Query |  | The SQL Statement to execute. |
| ODBC Connection |  | Leave blank to use the LabTech database.  |

**Example Function Text**
```        
SET: %sqldataset% = SQL Get DataSet: @SQLQUERY@
```


### SQL Fetch DataSet Row
Gets the row of the DataSet (starting at row 1), and stores the value of each column in a variable referenced by the column name like @sqlCOLUMNNAME@.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| SQL DataSet |  | The DataSet to pull information from, use sqldataset without % signs. |
| Row To Fetch |  | Which row of the dataset to use.  |

**Example Function Text**
```        
Fetch row: @ROWS@ from dataset: @SQLDATASET@
```


### Resend Everything
Send all information now. Script will wait until last command is completed.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Resend Everything
```


### Script Stats Get
Get the scripts stat counter for this computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | Computer to load state for, use @computerid@ on computer scripts. |
| Name |  | Name of the variable to load. |
| Variable |  | Save results to this variable, without @ signs. |

**Example Function Text**
```        
SET: @VALUE@ = Script Stat (@NAME@)
```


### File Download (Forced)
Transfers a file from the LabTech server and saves it to the local computer. Forces agent to perform download.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Local File | Values loaded from database  | Local file to send, must exist in the LTShare\Transfer directory.  (IIS blocks some transfer of some files like *.config, *.vb, *.licx... by default) |
| Destination Path |  | The full path to file destination including file name, without quotes. |

**Example Function Text**
```        
Download Force: /Labtech/Transfer/@LOCALFILE@ saved to @DESTINATION@
```


### File Download URL (Forced)
Download file from external site and save it to a local file. Agent will be forced to perform download.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| URL |  | URL to the file that is downloaded, urlencode any strange characters. |
| Local File |  | Full path to the file to save the URL as including file name. |
|  | [Wait Until Finished, Return Now]  | Wait for the download if you need the file in the next steps. |

**Example Function Text**
```        
Download Force: @URL@ saved to @LOCALFILE@ and wait until finish.
Download Force: @URL@ saved to @LOCALFILE@ and return immediately.
```


### Ticket Attach File
Attach File to an Existing Ticket.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Ticket ID |  | Ticket To Attach to |
| User ID | Values loaded from database  | The user to perform the Attach or type a Variable name |
| Body |  | The Message to include as the Body. |
| File Path |  | Local path on Server to file to attach. |

**Example Function Text**
```        
Attach File: @FILEPATH@ to ticket #@TICKETID@
```


### Powershell Command as Admin
Execute powershell command using PS.exe to run them and store the result in %powershellresult%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command |  | Commands to execute |

**Example Function Text**
```        
PowerShell as Admin: @COMMAND@
```


### LabTech Plugin Alert
Runs a Plugin Alert from a script, returns the results to %pluginalertresult%. This command is used to run plugins from scripts, this is very advanced and parameters are determined by the plugin.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Plugin Alert ID |  | undefined |
| ClientID |  | undefined |
| ComputerID |  | undefined |
| Message |  | undefined |
| Agent Name |  | undefined |

**Example Function Text**
```        
Raise Plugin alert for: @PLUGINALERTID@
```


### IF File Compare
Compares 2 files on the agent and returns true if they are identical.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Check Type | [Created, Modified, Accessed, Version, Contents, Size, MD5]  | The type of file compare to perform. |
| File #1 |  | Full path to filename without quotes. |
| File #2 |  | Full path to filename without quotes. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF @FILE1@ = @FILE2@ THEN Jump to :Label
IF @FILE1@ = @FILE2@ THEN Jump to :Label
IF @FILE1@ = @FILE2@ THEN Jump to :Label
IF @FILE1@ = @FILE2@ THEN Jump to :Label
IF @FILE1@ = @FILE2@ THEN Jump to :Label
IF @FILE1@ = @FILE2@ THEN Jump to :Label
IF @FILE1@ = @FILE2@ THEN Jump to :Label
```


### Bulk Registry Write
Does a Bulk Import of Registry Keys, Starts at the Registry key and then Splits the Name value pairs By a Pipe and sets those names to values.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Registry Key |  | The Base registry key to start writing values at. |
| Name Value Pairs |  | The name value pairs that are split and written. |

**Example Function Text**
```        
Bulk Registry Write to key: @REGISTRYKEY@
```


### Script Exit with Error
Exits the script and sets the failure status in the logs, All normal script exits and ends exit with success status.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Function Script Exit with Error
Function Script Exit with Error
```


### Template Property Get Value
Read a Template Property and save it to a variable. %templatepropertyfound% indicates whether property found (1) or not (0).

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Property Name | Values loaded from database  | The name of property to retrieve. |
| Variable |  | Put the results in this variable, without the @ signs. |
| Default Value |  | Default value to use if variable not found. |

**Example Function Text**
```        
SET: @VARIABLE@ = TemplateProperty(@PROPERTYNAME@)
```


### LabTech License Retrieve
Retrieve a License and save it to %obtainedlicense%. %licensesuccess% indicates whether property found (1) or not (0).

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| License Type | Values loaded from database  | The type of license to retrieve. |
| Target Type | [System, Client, Location, Computer]  | The target of license. |
| Target Id |  | The target Id of the license, if known, otherwise 0. |

**Example Function Text**
```        
Retrieve License into %obtainedlicense% with an ID of %obtainedlicenseid%
```


### LabTech License Deactivate
Reset a Retrieved License.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| License Identifier |  | The identifier of the Retrieved License, typically %obtainedlicenseid%. |

**Example Function Text**
```        
Deactivate License ID: %obtainedlicenseid%
```


### Plugin Server Function
Executes a Plugin Function and returns the results to %PluginResults%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Function Guid |  | The Function to Execute |
| Parameter1 |  | undefined |
| Parameter2 |  | undefined |
| Parameters3 |  | undefined |
| Parameters4 |  | undefined |

**Example Function Text**
```        
Plugin Function PluginId: ec90525e-9d73-11e4-bf92-005056844d96
```


### Plugin Agent Command
Executes an Agent Plugin Command and returns the results to %PluginCommandResults%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command ID |  | The Command to Execute |
| Parameters |  | undefined |

**Example Function Text**
```        
Plugin Command PluginId: 1049 Params: @PARAMETERS@
Plugin Command PluginId: 1049 Params: 
```


### IF Plugin Enabled
Checks to see if PlPlugin Name to Check.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| GUID | Values loaded from database  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |
| Label to Jump to or Steps to Skip |  | undefined |

**Example Function Text**
```        
IF PluginId 24b84eb4-2104-11e1-b223-6e3ff20334fb Plugin Enabled THEN Exit Script
```


### IF Plugin Agent Command Available
Checks if a Plugin is loaded and enabled for use.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Command ID |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |
| Label to Jump to or Steps to Skip |  | undefined |

**Example Function Text**
```        
IF SvcCommandId 1049 Agent Command Available THEN Jump to line :Label1315
```


### IF Plugin Server Function Available
Checks if a Plugin Function Exists and is ready for use.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Function Guid |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |
| Label to Jump to or Steps to Skip |  | undefined |

**Example Function Text**
```        
IF FunctionId ec90525e-9d73-11e4-bf92-005056844d96 Server Function Available THEN Jump to line :Label1316
```


### Maintenance Mode Start
Sets Maintenance mode for the selected computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | The Computer to Set |
| Duration |  | Time in Minutes. |

**Example Function Text**
```        
Set Maintenance Mode for @DURATION@ Minutes on @computerid@
```


### Maintenance Mode Clear
Clears Maintenance mode for the selected computer.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| ComputerID |  | undefined |

**Example Function Text**
```        
Clear Maintenance Mode for @computerid@
```


### Email Load Attachment
Loads an attachment into the database for sending with email, returns %AttachmentID%.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| File Path |  | Path to File to load as an attachment |
| Variable |  | Variable to save the ID of the Attachment to. |

**Example Function Text**
```        
SET: @VARIABLE@ = AttachmentID(@FILEPATH@)
```


### Generate Random Password
Generates a Random password based on the given parameters (All parameters must be numeric or blank) and sets the %randompassword% variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Minimum Length |  | Minimum password length (Required, Must be > 0) |
| Maximum Length |  |  Maximum password length (Required, Must be Greater than Minimum Length) |
| Minimum Special Characters |  | undefined |
| Minimum  Numerical Characters |  | undefined |
| Minimum Upper Case Characters |  | undefined |

**Example Function Text**
```        
Generate Random Password INTO %randompassword%
```


### Execute Script
Executes a script and stores the script in %invokedscript%, stores script result in the named variable.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Script Type | [PowerShell, VBScript, Batch, PowerShell Bypass]  | Select Script Type. |
| Script to Execute |  | Enter Script (Use Button to Expand Text Editor). |
| Script Parameters |  | Enter Script Parameters to Send. |
| Script Credentials | [Run as Local Agent, Run as Admin]  | Select Credentials to Use |
| Variable |  | Enter Variable to Store Result of Output. |

**Example Function Text**
```        
Execute: PowerShell Script as Local and store result in: @VARIABLE@
Execute: PowerShell Script as Admin and store result in: @VARIABLE@
Execute: VBScript as Local and store result in: @VARIABLE@
Execute: VBScript as Admin and store result in: @VARIABLE@
Execute: Batch as Local and store result in: @VARIABLE@
Execute: Batch as Admin and store result in: @VARIABLE@
Execute: PowerShell Bypass as Local and store result in: @VARIABLE@
Execute: PowerShell Bypass as Admin and store result in: @VARIABLE@
```


### IF Role Detected
Checks to see if Role has been detected

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Role Definition | Values loaded from database  | Role Definition to check. |
| Label to Jump to or Steps to Skip |  | Label to jump to or the number of steps to skip when the result is true, zero to exit script. Prefix with '!' to invert check. |

**Example Function Text**
```        
IF Role detected - AD Domain Controller:c79927ec-2b6f-11e3-9392-08002788414b - Then Jump to :Label
```


### Script Call
Jumps to a label and returns

**Parameters**

| Param | Values | Note |
| --- | --- | --- |
| Label |  | Label to jump to, you can return to this position with a script return function. |

**Example Function Text**
```        
Call: :Label
```


### Script Return
Returns to the last script call function executed.

**Parameters**

| Param | Values | Note |
| --- | --- | --- |


**Example Function Text**
```        
Return from Call
```


